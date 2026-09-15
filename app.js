(function () {
  "use strict";

  const EXAM_DATE = new Date("2026-11-14T09:00:00+08:00");
  const STORAGE_KEY = "ipas-ai-quiz-progress-v1";
  const SETTINGS_KEY = "ipas-ai-quiz-settings-v1";
  const REVIEW_OFFSETS = [1, 3, 7];
  const EXAM_MINUTES = 30;
  const FULL_EXAM_MINUTES = 60;
  const letters = ["A", "B", "C", "D"];
  const bank = window.QUESTION_BANK || [];
  const officialPastCount = bank.filter(q => q.sourceType === "official-past").length;
  let timerHandle = null;
  let installPrompt = null;

  const CONCEPT_HINTS = [
    [/Regression（迴歸）/i, "Regression（迴歸）用來預測連續數值，例如價格、溫度或需求量"],
    [/Classification（分類）|Accuracy（準確率）/i, "Classification（分類）是在已知類別中判斷所屬類別；Accuracy（準確率）則是分類模型的整體答對比例"],
    [/Clustering（分群）/i, "Clustering（分群）是在沒有既定標籤時，依資料相似度自動分組"],
    [/Machine Translation（機器翻譯）/i, "Machine Translation（機器翻譯）處理不同語言之間的自動轉換"],
    [/Object Detection（物件偵測）/i, "Object Detection（物件偵測）要同時辨識影像中的物件種類與位置"],
    [/Image Generation（影像生成）/i, "Image Generation（影像生成）是根據提示產生新影像，不是分析既有資料"],
    [/Computer Vision（電腦視覺）|CNN/i, "Computer Vision（電腦視覺）與 CNN（卷積神經網路）主要處理影像內容"],
    [/NLP|自然語言處理|Transformer|Attention（注意力）/i, "這類技術主要用於理解或生成文字等序列資料"],
    [/Token|Tokenization（斷詞）|Context Window（上下文視窗）/i, "這些概念描述模型如何切分及一次處理輸入內容"],
    [/Prompt Injection（提示注入）/i, "Prompt Injection（提示注入）是惡意指令干擾模型原有規則的安全風險"],
    [/RAG|Retrieval-Augmented Generation/i, "RAG（檢索增強生成）會先查找外部資料，再把資料提供給生成模型回答"],
    [/Fine[- ]?tuning（微調）/i, "Fine-tuning（微調）是用特定資料更新模型參數，使模型更適合特定任務"],
    [/Few-shot|Zero-shot/i, "Few-shot（少樣本）或 Zero-shot（零樣本）描述提示中是否提供少量示例"],
    [/Temperature|Top-p|Top-K/i, "這些參數會調整生成內容的隨機性與候選範圍，不能保證內容一定正確"],
    [/Hallucination（幻覺）/i, "Hallucination（幻覺）是模型產生看似合理、實際上不正確或沒有根據的內容"],
    [/Data Drift（資料漂移）/i, "Data Drift（資料漂移）是上線後輸入資料分布逐漸不同於訓練資料"],
    [/Model Monitoring（模型監控）|Monitoring（監控）/i, "Model Monitoring（模型監控）用來持續觀察上線後的品質、延遲與異常"],
    [/Retraining（再訓練）/i, "Retraining（再訓練）是使用較新的資料重新訓練模型，以回應環境變化"],
    [/Explainability（可解釋性）/i, "Explainability（可解釋性）是讓人理解模型做出預測或決策的大致依據"],
    [/Human Oversight（人類監督）/i, "Human Oversight（人類監督）是在高風險決策中保留人類審查與介入權"],
    [/Governance（治理）/i, "Governance（治理）涵蓋規範、權責、風險控管、稽核與持續監督"],
    [/PoC|Proof of Concept/i, "PoC（概念驗證）用小規模實驗確認技術與需求是否可行"],
    [/MVP/i, "MVP（最小可行產品）是在功能精簡但可實際使用的版本中驗證價值"],
    [/KPI/i, "KPI（關鍵績效指標）是事先定義、用來衡量導入成果的量化指標"],
    [/Baseline（基準線）/i, "Baseline（基準線）是用來比較新方法是否真的優於現況的參考表現"],
    [/Standardization（標準化）|Z-score/i, "Standardization（標準化）通常把資料轉成平均數約 0、標準差約 1"],
    [/Normalization（正規化）|Min-Max/i, "Min-Max Normalization（最小最大正規化）通常把數值縮放到固定範圍"],
    [/Mean（平均數）|平均數/i, "Mean（平均數）會使用全部數值計算，因此容易受到極端值影響"],
    [/Median（中位數）|中位數/i, "Median（中位數）是排序後的中間位置，通常較不受極端值影響"],
    [/Mode（眾數）|眾數/i, "Mode（眾數）是資料中出現次數最多的值"],
    [/Standard Deviation（標準差）|標準差/i, "Standard Deviation（標準差）衡量資料相對平均數的分散程度"],
    [/p-value|p 值/i, "p-value（p 值）是在虛無假設成立時，觀察到目前或更極端結果的機率"],
    [/Type I|第一類錯誤|假陽性/i, "Type I Error（第一類錯誤）是實際無差異，卻誤判為有差異"],
    [/Type II|第二類錯誤|假陰性/i, "Type II Error（第二類錯誤）是實際有差異，卻沒有檢定出來"],
    [/Correlation（相關）|相關係數/i, "Correlation（相關）只描述一起變動的程度，不能單獨證明因果關係"],
    [/MAE/i, "MAE（平均絕對誤差）平均計算誤差大小，對極端誤差的放大程度較低"],
    [/RMSE/i, "RMSE（均方根誤差）會平方誤差，因此對少數巨大錯誤懲罰較重"],
    [/Missing Value|遺失值/i, "遺失值處理要先了解缺失原因、比例與資料型態，再決定刪除或填補"],
    [/Outlier|離群值/i, "Outlier（離群值）是明顯偏離多數資料的觀測值，但不一定代表資料錯誤"],
    [/One-Hot Encoding/i, "One-Hot Encoding（獨熱編碼）把類別拆成多個 0／1 欄位，避免虛假的大小順序"],
    [/Data Leakage（資料洩漏）/i, "Data Leakage（資料洩漏）是訓練時不當取得未來、答案或測試資料資訊"],
    [/Train|Training Set|Test Set|Validation/i, "訓練集用來學習，驗證集用來選模型與調參，測試集用來做最後一次客觀評估"],
    [/Overfitting（過度擬合）/i, "Overfitting（過度擬合）是模型太貼合訓練資料，遇到新資料時表現變差"],
    [/Sampling|抽樣/i, "Sampling（抽樣）的重點是讓樣本能合理代表母體並降低偏差"],
    [/ETL/i, "ETL 是 Extract（擷取）、Transform（轉換）、Load（載入）的資料整合流程"],
    [/SQL|關聯式資料庫/i, "關聯式資料庫適合結構明確、需要交易一致性與表格關聯的資料"],
    [/NoSQL/i, "NoSQL 適合結構彈性或大規模分散式資料，但仍要依查詢與一致性需求選擇"],
    [/Encryption|加密/i, "Encryption（加密）保護資料內容，但仍需搭配權限、金鑰與稽核管理"],
    [/Anonymization|匿名化|去識別/i, "去識別化是降低資料連回特定個人的可能性，仍要評估重新識別風險"],
    [/Moving Average（移動平均）/i, "Moving Average（移動平均）用鄰近時段平均來平滑短期波動，但可能產生時間落後"],
    [/Visualization|視覺化|長條圖|折線圖|散佈圖|圓餅圖/i, "資料視覺化要依變數型態與比較目的選圖，圖表本身不能取代統計或因果證據"]
  ];

  function readSettings() {
    try {
      return { theme: "system", fontSize: "normal", ...JSON.parse(localStorage.getItem(SETTINGS_KEY)) };
    } catch (_) {
      return { theme: "system", fontSize: "normal" };
    }
  }

  const settings = readSettings();

  function effectiveTheme() {
    if (settings.theme !== "system") return settings.theme;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applySettings() {
    const theme = effectiveTheme();
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.fontSize = settings.fontSize;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#071513" : "#0f766e");
  }

  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    applySettings();
  }

  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  const defaultProgress = () => ({
    attempts: {},
    reviewQueue: {},
    wrongIds: [],
    sessions: 0,
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    lastStudyDate: null,
    notes: {},
    cardIds: [],
    history: []
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
    progress.notes = progress.notes && typeof progress.notes === "object" ? progress.notes : {};
    progress.cardIds = Array.isArray(progress.cardIds) ? progress.cardIds.filter(id => bank.some(q => q.id === id)) : [];
    progress.history = Array.isArray(progress.history) ? progress.history.filter(item => item && typeof item === "object").map(item => ({
      ...item,
      subject1: Number.isFinite(item.subject1) ? item.subject1 : null,
      subject2: Number.isFinite(item.subject2) ? item.subject2 : null
    })).slice(0, 30) : [];
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
    examMinutes: EXAM_MINUTES,
    examKind: "quick",
    mode: "practice",
    custom: { subject: "all", topic: "all", difficulty: "all", count: 10 },
    wrongSubject: "all",
    wrongTopic: "all",
    pastSession: "all",
    pastSubject: "all"
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

  function optionExplanation(q, index) {
    if (index === q.answer) return q.explanation;
    const option = q.options[index];
    const match = CONCEPT_HINTS.find(([pattern]) => pattern.test(option));
    if (match) return `${match[1]}。不過這不是本題情境需要的答案；本題關鍵是：${q.explanation}`;
    if (/一定|完全|全部|永遠|保證|只要|不需要|不需|隨機|自動歸零|直接公開/.test(option)) {
      return `這個選項使用過度絕對或不合理的說法，忽略了題目中的條件與風險。本題正確的判斷重點是：${q.explanation}`;
    }
    if (/鍵盤|螢幕|檔名|背景顏色|字體|電腦品牌|人數/.test(option)) {
      return `這是介面、設備或外觀因素，和題目要判斷的 AI（人工智慧）或資料處理方法沒有直接關係。本題重點是：${q.explanation}`;
    }
    return `「${option}」沒有符合題目指定的目的或條件，因此不是最佳答案。判斷時應抓住這個重點：${q.explanation}`;
  }

  function currentPool() {
    let pool = state.subject === "all" ? bank : bank.filter(q => q.subject === Number(state.subject));
    if (state.topic) pool = pool.filter(q => q.topic === state.topic);
    return pool;
  }

  function customPool() {
    let pool = state.custom.subject === "all" ? bank : bank.filter(q => q.subject === Number(state.custom.subject));
    if (state.custom.topic !== "all") pool = pool.filter(q => q.topic === state.custom.topic);
    if (state.custom.difficulty !== "all") pool = pool.filter(q => q.difficulty === state.custom.difficulty);
    return pool;
  }

  function wrongPool() {
    return bank.filter(q => state.progress.wrongIds.includes(q.id));
  }

  function officialPastPool() {
    return bank.filter(q => q.sourceType === "official-past")
      .filter(q => state.pastSession === "all" || q.sourceYear === state.pastSession)
      .filter(q => state.pastSubject === "all" || q.subject === Number(state.pastSubject));
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

  function startQuiz(mode, count, minutes) {
    state.mode = mode;
    const pool = mode === "review" ? dueReviewQuestions()
      : mode === "cards" ? bank.filter(q => state.progress.cardIds.includes(q.id))
      : mode === "wrong" ? filteredWrongQuestions()
      : mode === "past" ? officialPastPool()
      : mode === "custom" ? customPool()
      : currentPool();
    if (!pool.length) {
      toast(mode === "review" ? "今天沒有到期複習，先練新題吧！" : mode === "cards" ? "你還沒有收藏重點卡片。" : mode === "wrong" ? "錯題已全部掌握，太棒了！" : mode === "past" ? "此梯次與科目目前沒有已收錄考題。" : "此範圍目前沒有題目。", "success");
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
    state.examMinutes = minutes || EXAM_MINUTES;
    state.examKind = mode === "exam" && state.examMinutes === FULL_EXAM_MINUTES ? "full" : "quick";
    state.examEndsAt = mode === "exam" ? Date.now() + state.examMinutes * 60000 : null;
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

  function sessionSubjectScore(subject) {
    const rows = state.quiz.map((q, index) => ({ q, answer: state.sessionAnswers[index] })).filter(row => row.q.subject === subject);
    if (!rows.length) return null;
    return Math.round(rows.filter(row => row.answer?.correct).length / rows.length * 100);
  }

  function saveSessionHistory(score) {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      date: new Date().toISOString(),
      mode: state.mode,
      examKind: state.examKind,
      count: state.quiz.length,
      score,
      subject1: sessionSubjectScore(1),
      subject2: sessionSubjectScore(2)
    };
    state.progress.history = [entry, ...state.progress.history].slice(0, 30);
  }

  function finishPractice() {
    clearTimer();
    const score = Math.round((state.sessionAnswers.filter(a => a.correct).length / state.quiz.length) * 100);
    state.progress.sessions += 1;
    state.progress.bestScore = Math.max(state.progress.bestScore, score);
    saveSessionHistory(score);
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
    saveSessionHistory(score);
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
    const dark = effectiveTheme() === "dark";
    const fontLabels = { normal: "標準", large: "大", xlarge: "特大" };
    return `
      <header class="topbar">
        <button class="brand" data-action="home" aria-label="回到首頁">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>iPAS 中級刷題站 <b class="version-badge">v1.7</b></strong><small>科目 1＋科目 2・共 ${bank.length} 題（含 ${officialPastCount} 題歷屆精選）</small></span>
        </button>
        <div class="topbar-actions">
          <button class="utility-button install-button ${isStandalone() ? "is-hidden" : ""}" data-action="install" title="安裝到桌面或手機主畫面" aria-label="安裝 App"><span aria-hidden="true">↓</span><b>安裝 App</b></button>
          <button class="utility-button" data-action="theme" title="切換深色或淺色模式" aria-label="目前為${dark ? "深色" : "淺色"}模式，按一下切換"><span aria-hidden="true">${dark ? "☀" : "☾"}</span><b>${dark ? "淺色" : "深色"}</b></button>
          <button class="utility-button" data-action="font" title="調整字體大小" aria-label="目前字體：${fontLabels[settings.fontSize]}，按一下調整"><span aria-hidden="true">A</span><b>${fontLabels[settings.fontSize]}</b></button>
          <div class="exam-pill" title="考試日期：2026 年 11 月 14 日"><span>距離考試</span><strong>${daysLeft()} 天</strong></div>
        </div>
      </header>
      ${navigator.onLine ? "" : '<div class="offline-banner" role="status">目前離線｜題庫與學習進度仍可正常使用</div>'}
      <main>${content}</main>
      <footer>
        <p>本網站為非官方學習工具；歷屆題標示官方公告來源，答案解析由本站整理，其餘為原創練習題。</p>
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
    const cardCount = state.progress.cardIds.length;
    const noteCount = Object.values(state.progress.notes).filter(note => String(note).trim()).length;
    const wrongCount = state.progress.wrongIds.length;
    const topicOptions = [...new Set(bank.filter(q => state.custom.subject === "all" || q.subject === Number(state.custom.subject)).map(q => q.topic))].sort();
    const examHistory = state.progress.history.filter(item => item.mode === "exam").slice(0, 6);
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
            <button class="button secondary full-exam-button" data-start="full-exam">50 題完整模擬｜60 分鐘</button>
            <button class="button secondary past-exam-button" data-action="past-center">歷屆考題精選｜${officialPastCount} 題</button>
            <button class="button secondary card-practice-button" data-start="cards" ${cardCount ? "" : "disabled"}>重點卡複習｜${cardCount} 張</button>
            <button class="button secondary wrong-center-button" data-action="wrong-center">錯題中心｜${wrongCount} 題</button>
          </div>
          <p class="simulation-note">50 題／60 分鐘為本站考前練習設定，非官方考試規格。</p>
          <div class="data-tools">
            <button data-action="export">匯出學習進度</button>
            <button data-action="import">匯入學習進度</button>
            <span>已寫 ${noteCount} 則筆記</span>
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

      ${pastResourcesView()}

      <section class="workspace custom-section">
        <div class="custom-copy"><p class="eyebrow">CUSTOM PRACTICE</p><h2>自訂刷題範圍</h2><p>依科目、章節、難度與題數組合一回專屬練習。</p></div>
        <div class="custom-form">
          <label>科目<select id="custom-subject"><option value="all" ${state.custom.subject === "all" ? "selected" : ""}>兩科混合</option><option value="1" ${state.custom.subject === "1" ? "selected" : ""}>科目 1</option><option value="2" ${state.custom.subject === "2" ? "selected" : ""}>科目 2</option></select></label>
          <label>章節<select id="custom-topic"><option value="all">全部章節</option>${topicOptions.map(topic => `<option value="${escapeHtml(topic)}" ${state.custom.topic === topic ? "selected" : ""}>${escapeHtml(topic)}</option>`).join("")}</select></label>
          <label>難度<select id="custom-difficulty">${["all", "基礎", "中等", "進階"].map(value => `<option value="${value}" ${state.custom.difficulty === value ? "selected" : ""}>${value === "all" ? "全部難度" : value}</option>`).join("")}</select></label>
          <label>題數<select id="custom-count">${[5, 10, 20, 30, 50].map(value => `<option value="${value}" ${state.custom.count === value ? "selected" : ""}>${value} 題</option>`).join("")}</select></label>
          <button class="button primary" data-action="start-custom">開始自訂練習 →</button>
        </div>
      </section>

      ${historyView(examHistory)}

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

  function pastResourcesView() {
    const grouped = [
      { year: "114 年第二梯次", subject: 1, label: "114-2｜科目 1" },
      { year: "114 年第二梯次", subject: 2, label: "114-2｜科目 2" },
      { year: "115 年第一次", subject: 1, label: "115-1｜科目 1" },
      { year: "115 年第一次", subject: 2, label: "115-1｜科目 2" }
    ];
    return `
      <section class="workspace past-section" id="past-exams">
        <div class="section-heading"><div><p class="eyebrow">OFFICIAL PAST EXAMS</p><h2>歷屆考題精選</h2></div><span>官方公告題目＋本站白話解析</span></div>
        <div class="past-summary">
          <div><strong>${officialPastCount}</strong><span>題已收錄</span></div>
          <p>目前收錄官方公開的 114 年第二梯次、115 年第一次，科目 1 與科目 2 各 5 題。每題保留年度與原題號，方便回查官方 PDF。</p>
          <button class="button primary" data-past-all>兩梯次混合練習 →</button>
        </div>
        <div class="past-grid">${grouped.map(item => {
          const questions = bank.filter(q => q.sourceType === "official-past" && q.sourceYear === item.year && q.subject === item.subject);
          const sourceUrl = questions[0]?.sourceUrl;
          return `<article class="past-card"><p>${escapeHtml(item.year)}</p><h3>${item.subject === 1 ? "人工智慧技術<br>應用與規劃" : "大數據處理<br>分析與應用"}</h3><strong>${questions.length} 題精選</strong><div><button data-past-session="${escapeHtml(item.year)}" data-past-subject="${item.subject}">開始作答 →</button>${sourceUrl ? `<a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">官方完整 PDF ↗</a>` : ""}</div></article>`;
        }).join("")}</div>
        <p class="source-note">考題來源：經濟部產業發展署 iPAS 官方「中級能力鑑定試題公告」。題目答案依官方公告，白話解析由本站整理。</p>
      </section>`;
  }

  function historyView(items) {
    if (!items.length) return `
      <section class="workspace history-section">
        <div class="section-heading"><div><p class="eyebrow">MOCK EXAM</p><h2>模擬考紀錄</h2></div><span>練完第一回後開始累積趨勢</span></div>
        <div class="empty-analysis"><strong>還沒有模擬考紀錄。</strong><p>可先從 20 題快速模擬開始，再挑戰 50 題完整模擬。</p></div>
      </section>`;
    return `
      <section class="workspace history-section">
        <div class="section-heading"><div><p class="eyebrow">MOCK EXAM</p><h2>模擬考趨勢</h2></div><span>70 分為本站練習通過線</span></div>
        <div class="history-card">
          <div class="trend-bars" aria-label="最近模擬考分數趨勢">${[...items].reverse().map((item, index) => `<div class="trend-item"><div class="trend-track"><i class="${historyPassed(item) ? "pass" : ""}" style="height:${Math.max(5, item.score)}%"><b>${item.score}</b></i><span class="pass-line" aria-hidden="true"></span></div><small>第 ${Math.max(1, state.progress.history.filter(row => row.mode === "exam").length - items.length + index + 1)} 回</small></div>`).join("")}</div>
          <div class="history-list">${items.map(item => `<div class="history-row"><span>${new Date(item.date).toLocaleDateString("zh-TW", { month: "numeric", day: "numeric" })}</span><strong>${item.examKind === "full" ? "完整模擬" : "快速模擬"}・${item.count} 題</strong><span>科 1 ${item.subject1 === null ? "－" : `${item.subject1} 分`}</span><span>科 2 ${item.subject2 === null ? "－" : `${item.subject2} 分`}</span><b class="${historyPassed(item) ? "is-pass" : ""}">${item.score} 分</b></div>`).join("")}</div>
        </div>
      </section>`;
  }

  function historyPassed(item) {
    if (item.subject1 !== null && item.subject2 !== null) return item.subject1 >= 70 && item.subject2 >= 70;
    return item.score >= 70;
  }

  function filteredWrongQuestions() {
    return wrongPool().filter(q => (state.wrongSubject === "all" || q.subject === Number(state.wrongSubject)) && (state.wrongTopic === "all" || q.topic === state.wrongTopic));
  }

  function wrongCenterView() {
    const allWrong = wrongPool();
    const questions = filteredWrongQuestions();
    const topics = [...new Set(allWrong.filter(q => state.wrongSubject === "all" || q.subject === Number(state.wrongSubject)).map(q => q.topic))].sort();
    return appShell(`
      <section class="workspace wrong-shell">
        <div class="wrong-hero">
          <div><p class="eyebrow">WRONG ANSWERS</p><h1>錯題管理中心</h1><p>集中重練、補筆記；真的掌握後再移出清單。</p></div>
          <div class="wrong-count"><strong>${allWrong.length}</strong><span>題待加強</span></div>
        </div>
        <div class="wrong-toolbar">
          <label>科目<select id="wrong-subject"><option value="all" ${state.wrongSubject === "all" ? "selected" : ""}>全部</option><option value="1" ${state.wrongSubject === "1" ? "selected" : ""}>科目 1</option><option value="2" ${state.wrongSubject === "2" ? "selected" : ""}>科目 2</option></select></label>
          <label>章節<select id="wrong-topic"><option value="all">全部章節</option>${topics.map(topic => `<option value="${escapeHtml(topic)}" ${state.wrongTopic === topic ? "selected" : ""}>${escapeHtml(topic)}</option>`).join("")}</select></label>
          <button class="button primary" data-action="start-wrong" ${questions.length ? "" : "disabled"}>練習篩選結果｜${questions.length} 題</button>
          <button class="button secondary" data-action="home">回首頁</button>
        </div>
        ${questions.length ? `<div class="wrong-list">${questions.map(q => {
          const attempt = state.progress.attempts[q.id] || {};
          const note = state.progress.notes[q.id];
          const isCard = state.progress.cardIds.includes(q.id);
          return `<article class="wrong-item"><div class="wrong-item-head"><div><span>科目 ${q.subject}</span><span>${escapeHtml(q.topic)}</span><span>${escapeHtml(q.difficulty)}</span></div><small>已作答 ${attempt.attempts || 0} 次</small></div><h2>${escapeHtml(q.question)}</h2><p><strong>判斷重點：</strong>${escapeHtml(q.explanation)}</p><div class="wrong-item-actions"><button class="mini-card-button ${isCard ? "active" : ""}" data-card-id="${q.id}">${isCard ? "★ 已收重點卡" : "☆ 加入重點卡"}</button>${note ? `<span>有個人筆記</span>` : ""}<button class="master-button" data-master-id="${q.id}">✓ 標記已掌握</button></div></article>`;
        }).join("")}</div>` : `<div class="empty-analysis"><strong>${allWrong.length ? "目前篩選條件沒有錯題。" : "錯題已全部清空！"}</strong><p>${allWrong.length ? "換一個科目或章節看看。" : "繼續保持，之後答錯的題目會自動出現在這裡。"}</p></div>`}
      </section>`);
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
    const note = state.progress.notes[q.id] || "";
    const isCard = state.progress.cardIds.includes(q.id);
    const card = `
      <article class="question-card">
        <div class="question-tags"><span class="subject-label">科目 ${q.subject}</span><span>${escapeHtml(q.topic)}</span><span>${escapeHtml(q.difficulty)}</span>${state.mode === "cards" ? '<span class="card-mode-label">重點卡複習</span>' : ""}${q.sourceType === "official-past" ? `<span class="past-mode-label">歷屆｜${escapeHtml(q.sourceYear)}・第 ${q.sourceQuestion} 題</span>` : ""}</div>
        ${q.sourceType === "official-past" ? `<a class="question-source" href="${q.sourceUrl}" target="_blank" rel="noopener noreferrer">查看這題的官方公告試題 PDF ↗</a>` : ""}
        <h1 id="question-title" tabindex="-1">${escapeHtml(q.question)}</h1>
        <div class="options" role="radiogroup" aria-label="答案選項">${q.options.map((option, index) => optionButton(q, option, index, selected)).join("")}</div>

        ${state.mode !== "exam" && state.checked ? `
          <div class="answer-panel ${isCorrect ? "correct" : "incorrect"}">
            <div class="answer-status"><span>${isCorrect ? "✓" : "!"}</span><strong>${isCorrect ? "答對了" : `答錯了，正確答案是 ${letters[q.answer]}`}</strong></div>
            <p>${escapeHtml(q.explanation)}</p>
            ${state.confidence === "低" ? `<small>你選了「低信心」，本題仍會加入延遲複習。</small>` : ""}
            <div class="option-breakdown">
              <h2>四個選項逐一看</h2>
              ${q.options.map((option, index) => `<div class="option-reason ${index === q.answer ? "is-correct" : index === state.selected ? "is-chosen-wrong" : ""}"><span>${letters[index]}</span><div><strong>${index === q.answer ? "正確答案" : index === state.selected ? "你選的答案" : "錯誤選項"}｜${escapeHtml(option)}</strong><p>${escapeHtml(optionExplanation(q, index))}</p></div></div>`).join("")}
            </div>
          </div>
        ` : state.mode !== "exam" ? `
          <fieldset class="confidence"><legend>這題有多確定？</legend>${["低", "中", "高"].map(level => `<button type="button" class="confidence-button ${state.confidence === level ? "active" : ""}" data-confidence="${level}">${level}</button>`).join("")}</fieldset>
        ` : ""}

        <div class="study-tools">
          <button class="card-toggle ${isCard ? "active" : ""}" data-action="toggle-card" aria-pressed="${isCard}">${isCard ? "★ 已加入重點卡" : "☆ 加入重點卡"}</button>
          <details class="note-box" ${note ? "open" : ""}>
            <summary>我的筆記${note ? "｜已儲存" : ""}</summary>
            <textarea data-note-id="${q.id}" rows="3" maxlength="600" placeholder="用自己的話寫下判斷重點，會記得更久。">${escapeHtml(note)}</textarea>
            <small>輸入後會自動儲存在目前裝置</small>
          </details>
        </div>

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

  function resultReviewRow(q, index) {
    const answer = state.sessionAnswers[index];
    const isCard = state.progress.cardIds.includes(q.id);
    return `<div class="review-row ${answer?.correct ? "ok" : "bad"}">
      <span>${answer?.correct ? "✓" : "×"}</span>
      <div class="review-content">
        <strong>${escapeHtml(q.question)}</strong>
        <small>${subjectName(q.subject)}${q.sourceType === "official-past" ? `・${escapeHtml(q.sourceYear)}第 ${q.sourceQuestion} 題` : ""}${state.mode !== "exam" ? `・信心 ${answer?.confidence || "－"}` : ""}</small>
        ${!answer?.correct ? `<em>${escapeHtml(q.explanation)}</em>` : ""}
        <details class="result-explanations">
          <summary>查看四個選項解析</summary>
          <div>${q.options.map((option, optionIndex) => `<div class="result-option-reason ${optionIndex === q.answer ? "is-correct" : optionIndex === answer?.selected ? "is-chosen-wrong" : ""}"><span>${letters[optionIndex]}</span><p><strong>${escapeHtml(option)}</strong><br>${escapeHtml(optionExplanation(q, optionIndex))}</p></div>`).join("")}</div>
        </details>
      </div>
      <div class="review-side"><b>${answer?.correct ? "答對" : `正解 ${letters[q.answer]}`}</b><button class="mini-card-button ${isCard ? "active" : ""}" data-card-id="${q.id}" aria-pressed="${isCard}">${isCard ? "★ 重點卡" : "☆ 收藏"}</button></div>
    </div>`;
  }

  function resultView() {
    const correct = state.sessionAnswers.filter(a => a.correct).length;
    const score = Math.round(correct / state.quiz.length * 100);
    const lowConfidenceCorrect = state.sessionAnswers.filter(a => a.correct && a.confidence === "低").length;
    const message = score >= 85 ? "掌握得很穩，繼續保持。" : score >= 70 ? "已接近目標，把錯題補起來。" : "先別急，解析與延遲複習就是進步的起點。";
    const subject1Score = sessionSubjectScore(1);
    const subject2Score = sessionSubjectScore(2);
    const passed = subject1Score !== null && subject2Score !== null ? subject1Score >= 70 && subject2Score >= 70 : score >= 70;
    const examStatus = state.mode === "exam" ? `<div class="pass-status ${passed ? "pass" : "needs-work"}"><strong>${passed ? (subject1Score !== null && subject2Score !== null ? "兩科皆達 70 分" : "本站練習通過") : "再補強後重試"}</strong><span>本站以 70 分作為模擬練習線；官方數據分析證書須科目 1、科目 2 各達 70 分。</span></div>${subject1Score !== null && subject2Score !== null ? `<div class="subject-score-pills"><span class="${subject1Score >= 70 ? "pass" : ""}">科目 1｜${subject1Score} 分</span><span class="${subject2Score >= 70 ? "pass" : ""}">科目 2｜${subject2Score} 分</span></div>` : ""}` : "";
    return appShell(`
      <section class="result-shell workspace">
        <div class="result-hero"><p class="eyebrow">SESSION COMPLETE</p><div class="result-score"><strong>${score}</strong><span>分</span></div><h1>${escapeHtml(message)}</h1><p>答對 ${correct} 題，共 ${state.quiz.length} 題；${lowConfidenceCorrect ? `另有 ${lowConfidenceCorrect} 題雖答對但信心偏低，已安排複習。` : "本次作答已存入學習紀錄。"}</p>${examStatus}<div class="primary-actions centered"><button class="button primary" data-action="retry">再練一次 <span>→</span></button><button class="button secondary" data-action="home">回學習地圖</button></div></div>
        <div class="review-list"><div class="section-heading"><div><p class="eyebrow">REVIEW</p><h2>本次作答</h2></div><span>${correct}/${state.quiz.length} 正確</span></div>
          ${state.quiz.map(resultReviewRow).join("")}
        </div>
      </section>
    `);
  }

  function render() {
    const app = document.querySelector("#app");
    app.innerHTML = state.screen === "quiz" ? quizView() : state.screen === "result" ? resultView() : state.screen === "wrong" ? wrongCenterView() : homeView();
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

  function toggleCard(id) {
    if (!id) return;
    const cards = new Set(state.progress.cardIds);
    const removing = cards.has(id);
    if (removing) cards.delete(id); else cards.add(id);
    state.progress.cardIds = [...cards];
    saveProgress();
    render();
    toast(removing ? "已移出重點卡片。" : "已加入重點卡片。", "success");
  }

  function saveNote(id, value) {
    if (!id) return;
    const text = value.slice(0, 600);
    if (text.trim()) state.progress.notes[id] = text;
    else delete state.progress.notes[id];
    saveProgress();
  }

  function markWrongMastered(id) {
    state.progress.wrongIds = state.progress.wrongIds.filter(item => item !== id);
    delete state.progress.reviewQueue[id];
    saveProgress();
    render();
    toast("已標記為掌握，並移出錯題清單。", "success");
  }

  function exportProgress() {
    const payload = { app: "ipas-ai-quiz", version: 7, exportedAt: new Date().toISOString(), progress: state.progress, settings };
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
      if (data.settings && typeof data.settings === "object") {
        settings.theme = ["system", "light", "dark"].includes(data.settings.theme) ? data.settings.theme : settings.theme;
        settings.fontSize = ["normal", "large", "xlarge"].includes(data.settings.fontSize) ? data.settings.fontSize : settings.fontSize;
        saveSettings();
      }
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
      if (mode === "full-exam") startQuiz("exam", 50, FULL_EXAM_MINUTES);
      else startQuiz(mode, mode === "exam" ? 20 : mode === "review" || mode === "cards" ? 200 : 10, mode === "exam" ? EXAM_MINUTES : undefined);
    }));
    document.querySelectorAll("[data-quick-subject]").forEach(button => button.addEventListener("click", () => { state.subject = button.dataset.quickSubject; state.topic = null; startQuiz("practice", 10); }));
    document.querySelectorAll("[data-topic]").forEach(button => button.addEventListener("click", () => { state.subject = button.dataset.topicSubject; state.topic = button.dataset.topic; startQuiz("practice", 10); }));
    document.querySelectorAll("[data-past-session]").forEach(button => button.addEventListener("click", () => { state.pastSession = button.dataset.pastSession; state.pastSubject = button.dataset.pastSubject; startQuiz("past", 50); }));
    document.querySelector("[data-past-all]")?.addEventListener("click", () => { state.pastSession = "all"; state.pastSubject = "all"; startQuiz("past", officialPastCount); });
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
      if (action === "retry") { state.topic = null; startQuiz(state.mode, state.quiz.length, state.examMinutes); }
      if (action === "wrong-center") { state.screen = "wrong"; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
      if (action === "past-center") document.querySelector("#past-exams")?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (action === "start-wrong") startQuiz("wrong", filteredWrongQuestions().length);
      if (action === "start-custom") startQuiz("custom", state.custom.count);
      if (action === "export") exportProgress();
      if (action === "import") document.querySelector("#progress-file")?.click();
      if (action === "toggle-card") toggleCard(state.quiz[state.index]?.id);
      if (action === "theme") { settings.theme = effectiveTheme() === "dark" ? "light" : "dark"; saveSettings(); render(); }
      if (action === "font") { const sizes = ["normal", "large", "xlarge"]; settings.fontSize = sizes[(sizes.indexOf(settings.fontSize) + 1) % sizes.length]; saveSettings(); render(); toast(`字體已調整為${{ normal: "標準", large: "大", xlarge: "特大" }[settings.fontSize]}。`, "success"); }
      if (action === "install") installApp();
    }));
    document.querySelectorAll("[data-card-id]").forEach(button => button.addEventListener("click", () => toggleCard(button.dataset.cardId)));
    document.querySelectorAll("[data-master-id]").forEach(button => button.addEventListener("click", () => markWrongMastered(button.dataset.masterId)));
    document.querySelectorAll("[data-note-id]").forEach(area => area.addEventListener("input", () => saveNote(area.dataset.noteId, area.value)));
    document.querySelector("#progress-file")?.addEventListener("change", event => importProgress(event.target.files?.[0]));
    document.querySelector("#custom-subject")?.addEventListener("change", event => { state.custom.subject = event.target.value; state.custom.topic = "all"; render(); });
    document.querySelector("#custom-topic")?.addEventListener("change", event => { state.custom.topic = event.target.value; });
    document.querySelector("#custom-difficulty")?.addEventListener("change", event => { state.custom.difficulty = event.target.value; });
    document.querySelector("#custom-count")?.addEventListener("change", event => { state.custom.count = Number(event.target.value); });
    document.querySelector("#wrong-subject")?.addEventListener("change", event => { state.wrongSubject = event.target.value; state.wrongTopic = "all"; render(); });
    document.querySelector("#wrong-topic")?.addEventListener("change", event => { state.wrongTopic = event.target.value; render(); });
  }

  function toast(message, type) {
    const node = document.querySelector("#toast");
    if (!node) return;
    node.textContent = message;
    node.className = `toast show ${type || ""}`;
    window.setTimeout(() => node.classList.remove("show"), 2600);
  }

  async function installApp() {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      render();
      return;
    }
    const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    window.alert(isiOS
      ? "請點 Safari 下方的「分享」按鈕，再選「加入主畫面」。"
      : "請點瀏覽器網址列右側的「安裝」圖示；若沒有看到，請開啟瀏覽器選單並選「安裝應用程式」。");
  }

  document.addEventListener("keydown", event => {
    if (state.screen !== "quiz") return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target?.tagName) || event.target?.isContentEditable) return;
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
      name: "read_study_progress", title: "讀取刷題進度", description: "讀取作答、正確率、到期複習、歷屆題數與各科題庫進度，不修改資料。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() { return { totalAnswered: state.progress.totalAnswered, accuracyPercent: accuracy(), dueReviewCount: dueReviewQuestions().length, scheduledReviewCount: scheduledReviewCount(), wrongCount: state.progress.wrongIds.length, cardCount: state.progress.cardIds.length, noteCount: Object.keys(state.progress.notes).length, officialPastCount, examHistoryCount: state.progress.history.filter(item => item.mode === "exam").length, subject1: subjectStats(1), subject2: subjectStats(2), examDaysLeft: daysLeft() }; }
    });
    register({
      name: "start_quiz_session", title: "開始刷題", description: "在畫面上開始科目 1、科目 2、兩科混合、歷屆題、錯題或重點卡片的練習、複習或模擬考。",
      inputSchema: { type: "object", properties: { subject: { type: "string", enum: ["all", "1", "2"] }, mode: { type: "string", enum: ["practice", "exam", "review", "cards", "wrong", "past"] }, count: { type: "integer", minimum: 1, maximum: 220 } }, required: ["subject", "mode", "count"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) { if (!input || !["all", "1", "2"].includes(input.subject) || !["practice", "exam", "review", "cards", "wrong", "past"].includes(input.mode) || !Number.isInteger(input.count) || input.count < 1 || input.count > bank.length) throw new Error("刷題設定無效。"); state.subject = input.subject; state.wrongSubject = input.subject; state.pastSubject = input.subject; state.topic = null; state.wrongTopic = "all"; state.pastSession = "all"; startQuiz(input.mode, input.count); return { started: state.screen === "quiz", subject: input.subject, mode: input.mode, questionCount: state.quiz.length }; }
    });
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
    render();
  });
  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    render();
    toast("iPAS 刷題 App 已安裝完成。", "success");
  });
  window.addEventListener("online", () => { render(); toast("網路已恢復連線。", "success"); });
  window.addEventListener("offline", render);
  window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
    if (settings.theme === "system") { applySettings(); render(); }
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }

  applySettings();
  registerWebMcpTools();
  render();
})();
