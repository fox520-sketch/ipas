(function () {
  "use strict";

  const EXAM_DATE = new Date("2026-11-14T09:00:00+08:00");
  const STORAGE_KEY = "ipas-ai-quiz-progress-v1";
  const REVIEW_OFFSETS = [1, 3, 7];
  const EXAM_MINUTES = 30;
  const letters = ["A", "B", "C", "D"];
  const bank = window.QUESTION_BANK || [];
  let timerHandle = null;

  const defaultProgress = () => ({
    attempts: {},
    reviewQueue: {},
    wrongIds: [],
    sessions: 0,
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    lastStudyDate: null
  });

  function dateKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function addDays(key, days) {
    const [y, m, d] = key.split("-").map(Number);
    const value = new Date(y, m - 1, d);
    value.setDate(value.getDate() + days);
    return dateKey(value);
  }

  function migrateProgress(input) {
    const progress = { ...defaultProgress(), ...(input || {}) };
    progress.attempts = progress.attempts && typeof progress.attempts === "object" ? progress.attempts : {};
    progress.reviewQueue = progress.reviewQueue && typeof progress.reviewQueue === "object" ? progress.reviewQueue : {};
    progress.wrongIds = Array.isArray(progress.wrongIds) ? progress.wrongIds : [];
    progress.wrongIds.forEach(id => {
      if (!progress.reviewQueue[id]) {
        progress.reviewQueue[id] = { stage: 0, originDate: dateKey(), nextDue: dateKey(), reason: "答錯" };
      }
    });
    return progress;
  }

  function readProgress() {
    try {
      return migrateProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (_) {
      return defaultProgress();
    }
  }

  const state = {
    progress: readProgress(),
    screen: "home",
    subject: "all",
    topic: null,
    quiz: [],
    index: 0,
    selected: null,
    confidence: "中",
    checked: false,
    sessionAnswers: [],
    examAnswers: {},
    flagged: [],
    examEndsAt: null,
    mode: "practice"
  };

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function daysLeft() {
    return Math.max(0, Math.ceil((EXAM_DATE - new Date()) / 86400000));
  }

  function subjectName(subject) {
    return subject === 1 ? "科目 1｜人工智慧技術應用與規劃" : "科目 2｜大數據處理分析與應用";
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function prepareQuestion(question) {
    const options = shuffle(question.options.map((text, originalIndex) => ({ text, originalIndex })));
    return {
      ...question,
      options: options.map(item => item.text),
      answer: options.findIndex(item => item.originalIndex === question.answer)
    };
  }

  function currentPool() {
    let pool = state.subject === "all" ? bank : bank.filter(q => q.subject === Number(state.subject));
    if (state.topic) pool = pool.filter(q => q.topic === state.topic);
    return pool;
  }

  function dueReviewQuestions() {
    const today = dateKey();
    return bank.filter(q => {
      const review = state.progress.reviewQueue[q.id];
      return review && review.nextDue <= today;
    });
  }

  function scheduledReviewCount() {
    return Object.keys(state.progress.reviewQueue).length;
  }

  function scheduleReview(id, reason) {
    const originDate = dateKey();
    state.progress.reviewQueue[id] = {
      stage: 0,
      originDate,
      nextDue: addDays(originDate, REVIEW_OFFSETS[0]),
      reason
    };
  }

  function advanceReview(id) {
    const item = state.progress.reviewQueue[id];
    if (!item) return;
    const nextStage = item.stage + 1;
    if (nextStage >= REVIEW_OFFSETS.length) {
      delete state.progress.reviewQueue[id];
      return;
    }
    item.stage = nextStage;
    item.nextDue = addDays(item.originDate, REVIEW_OFFSETS[nextStage]);
  }

  function clearTimer() {
    if (timerHandle) window.clearInterval(timerHandle);
    timerHandle = null;
  }

  function startExamTimer() {
    clearTimer();
    timerHandle = window.setInterval(() => {
      const remaining = Math.max(0, state.examEndsAt - Date.now());
      const timer = document.querySelector("#exam-timer");
      if (timer) timer.textContent = formatTime(remaining);
      if (remaining <= 0) submitExam(true);
    }, 1000);
  }

  function formatTime(milliseconds) {
    const total = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = String(total % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function startQuiz(mode, count) {
    state.mode = mode;
    const pool = mode === "review" ? dueReviewQuestions() : currentPool();
    if (!pool.length) {
      toast(mode === "review" ? "今天沒有到期複習，先練新題吧！" : "此範圍目前沒有題目。", "success");
      return;
    }

    state.quiz = shuffle(pool).slice(0, Math.min(count || pool.length, pool.length)).map(prepareQuestion);
    state.index = 0;
    state.selected = null;
    state.confidence = "中";
    state.checked = false;
    state.sessionAnswers = [];
    state.examAnswers = {};
    state.flagged = [];
    state.examEndsAt = mode === "exam" ? Date.now() + EXAM_MINUTES * 60000 : null;
    state.screen = "quiz";
    render();
    if (mode === "exam") startExamTimer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function recordAttempt(q, selected, confidence, correct, reviewing) {
    const previous = state.progress.attempts[q.id] || { attempts: 0, correct: 0 };
    state.progress.attempts[q.id] = {
      attempts: previous.attempts + 1,
      correct: previous.correct + (correct ? 1 : 0),
      lastCorrect: correct,
      confidence,
      updatedAt: new Date().toISOString()
    };
    state.progress.totalAnswered += 1;
    state.progress.totalCorrect += correct ? 1 : 0;
    state.progress.lastStudyDate = dateKey();

    const wrong = new Set(state.progress.wrongIds);
    if (correct) wrong.delete(q.id); else wrong.add(q.id);
    state.progress.wrongIds = [...wrong];

    if (!correct || confidence === "低") {
      scheduleReview(q.id, !correct ? "答錯" : "低信心");
    } else if (reviewing && state.progress.reviewQueue[q.id]) {
      advanceReview(q.id);
    }
  }

  function checkAnswer() {
    if (state.selected === null || state.checked || state.mode === "exam") return;
    const q = state.quiz[state.index];
    const correct = state.selected === q.answer;
    state.checked = true;
    state.sessionAnswers.push({ id: q.id, selected: state.selected, correct, confidence: state.confidence });
    recordAttempt(q, state.selected, state.confidence, correct, state.mode === "review");
    saveProgress();
    render();
  }

  function nextQuestion() {
    if (state.mode === "exam") {
      if (state.index >= state.quiz.length - 1) submitExam(false);
      else goToQuestion(state.index + 1);
      return;
    }
    if (!state.checked) return;
    if (state.index >= state.quiz.length - 1) {
      finishPractice();
      return;
    }
    state.index += 1;
    state.selected = null;
    state.confidence = "中";
    state.checked = false;
    render();
    document.querySelector("#question-title")?.focus();
  }

  function goToQuestion(index) {
    if (index < 0 || index >= state.quiz.length) return;
    state.index = index;
    state.selected = state.examAnswers[state.quiz[index].id] ?? null;
    state.checked = false;
    render();
    document.querySelector("#question-title")?.focus();
  }

  function finishPractice() {
    clearTimer();
    const score = Math.round((state.sessionAnswers.filter(a => a.correct).length / state.quiz.length) * 100);
    state.progress.sessions += 1;
    state.progress.bestScore = Math.max(state.progress.bestScore, score);
    saveProgress();
    state.screen = "result";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitExam(force) {
    if (state.screen !== "quiz" || state.mode !== "exam") return;
    const unanswered = state.quiz.filter(q => state.examAnswers[q.id] === undefined).length;
    if (!force && unanswered && !window.confirm(`還有 ${unanswered} 題未作答，確定要交卷嗎？`)) return;
    clearTimer();
    state.sessionAnswers = state.quiz.map(q => {
      const selected = state.examAnswers[q.id];
      const correct = selected === q.answer;
      recordAttempt(q, selected ?? null, "中", correct, false);
      return { id: q.id, selected: selected ?? null, correct, confidence: "中" };
    });
    const score = Math.round(state.sessionAnswers.filter(a => a.correct).length / state.quiz.length * 100);
    state.progress.sessions += 1;
    state.progress.bestScore = Math.max(state.progress.bestScore, score);
    saveProgress();
    state.screen = "result";
    render();
    if (force) toast("時間到，系統已自動交卷。", "success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function accuracy() {
    if (!state.progress.totalAnswered) return 0;
    return Math.round((state.progress.totalCorrect / state.progress.totalAnswered) * 100);
  }

  function subjectStats(subject) {
    const items = bank.filter(q => q.subject === subject);
    const attempted = items.filter(q => state.progress.attempts[q.id]).length;
    const correct = items.filter(q => state.progress.attempts[q.id]?.lastCorrect).length;
    return { total: items.length, attempted, correct, pct: items.length ? Math.round(attempted / items.length * 100) : 0 };
  }

  function weakTopics() {
    const groups = {};
    bank.forEach(q => {
      const attempt = state.progress.attempts[q.id];
      if (!attempt) return;
      const key = `${q.subject}|${q.topic}`;
      if (!groups[key]) groups[key] = { subject: q.subject, topic: q.topic, attempts: 0, correct: 0 };
      groups[key].attempts += attempt.attempts;
      groups[key].correct += attempt.correct;
    });
    return Object.values(groups)
      .map(group => ({ ...group, pct: Math.round(group.correct / group.attempts * 100) }))
      .sort((a, b) => a.pct - b.pct || b.attempts - a.attempts)
      .slice(0, 5);
  }

  function appShell(content) {
    return `
      <header class="topbar">
        <button class="brand" data-action="home" aria-label="回到首頁">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>iPAS 中級刷題站 <b class="version-badge">v1.2</b></strong><small>科目 1＋科目 2</small></span>
        </button>
        <div class="exam-pill" title="考試日期：2026 年 11 月 14 日"><span>距離考試</span><strong>${daysLeft()} 天</strong></div>
      </header>
      <main>${content}</main>
      <footer>
        <p>本網站為個人學習工具，題目皆為原創練習題，非官方網站或官方題庫。</p>
        <a href="https://ipd.nat.gov.tw/ipas/certification/AIAP/learning-resources" target="_blank" rel="noopener noreferrer">查看 iPAS 官方學習資源 ↗</a>
      </footer>
      <div id="toast" class="toast" role="status" aria-live="polite"></div>
    `;
  }

  function homeView() {
    const s1 = subjectStats(1);
    const s2 = subjectStats(2);
    const attempted = Object.keys(state.progress.attempts).length;
    const due = dueReviewQuestions().length;
    const scheduled = scheduledReviewCount();
    const weak = weakTopics();
    return appShell(`
      <section class="workspace intro-grid">
        <div class="intro-copy">
          <p class="eyebrow">AI 應用規劃師｜中級</p>
          <h1>今天，先把不熟的題目<br><em>練成會的。</em></h1>
          <p class="lead">答錯與低信心題會在第 1、3、7 天回來複習，讓短期記憶慢慢變成長期記憶。</p>
          <div class="subject-picker" aria-label="選擇練習科目">
            <button class="subject-chip ${state.subject === "all" ? "active" : ""}" data-subject="all">兩科混合</button>
            <button class="subject-chip ${state.subject === "1" ? "active" : ""}" data-subject="1">科目 1</button>
            <button class="subject-chip ${state.subject === "2" ? "active" : ""}" data-subject="2">科目 2</button>
          </div>
          <div class="primary-actions">
            <button class="button primary" data-start="practice">開始 10 題練習 <span>→</span></button>
            <button class="button secondary" data-start="exam">20 題模擬考｜30 分鐘</button>
          </div>
          <div class="data-tools">
            <button data-action="export">匯出學習進度</button>
            <button data-action="import">匯入學習進度</button>
            <input id="progress-file" type="file" accept="application/json,.json" hidden>
          </div>
        </div>
        <aside class="today-card">
          <div class="card-label">今日複習</div>
          <div class="due-number"><strong>${due}</strong><span>題到期</span></div>
          <p class="review-note">依照第 1、3、7 天節奏安排；目前共有 ${scheduled} 題在複習計畫中。</p>
          <button class="button review-button" data-start="review" ${due ? "" : "disabled"}>${due ? "開始今日複習" : "今日複習已完成"} <span>→</span></button>
          <div class="mini-stats compact">
            <div><strong>${accuracy()}%</strong><span>累積正確率</span></div>
            <div><strong>${state.progress.totalAnswered}</strong><span>已作答</span></div>
            <div><strong>${state.progress.bestScore}%</strong><span>最佳成績</span></div>
          </div>
        </aside>
      </section>

      <section class="workspace dashboard-section">
        <div class="section-heading"><div><p class="eyebrow">LEARNING MAP</p><h2>你的學習地圖</h2></div><span>已接觸 ${attempted}／${bank.length} 題</span></div>
        <div class="subject-cards">
          ${subjectCard(1, s1, "01")}
          ${subjectCard(2, s2, "02")}
        </div>
      </section>

      <section class="workspace weakness-section">
        <div class="section-heading"><div><p class="eyebrow">WEAK POINTS</p><h2>優先加強考點</h2></div><span>依累積作答結果排序</span></div>
        ${weak.length ? `<div class="weakness-card">${weak.map(weakRow).join("")}</div>` : `<div class="empty-analysis"><strong>完成第一回練習後，這裡會分析弱點。</strong><p>系統會依章節正確率，告訴你下一步最該練什麼。</p></div>`}
      </section>

      <section class="workspace how-it-works">
        <div><span>01</span><h3>選範圍</h3><p>單科、兩科混合，或直接從弱點章節練習。</p></div>
        <div><span>02</span><h3>答題＋信心</h3><p>低信心即使答對，也會安排延遲複習。</p></div>
        <div><span>03</span><h3>第 1、3、7 天回想</h3><p>到期題目回到首頁，答對後進入下一階段。</p></div>
      </section>
    `);
  }

  function subjectCard(subject, stats, number) {
    const topics = [...new Set(bank.filter(q => q.subject === subject).map(q => q.topic))];
    return `
      <article class="subject-card subject-${subject}">
        <div class="subject-number">${number}</div>
        <div class="subject-copy"><p>科目 ${subject}</p><h3>${subject === 1 ? "人工智慧技術<br>應用與規劃" : "大數據處理<br>分析與應用"}</h3><div class="topic-tags">${topics.slice(0, 4).map(t => `<span>${escapeHtml(t)}</span>`).join("")}<span>＋${Math.max(0, topics.length - 4)}</span></div></div>
        <div class="subject-progress"><div><span>題庫進度</span><strong>${stats.attempted}/${stats.total}</strong></div><div class="progress-track"><i style="width:${stats.pct}%"></i></div><button data-quick-subject="${subject}">練習本科 →</button></div>
      </article>
    `;
  }

  function weakRow(item) {
    return `<button class="weak-row" data-topic="${escapeHtml(item.topic)}" data-topic-subject="${item.subject}">
      <span class="weak-subject">科目 ${item.subject}</span>
      <span class="weak-name"><strong>${escapeHtml(item.topic)}</strong><small>${item.attempts} 次作答</small></span>
      <span class="weak-bar"><i style="width:${item.pct}%"></i></span>
      <b>${item.pct}%</b><span class="weak-arrow">→</span>
    </button>`;
  }

  function quizView() {
    const q = state.quiz[state.index];
    const selected = state.mode === "exam" ? (state.examAnswers[q.id] ?? null) : state.selected;
    const pct = Math.round(((state.index + (state.checked ? 1 : 0)) / state.quiz.length) * 100);
    const isCorrect = state.checked && state.selected === q.answer;
    const card = `
      <article class="question-card">
        <div class="question-tags"><span class="subject-label">科目 ${q.subject}</span><span>${escapeHtml(q.topic)}</span><span>${escapeHtml(q.difficulty)}</span></div>
        <h1 id="question-title" tabindex="-1">${escapeHtml(q.question)}</h1>
        <div class="options" role="radiogroup" aria-label="答案選項">${q.options.map((option, index) => optionButton(q, option, index, selected)).join("")}</div>

        ${state.mode !== "exam" && state.checked ? `
          <div class="answer-panel ${isCorrect ? "correct" : "incorrect"}">
            <div class="answer-status"><span>${isCorrect ? "✓" : "!"}</span><strong>${isCorrect ? "答對了" : `答錯了，正確答案是 ${letters[q.answer]}`}</strong></div>
            <p>${escapeHtml(q.explanation)}</p>
            ${state.confidence === "低" ? `<small>你選了「低信心」，本題仍會加入延遲複習。</small>` : ""}
          </div>
        ` : state.mode !== "exam" ? `
          <fieldset class="confidence"><legend>這題有多確定？</legend>${["低", "中", "高"].map(level => `<button type="button" class="confidence-button ${state.confidence === level ? "active" : ""}" data-confidence="${level}">${level}</button>`).join("")}</fieldset>
        ` : ""}

        <div class="question-actions ${state.mode === "exam" ? "exam-actions" : ""}">
          ${state.mode === "exam" ? `
            <button class="button secondary" data-action="previous" ${state.index === 0 ? "disabled" : ""}>← 上一題</button>
            <button class="flag-button ${state.flagged.includes(q.id) ? "active" : ""}" data-action="flag">${state.flagged.includes(q.id) ? "★ 已標記" : "☆ 稍後檢查"}</button>
            <button class="button primary" data-action="next">${state.index === state.quiz.length - 1 ? "交卷" : "下一題 →"}</button>
          ` : state.checked ? `<button class="button primary" data-action="next">${state.index === state.quiz.length - 1 ? "查看成績" : "下一題"} <span>→</span></button>` : `<button class="button primary" data-action="check" ${state.selected === null ? "disabled" : ""}>確認答案</button>`}
        </div>
      </article>`;

    return appShell(`
      <section class="quiz-shell workspace ${state.mode === "exam" ? "exam-shell" : ""}">
        <div class="quiz-meta">
          <button class="back-button" data-action="quit">← 結束${state.mode === "exam" ? "模擬考" : "練習"}</button>
          <div class="question-count">${state.mode === "exam" ? `<strong id="exam-timer">${formatTime(state.examEndsAt - Date.now())}</strong>・` : ""}第 ${state.index + 1} 題／共 ${state.quiz.length} 題</div>
          <div class="progress-track wide"><i style="width:${pct}%"></i></div>
        </div>
        ${state.mode === "exam" ? `<div class="exam-layout">${card}${examNavigator()}</div>` : card}
        <p class="keyboard-hint">鍵盤快捷鍵：A～D 選答案，Enter 確認／下一題</p>
      </section>
    `);
  }

  function examNavigator() {
    const answered = Object.keys(state.examAnswers).length;
    return `<aside class="exam-navigator">
      <div><strong>答題狀況</strong><span>${answered}/${state.quiz.length} 已作答</span></div>
      <div class="number-grid">${state.quiz.map((q, i) => `<button class="${i === state.index ? "current" : ""} ${state.examAnswers[q.id] !== undefined ? "answered" : ""} ${state.flagged.includes(q.id) ? "flagged" : ""}" data-jump="${i}" aria-label="前往第 ${i + 1} 題">${i + 1}</button>`).join("")}</div>
      <div class="nav-legend"><span><i class="answered"></i>已作答</span><span><i class="flagged"></i>待檢查</span></div>
      <button class="submit-link" data-action="submit">提前交卷</button>
    </aside>`;
  }

  function optionButton(q, option, index, selected) {
    let status = selected === index ? "selected" : "";
    if (state.mode !== "exam" && state.checked && index === q.answer) status += " correct";
    if (state.mode !== "exam" && state.checked && state.selected === index && index !== q.answer) status += " incorrect";
    return `<button class="option ${status}" role="radio" aria-checked="${selected === index}" data-option="${index}" ${state.mode !== "exam" && state.checked ? "disabled" : ""}><span class="option-letter">${letters[index]}</span><span>${escapeHtml(option)}</span><i aria-hidden="true">${state.mode !== "exam" && state.checked && index === q.answer ? "✓" : state.mode !== "exam" && state.checked && state.selected === index ? "×" : ""}</i></button>`;
  }

  function resultView() {
    const correct = state.sessionAnswers.filter(a => a.correct).length;
    const score = Math.round(correct / state.quiz.length * 100);
    const lowConfidenceCorrect = state.sessionAnswers.filter(a => a.correct && a.confidence === "低").length;
    const message = score >= 85 ? "掌握得很穩，繼續保持。" : score >= 70 ? "已接近目標，把錯題補起來。" : "先別急，解析與延遲複習就是進步的起點。";
    return appShell(`
      <section class="result-shell workspace">
        <div class="result-hero"><p class="eyebrow">SESSION COMPLETE</p><div class="result-score"><strong>${score}</strong><span>分</span></div><h1>${escapeHtml(message)}</h1><p>答對 ${correct} 題，共 ${state.quiz.length} 題；${lowConfidenceCorrect ? `另有 ${lowConfidenceCorrect} 題雖答對但信心偏低，已安排複習。` : "本次作答已存入學習紀錄。"}</p><div class="primary-actions centered"><button class="button primary" data-action="retry">再練一次 <span>→</span></button><button class="button secondary" data-action="home">回學習地圖</button></div></div>
        <div class="review-list"><div class="section-heading"><div><p class="eyebrow">REVIEW</p><h2>本次作答</h2></div><span>${correct}/${state.quiz.length} 正確</span></div>
          ${state.quiz.map((q, index) => { const answer = state.sessionAnswers[index]; return `<div class="review-row ${answer?.correct ? "ok" : "bad"}"><span>${answer?.correct ? "✓" : "×"}</span><div><strong>${escapeHtml(q.question)}</strong><small>${subjectName(q.subject)}${state.mode !== "exam" ? `・信心 ${answer?.confidence || "－"}` : ""}</small>${!answer?.correct ? `<em>${escapeHtml(q.explanation)}</em>` : ""}</div><b>${answer?.correct ? "答對" : `正解 ${letters[q.answer]}`}</b></div>`; }).join("")}
        </div>
      </section>
    `);
  }

  function render() {
    const app = document.querySelector("#app");
    app.innerHTML = state.screen === "quiz" ? quizView() : state.screen === "result" ? resultView() : homeView();
    bindEvents();
  }

  function selectOption(index) {
    if (state.mode === "exam") {
      const q = state.quiz[state.index];
      state.examAnswers[q.id] = index;
      state.selected = index;
    } else if (!state.checked) {
      state.selected = index;
    }
    render();
  }

  function exportProgress() {
    const payload = { app: "ipas-ai-quiz", version: 2, exportedAt: new Date().toISOString(), progress: state.progress };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `ipas-progress-${dateKey()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    toast("學習進度已匯出。", "success");
  }

  async function importProgress(file) {
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.app !== "ipas-ai-quiz" || !data.progress || typeof data.progress !== "object") throw new Error("invalid");
      state.progress = migrateProgress(data.progress);
      saveProgress();
      render();
      toast("學習進度已成功匯入。", "success");
    } catch (_) {
      toast("這不是有效的 iPAS 學習進度檔。", "error");
    }
  }

  function bindEvents() {
    document.querySelectorAll("[data-subject]").forEach(button => button.addEventListener("click", () => { state.subject = button.dataset.subject; state.topic = null; render(); }));
    document.querySelectorAll("[data-start]").forEach(button => button.addEventListener("click", () => {
      const mode = button.dataset.start;
      state.topic = null;
      startQuiz(mode, mode === "exam" ? 20 : mode === "review" ? 100 : 10);
    }));
    document.querySelectorAll("[data-quick-subject]").forEach(button => button.addEventListener("click", () => { state.subject = button.dataset.quickSubject; state.topic = null; startQuiz("practice", 10); }));
    document.querySelectorAll("[data-topic]").forEach(button => button.addEventListener("click", () => { state.subject = button.dataset.topicSubject; state.topic = button.dataset.topic; startQuiz("practice", 10); }));
    document.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => selectOption(Number(button.dataset.option))));
    document.querySelectorAll("[data-confidence]").forEach(button => button.addEventListener("click", () => { state.confidence = button.dataset.confidence; render(); }));
    document.querySelectorAll("[data-jump]").forEach(button => button.addEventListener("click", () => goToQuestion(Number(button.dataset.jump))));
    document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "check") checkAnswer();
      if (action === "next") nextQuestion();
      if (action === "previous") goToQuestion(state.index - 1);
      if (action === "submit") submitExam(false);
      if (action === "flag") { const set = new Set(state.flagged); set.has(state.quiz[state.index].id) ? set.delete(state.quiz[state.index].id) : set.add(state.quiz[state.index].id); state.flagged = [...set]; render(); }
      if (action === "home" || action === "quit") { clearTimer(); state.screen = "home"; render(); }
      if (action === "retry") { state.topic = null; startQuiz(state.mode, state.quiz.length); }
      if (action === "export") exportProgress();
      if (action === "import") document.querySelector("#progress-file")?.click();
    }));
    document.querySelector("#progress-file")?.addEventListener("change", event => importProgress(event.target.files?.[0]));
  }

  function toast(message, type) {
    const node = document.querySelector("#toast");
    if (!node) return;
    node.textContent = message;
    node.className = `toast show ${type || ""}`;
    window.setTimeout(() => node.classList.remove("show"), 2600);
  }

  document.addEventListener("keydown", event => {
    if (state.screen !== "quiz") return;
    const key = event.key.toUpperCase();
    if (letters.includes(key) && !(state.mode !== "exam" && state.checked)) selectOption(letters.indexOf(key));
    else if (event.key === "Enter") {
      if (state.mode === "exam") nextQuestion();
      else if (!state.checked && state.selected !== null) checkAnswer();
      else if (state.checked) nextQuestion();
    }
  });

  function registerWebMcpTools() {
    const context = typeof document === "undefined" ? undefined : document.modelContext;
    if (!context?.registerTool) return;
    const register = tool => { try { void Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {} };
    register({
      name: "read_study_progress", title: "讀取刷題進度", description: "讀取作答、正確率、到期複習與各科題庫進度，不修改資料。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() { return { totalAnswered: state.progress.totalAnswered, accuracyPercent: accuracy(), dueReviewCount: dueReviewQuestions().length, scheduledReviewCount: scheduledReviewCount(), subject1: subjectStats(1), subject2: subjectStats(2), examDaysLeft: daysLeft() }; }
    });
    register({
      name: "start_quiz_session", title: "開始刷題", description: "在畫面上開始科目 1、科目 2 或兩科混合的練習、複習或模擬考。",
      inputSchema: { type: "object", properties: { subject: { type: "string", enum: ["all", "1", "2"] }, mode: { type: "string", enum: ["practice", "exam", "review"] }, count: { type: "integer", minimum: 1, maximum: 64 } }, required: ["subject", "mode", "count"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) { if (!input || !["all", "1", "2"].includes(input.subject) || !["practice", "exam", "review"].includes(input.mode) || !Number.isInteger(input.count) || input.count < 1 || input.count > bank.length) throw new Error("刷題設定無效。"); state.subject = input.subject; state.topic = null; startQuiz(input.mode, input.count); return { started: state.screen === "quiz", subject: input.subject, mode: input.mode, questionCount: state.quiz.length }; }
    });
  }

  registerWebMcpTools();
  render();
})();
