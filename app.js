(function () {
  "use strict";

  const EXAM_DATE = new Date("2026-11-14T09:00:00+08:00");
  const STORAGE_KEY = "ipas-ai-quiz-progress-v1";
  const letters = ["A", "B", "C", "D"];
  const bank = window.QUESTION_BANK || [];

  const defaultProgress = () => ({
    attempts: {},
    wrongIds: [],
    sessions: 0,
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    lastStudyDate: null
  });

  function readProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...defaultProgress(), ...(saved || {}) };
    } catch (_) {
      return defaultProgress();
    }
  }

  const state = {
    progress: readProgress(),
    screen: "home",
    subject: "all",
    quiz: [],
    index: 0,
    selected: null,
    confidence: "中",
    checked: false,
    sessionAnswers: [],
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

  function currentPool() {
    if (state.subject === "all") return bank;
    return bank.filter(q => q.subject === Number(state.subject));
  }

  function startQuiz(mode, count) {
    state.mode = mode;
    const pool = mode === "mistakes"
      ? bank.filter(q => state.progress.wrongIds.includes(q.id))
      : currentPool();

    if (!pool.length) {
      toast(mode === "mistakes" ? "目前沒有錯題，保持得很好！" : "此範圍目前沒有題目。", "success");
      return;
    }

    state.quiz = shuffle(pool).slice(0, Math.min(count || pool.length, pool.length));
    state.index = 0;
    state.selected = null;
    state.confidence = "中";
    state.checked = false;
    state.sessionAnswers = [];
    state.screen = "quiz";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAnswer() {
    if (state.selected === null || state.checked) return;
    const q = state.quiz[state.index];
    const correct = state.selected === q.answer;
    state.checked = true;
    state.sessionAnswers.push({ id: q.id, selected: state.selected, correct, confidence: state.confidence });

    const previous = state.progress.attempts[q.id] || { attempts: 0, correct: 0 };
    state.progress.attempts[q.id] = {
      attempts: previous.attempts + 1,
      correct: previous.correct + (correct ? 1 : 0),
      lastCorrect: correct,
      confidence: state.confidence,
      updatedAt: new Date().toISOString()
    };

    state.progress.totalAnswered += 1;
    state.progress.totalCorrect += correct ? 1 : 0;
    state.progress.lastStudyDate = new Date().toISOString().slice(0, 10);
    const wrong = new Set(state.progress.wrongIds);
    if (correct) wrong.delete(q.id); else wrong.add(q.id);
    state.progress.wrongIds = [...wrong];
    saveProgress();
    render();
  }

  function nextQuestion() {
    if (!state.checked) return;
    if (state.index >= state.quiz.length - 1) {
      finishQuiz();
      return;
    }
    state.index += 1;
    state.selected = null;
    state.confidence = "中";
    state.checked = false;
    render();
    document.querySelector("#question-title")?.focus();
  }

  function finishQuiz() {
    const score = Math.round((state.sessionAnswers.filter(a => a.correct).length / state.quiz.length) * 100);
    state.progress.sessions += 1;
    state.progress.bestScore = Math.max(state.progress.bestScore, score);
    saveProgress();
    state.screen = "result";
    render();
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

  function appShell(content) {
    return `
      <header class="topbar">
        <button class="brand" data-action="home" aria-label="回到首頁">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>iPAS 中級刷題站</strong><small>科目 1＋科目 2</small></span>
        </button>
        <div class="exam-pill" title="考試日期：2026 年 11 月 14 日">
          <span>距離考試</span><strong>${daysLeft()} 天</strong>
        </div>
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
    return appShell(`
      <section class="workspace intro-grid">
        <div class="intro-copy">
          <p class="eyebrow">AI 應用規劃師｜中級</p>
          <h1>今天，先把不熟的題目<br><em>練成會的。</em></h1>
          <p class="lead">每題作答後立即看解析，搭配信心程度與錯題回練，把短期記憶變成真正理解。</p>
          <div class="subject-picker" aria-label="選擇練習科目">
            <button class="subject-chip ${state.subject === "all" ? "active" : ""}" data-subject="all">兩科混合</button>
            <button class="subject-chip ${state.subject === "1" ? "active" : ""}" data-subject="1">科目 1</button>
            <button class="subject-chip ${state.subject === "2" ? "active" : ""}" data-subject="2">科目 2</button>
          </div>
          <div class="primary-actions">
            <button class="button primary" data-start="practice">開始 10 題練習 <span>→</span></button>
            <button class="button secondary" data-start="exam">20 題模擬測驗</button>
          </div>
        </div>
        <aside class="today-card">
          <div class="card-label">今日進度</div>
          <div class="score-ring" style="--score:${accuracy() * 3.6}deg">
            <div><strong>${accuracy()}%</strong><span>累積正確率</span></div>
          </div>
          <div class="mini-stats">
            <div><strong>${state.progress.totalAnswered}</strong><span>已作答</span></div>
            <div><strong>${state.progress.wrongIds.length}</strong><span>待複習</span></div>
            <div><strong>${state.progress.bestScore}%</strong><span>最佳成績</span></div>
          </div>
          <button class="text-button" data-start="mistakes" ${state.progress.wrongIds.length ? "" : "disabled"}>複習錯題 <span>(${state.progress.wrongIds.length})</span></button>
        </aside>
      </section>

      <section class="workspace dashboard-section">
        <div class="section-heading">
          <div><p class="eyebrow">LEARNING MAP</p><h2>你的學習地圖</h2></div>
          <span>已接觸 ${attempted}／${bank.length} 題</span>
        </div>
        <div class="subject-cards">
          ${subjectCard(1, s1, "01")}
          ${subjectCard(2, s2, "02")}
        </div>
      </section>

      <section class="workspace how-it-works">
        <div><span>01</span><h3>選範圍</h3><p>單科加強或兩科混合，依當天需要練習。</p></div>
        <div><span>02</span><h3>答題＋信心</h3><p>除了選答案，也記錄自己是猜的還是真的會。</p></div>
        <div><span>03</span><h3>錯題再挑戰</h3><p>答錯自動加入錯題本，答對後才移出。</p></div>
      </section>
    `);
  }

  function subjectCard(subject, stats, number) {
    const topics = [...new Set(bank.filter(q => q.subject === subject).map(q => q.topic))];
    return `
      <article class="subject-card subject-${subject}">
        <div class="subject-number">${number}</div>
        <div class="subject-copy">
          <p>科目 ${subject}</p>
          <h3>${subject === 1 ? "人工智慧技術<br>應用與規劃" : "大數據處理<br>分析與應用"}</h3>
          <div class="topic-tags">${topics.slice(0, 4).map(t => `<span>${escapeHtml(t)}</span>`).join("")}<span>＋${Math.max(0, topics.length - 4)}</span></div>
        </div>
        <div class="subject-progress">
          <div><span>題庫進度</span><strong>${stats.attempted}/${stats.total}</strong></div>
          <div class="progress-track"><i style="width:${stats.pct}%"></i></div>
          <button data-quick-subject="${subject}">練習本科 →</button>
        </div>
      </article>
    `;
  }

  function quizView() {
    const q = state.quiz[state.index];
    const pct = Math.round(((state.index + (state.checked ? 1 : 0)) / state.quiz.length) * 100);
    const isCorrect = state.checked && state.selected === q.answer;
    return appShell(`
      <section class="quiz-shell workspace">
        <div class="quiz-meta">
          <button class="back-button" data-action="quit">← 結束練習</button>
          <div class="question-count">第 ${state.index + 1} 題／共 ${state.quiz.length} 題</div>
          <div class="progress-track wide"><i style="width:${pct}%"></i></div>
        </div>
        <article class="question-card">
          <div class="question-tags">
            <span class="subject-label">科目 ${q.subject}</span>
            <span>${escapeHtml(q.topic)}</span>
            <span>${escapeHtml(q.difficulty)}</span>
          </div>
          <h1 id="question-title" tabindex="-1">${escapeHtml(q.question)}</h1>
          <div class="options" role="radiogroup" aria-label="答案選項">
            ${q.options.map((option, index) => optionButton(q, option, index)).join("")}
          </div>

          ${state.checked ? `
            <div class="answer-panel ${isCorrect ? "correct" : "incorrect"}">
              <div class="answer-status"><span>${isCorrect ? "✓" : "!"}</span><strong>${isCorrect ? "答對了" : `答錯了，正確答案是 ${letters[q.answer]}`}</strong></div>
              <p>${escapeHtml(q.explanation)}</p>
            </div>
          ` : `
            <fieldset class="confidence">
              <legend>這題有多確定？</legend>
              ${["低", "中", "高"].map(level => `<button type="button" class="confidence-button ${state.confidence === level ? "active" : ""}" data-confidence="${level}">${level}</button>`).join("")}
            </fieldset>
          `}

          <div class="question-actions">
            ${state.checked
              ? `<button class="button primary" data-action="next">${state.index === state.quiz.length - 1 ? "查看成績" : "下一題"} <span>→</span></button>`
              : `<button class="button primary" data-action="check" ${state.selected === null ? "disabled" : ""}>確認答案</button>`}
          </div>
        </article>
        <p class="keyboard-hint">鍵盤快捷鍵：A～D 選答案，Enter 確認／下一題</p>
      </section>
    `);
  }

  function optionButton(q, option, index) {
    let status = state.selected === index ? "selected" : "";
    if (state.checked && index === q.answer) status += " correct";
    if (state.checked && state.selected === index && index !== q.answer) status += " incorrect";
    return `
      <button class="option ${status}" role="radio" aria-checked="${state.selected === index}" data-option="${index}" ${state.checked ? "disabled" : ""}>
        <span class="option-letter">${letters[index]}</span>
        <span>${escapeHtml(option)}</span>
        <i aria-hidden="true">${state.checked && index === q.answer ? "✓" : state.checked && state.selected === index ? "×" : ""}</i>
      </button>
    `;
  }

  function resultView() {
    const correct = state.sessionAnswers.filter(a => a.correct).length;
    const score = Math.round(correct / state.quiz.length * 100);
    const lowConfidenceCorrect = state.sessionAnswers.filter(a => a.correct && a.confidence === "低").length;
    const message = score >= 85 ? "掌握得很穩，繼續保持。" : score >= 70 ? "已接近目標，把錯題補起來。" : "先別急，解析與錯題回練就是進步的起點。";
    return appShell(`
      <section class="result-shell workspace">
        <div class="result-hero">
          <p class="eyebrow">SESSION COMPLETE</p>
          <div class="result-score"><strong>${score}</strong><span>分</span></div>
          <h1>${escapeHtml(message)}</h1>
          <p>答對 ${correct} 題，共 ${state.quiz.length} 題；${lowConfidenceCorrect ? `另有 ${lowConfidenceCorrect} 題雖答對但信心偏低，建議再複習。` : "本次作答已存入學習紀錄。"}</p>
          <div class="primary-actions centered">
            <button class="button primary" data-action="retry">再練一次 <span>→</span></button>
            <button class="button secondary" data-action="home">回學習地圖</button>
          </div>
        </div>
        <div class="review-list">
          <div class="section-heading"><div><p class="eyebrow">REVIEW</p><h2>本次作答</h2></div><span>${correct}/${state.quiz.length} 正確</span></div>
          ${state.quiz.map((q, index) => {
            const answer = state.sessionAnswers[index];
            return `<div class="review-row ${answer?.correct ? "ok" : "bad"}">
              <span>${answer?.correct ? "✓" : "×"}</span>
              <div><strong>${escapeHtml(q.question)}</strong><small>${subjectName(q.subject)}・信心 ${answer?.confidence || "－"}</small></div>
              <b>${answer?.correct ? "答對" : `正解 ${letters[q.answer]}`}</b>
            </div>`;
          }).join("")}
        </div>
      </section>
    `);
  }

  function render() {
    const app = document.querySelector("#app");
    app.innerHTML = state.screen === "quiz" ? quizView() : state.screen === "result" ? resultView() : homeView();
    bindEvents();
  }

  function bindEvents() {
    document.querySelectorAll("[data-subject]").forEach(button => {
      button.addEventListener("click", () => {
        state.subject = button.dataset.subject;
        render();
      });
    });

    document.querySelectorAll("[data-start]").forEach(button => {
      button.addEventListener("click", () => {
        const mode = button.dataset.start;
        startQuiz(mode, mode === "exam" ? 20 : mode === "mistakes" ? 100 : 10);
      });
    });

    document.querySelectorAll("[data-quick-subject]").forEach(button => {
      button.addEventListener("click", () => {
        state.subject = button.dataset.quickSubject;
        startQuiz("practice", 10);
      });
    });

    document.querySelectorAll("[data-option]").forEach(button => {
      button.addEventListener("click", () => {
        if (!state.checked) {
          state.selected = Number(button.dataset.option);
          render();
        }
      });
    });

    document.querySelectorAll("[data-confidence]").forEach(button => {
      button.addEventListener("click", () => {
        state.confidence = button.dataset.confidence;
        render();
      });
    });

    document.querySelectorAll("[data-action]").forEach(button => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "check") checkAnswer();
        if (action === "next") nextQuestion();
        if (action === "home" || action === "quit") { state.screen = "home"; render(); }
        if (action === "retry") startQuiz(state.mode, state.quiz.length);
      });
    });
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
    if (!state.checked && letters.includes(key)) {
      state.selected = letters.indexOf(key);
      render();
    } else if (event.key === "Enter") {
      if (!state.checked && state.selected !== null) checkAnswer();
      else if (state.checked) nextQuestion();
    }
  });

  function registerWebMcpTools() {
    const context = typeof document === "undefined" ? undefined : document.modelContext;
    if (!context?.registerTool) return;

    const register = tool => {
      try {
        void Promise.resolve(context.registerTool(tool)).catch(() => {});
      } catch (_) {}
    };

    register({
      name: "read_study_progress",
      title: "讀取刷題進度",
      description: "讀取目前的作答數、正確率、錯題數與各科題庫進度，不修改資料。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        return {
          totalAnswered: state.progress.totalAnswered,
          accuracyPercent: accuracy(),
          wrongQuestionCount: state.progress.wrongIds.length,
          subject1: subjectStats(1),
          subject2: subjectStats(2),
          examDaysLeft: daysLeft()
        };
      }
    });

    register({
      name: "start_quiz_session",
      title: "開始刷題",
      description: "在畫面上開始科目 1、科目 2 或兩科混合的練習／模擬測驗。",
      inputSchema: {
        type: "object",
        properties: {
          subject: { type: "string", enum: ["all", "1", "2"] },
          mode: { type: "string", enum: ["practice", "exam", "mistakes"] },
          count: { type: "integer", minimum: 1, maximum: 64 }
        },
        required: ["subject", "mode", "count"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const validSubjects = ["all", "1", "2"];
        const validModes = ["practice", "exam", "mistakes"];
        if (!input || !validSubjects.includes(input.subject) || !validModes.includes(input.mode) || !Number.isInteger(input.count) || input.count < 1 || input.count > bank.length) {
          throw new Error("刷題設定無效。請檢查科目、模式與題數。");
        }
        state.subject = input.subject;
        startQuiz(input.mode, input.count);
        return { started: state.screen === "quiz", subject: input.subject, mode: input.mode, questionCount: state.quiz.length };
      }
    });
  }

  registerWebMcpTools();
  render();
})();
