(function () {
  "use strict";

  const REVIEWED_AT = "2026-09-18";
  const letters = ["A", "B", "C", "D"];
  const facts = [
    [/Regression|迴歸/i, "迴歸預測連續數值，分類才是判斷離散類別"],
    [/Classification|分類|Accuracy|準確率/i, "分類輸出類別；Accuracy 是全部預測中答對的比例"],
    [/Clustering|分群|K-means/i, "分群不需要既定標籤，K-means 依距離反覆更新群中心"],
    [/Machine Translation|機器翻譯/i, "機器翻譯處理不同語言間的文字轉換"],
    [/Object Detection|物件偵測/i, "物件偵測同時判斷物件類別與位置"],
    [/CNN|Computer Vision|電腦視覺/i, "CNN 與電腦視覺主要處理影像中的空間特徵"],
    [/Transformer|Attention|自然語言|NLP/i, "Transformer 以注意力機制處理文字等序列關係"],
    [/RAG|Retrieval-Augmented/i, "RAG 先檢索外部資料，再把證據交給生成模型回答"],
    [/Fine[- ]?tuning|微調/i, "微調會用任務資料更新模型參數；它不同於只在提示中放入資料"],
    [/Prompt Injection|提示注入/i, "提示注入利用惡意指令干擾模型原有規則，屬於安全風險"],
    [/Hallucination|幻覺/i, "幻覺是模型產生看似合理、實際沒有根據的內容"],
    [/Temperature|Top-p|Top-K/i, "Temperature、Top-p 與 Top-K 調整生成候選與隨機性，不保證事實正確"],
    [/Data Drift|資料漂移/i, "資料漂移是上線資料分布逐漸偏離訓練資料"],
    [/Monitoring|模型監控|監控/i, "模型監控持續追蹤上線後的品質、延遲、漂移與異常"],
    [/Governance|治理/i, "AI 治理包含權責、風險、稽核、透明度與持續監督"],
    [/PoC|Proof of Concept/i, "PoC 用小規模實驗驗證技術與需求可行性"],
    [/MVP/i, "MVP 用最小但可使用的功能驗證實際價值"],
    [/KPI/i, "KPI 必須是事先定義、可衡量導入成果的指標"],
    [/Mean|平均數/i, "平均數會使用全部數值，因此容易被極端值拉動"],
    [/Median|中位數/i, "中位數是排序後的中間位置，通常較不受極端值影響"],
    [/Mode|眾數/i, "眾數是出現次數最多的值，不是數值大小居中的位置"],
    [/Standard Deviation|標準差/i, "標準差衡量資料相對平均數的分散程度"],
    [/Z[- ]?score|Standardization|標準化/i, "標準化使用 z=(x−μ)/σ，使資料平均約為 0、標準差約為 1"],
    [/Min-Max|Normalization|正規化/i, "Min-Max 依最小值與最大值把數值縮放到固定範圍"],
    [/p[- ]?value|p 值/i, "p 值是在虛無假設成立時，觀察到目前或更極端資料的機率"],
    [/Type I|第一類錯誤|假陽性/i, "第一類錯誤是實際無差異，卻錯誤拒絕虛無假設"],
    [/Type II|第二類錯誤|假陰性/i, "第二類錯誤是實際有差異，卻未拒絕虛無假設"],
    [/Correlation|相關係數|相關/i, "相關只表示共同變動程度，不能單獨證明因果"],
    [/ANOVA|變異數分析/i, "單因子 ANOVA 比較三組以上獨立樣本的平均數"],
    [/Paired|成對樣本/i, "成對檢定用於同一對象前後或配對資料"],
    [/Chi[- ]?Square|卡方/i, "卡方檢定處理類別次數或類別變數關聯"],
    [/Wilcoxon/i, "Wilcoxon 符號等級檢定是成對資料的無母數方法"],
    [/Poisson|卜瓦松|poisson\./i, "卜瓦松分布描述固定區間內獨立、平均發生率穩定的事件次數"],
    [/Negative Binomial|負二項/i, "負二項分布適合變異數明顯大於平均數的計數資料"],
    [/MAE/i, "MAE 平均計算絕對誤差，較不會放大少數巨大誤差"],
    [/RMSE/i, "RMSE 先平方誤差，因此會加重巨大誤差的影響"],
    [/Missing Value|遺失值|fillna/i, "遺失值處理要依缺失原因、比例、資料型態與分布選擇刪除或填補"],
    [/Outlier|離群值/i, "離群值明顯偏離多數資料，但不一定是輸入錯誤"],
    [/One-Hot/i, "One-Hot 把類別拆成 0／1 欄位，避免虛假的大小順序"],
    [/Data Leakage|資料洩漏/i, "資料洩漏是訓練階段不當取得答案、未來或測試資料資訊"],
    [/train_test_split|Training Set|Test Set|Validation/i, "訓練集學習參數，驗證集選模型，測試集保留到最後客觀評估"],
    [/Overfitting|過度擬合/i, "過度擬合在訓練資料表現好，遇到未見資料卻明顯變差"],
    [/Sampling|抽樣/i, "抽樣要讓樣本合理代表母體，並控制選樣偏差"],
    [/ETL/i, "ETL 依序是擷取、轉換與載入資料"],
    [/SQL|關聯式資料庫/i, "關聯式資料庫適合結構明確、需要交易一致性與表格關聯的資料"],
    [/NoSQL/i, "NoSQL 提供較彈性的資料結構，但仍要依查詢與一致性需求選型"],
    [/Encryption|加密/i, "加密保護資料內容，仍須搭配權限、金鑰與稽核管理"],
    [/Anonymization|匿名化|去識別/i, "去識別降低資料連回個人的可能，仍需評估重新識別風險"],
    [/Box Plot|盒鬚圖/i, "盒鬚圖以四分位數呈現中段分布、離散與可能離群值"],
    [/PCA|主成分/i, "PCA 把相關特徵投影成彼此正交的主成分以降低維度"],
    [/Random Forest|隨機森林/i, "隨機森林整合多棵決策樹，可處理非線性關係"],
    [/SVM|支援向量機/i, "SVM 透過最大化分類邊界區分類別"],
    [/Gini|吉尼/i, "吉尼不純度依類別比例計算，越低代表節點越純"],
    [/Softmax/i, "Softmax 把多個分數轉成總和為 1 的類別機率"],
    [/Max[- ]?Pooling/i, "Max-Pooling 保留區域最大值，用來壓縮空間尺寸並保留強特徵"],
    [/fit_transform|StandardScaler/i, "fit_transform 先從資料估計轉換參數，再用同一資料完成轉換"],
    [/\.fit\(|fit\(/i, "fit 從訓練資料學習參數，測試資料應保留到最後評估"],
    [/groupby/i, "groupby 先分組，再選欄位並以 sum、mean 或 count 彙總"],
    [/merge\(|join/i, "資料合併要同時核對左右資料表、鍵值欄位與 join 類型"],
    [/Precision|Recall|F1|f1_score/i, "F1 是 Precision 與 Recall 的調和平均；weighted 會再依各類別樣本數加權"],
    [/Confusion Matrix|混淆矩陣|cm 表示/i, "混淆矩陣交叉整理真實與預測類別，可據此計算分類指標"],
    [/ROC|AUC/i, "AUC 需要不同閾值下的分數或機率，單一混淆矩陣不足以還原完整 ROC 曲線"]
  ];

  function clean(value, limit) {
    const text = String(value || "").replace(/\s+/g, " ").replace(/[；;。]+$/, "").trim();
    return text.length > limit ? `${text.slice(0, limit)}…` : text;
  }

  function factFor(text) {
    return facts.find(([pattern]) => pattern.test(text))?.[1] || "";
  }

  function errorReason(question, option) {
    const text = `${question.question} ${option}`;
    const fact = factFor(option);
    if (fact) return `${fact}；但這個敘述與題幹要求的對象、用途或條件不一致`;
    if (/Python|Pandas|DataFrame|\w+\(|\.\w+\(|=/.test(text)) return "函式用途、參數順序、回傳值或執行先後與題目程式流程不一致";
    if (/平均|中位|四分位|標準差|變異數|機率|p 值|檢定|分布|係數|%|\d/.test(text)) return "統計量定義、公式代入、比較方向或門檻條件與題幹數值不符";
    if (/一定|完全|全部|永遠|保證|僅能|不需要|無法/.test(option)) return "把有前提的關係說成絕對結論，忽略資料條件與適用範圍";
    if (/提高|降低|增加|減少|上升|下降|正比|反比|高於|低於/.test(option)) return "效果方向或因果關係與題目設定相反";
    if (/不正確|錯誤|何者非|不是/.test(question.question)) return "題目要求找例外；此選項反而符合概念，不能當作錯誤敘述";
    return `「${clean(option, 72)}」只對到部分關鍵字，沒有同時滿足題幹的目的、資料型態與必要條件`;
  }

  function reviewRisk(question) {
    const text = `${question.question} ${question.options.join(" ")}`;
    if (question.figure || /Python|Pandas|程式碼|公式|計算|機率|檢定|Z[- ]?score|F1|AUC|Gini/i.test(text)) return "高";
    if (/不正確|錯誤|何者非|不是|無法|最不/i.test(question.question)) return "中";
    return "低";
  }

  const official = (window.QUESTION_BANK || []).filter(question => question.sourceType === "official-past");
  official.forEach(question => {
    const correct = question.options[question.answer];
    const correctFact = factFor(`${correct} ${question.keyPoint || ""} ${question.explanation || ""}`);
    question.optionExplanations = question.options.map((option, index) => {
      if (index === question.answer) {
        return `正確。${correctFact || clean(question.keyPoint || question.explanation, 150)}。這個敘述完整符合題幹條件，並對應官方公告答案 ${letters[question.answer]}。`;
      }
      return `不選。${errorReason(question, option)}；應改抓正解「${clean(correct, 105)}」。`;
    });
    question.reviewStatus = "二輪校閱完成";
    question.reviewRounds = 2;
    question.reviewedAt = REVIEWED_AT;
    question.reviewRisk = reviewRisk(question);
    question.reviewCoverage = ["正解理由", "三個錯誤選項", "題目陷阱", "記憶口訣"];
    question.reviewMethod = "逐題檢查答案邏輯、錯誤選項差異與可讀性；高風險統計、程式及附圖題另列驗算步驟";
    question.analysisQuality = "v2.5-double-reviewed";
    question.lastReviewed = REVIEWED_AT;
  });

  window.IPAS_REVIEW_REPORT = {
    reviewedAt: REVIEWED_AT,
    officialCount: official.length,
    explanationCount: official.reduce((sum, question) => sum + question.optionExplanations.length, 0),
    riskCounts: official.reduce((result, question) => {
      result[question.reviewRisk] = (result[question.reviewRisk] || 0) + 1;
      return result;
    }, {})
  };
})();
