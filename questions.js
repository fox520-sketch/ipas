/*
 * 題目皆為本專案原創練習題，不重製官方試題。
 * 新增題目時請維持相同欄位：id、subject、topic、difficulty、question、options、answer、explanation。
 */
window.QUESTION_BANK = [
  {
    id: "s1-001", subject: 1, topic: "AI 基礎", difficulty: "基礎",
    question: "某客服系統能依顧客留言，自動判斷內容屬於抱怨、詢價或退貨。這項工作最接近哪一種 AI 任務？",
    options: ["Regression（迴歸）", "Classification（分類）", "Clustering（分群）", "Data Compression（資料壓縮）"],
    answer: 1, explanation: "系統要從事先定義好的類別中選一類，因此是 Classification（分類）。"
  },
  {
    id: "s1-002", subject: 1, topic: "AI 基礎", difficulty: "基礎",
    question: "購物網站想依顧客過去的購買行為，自動找出幾群相似客群，但事前沒有客群標籤。最適合使用哪一種方法？",
    options: ["Supervised Learning（監督式學習）", "Clustering（分群）", "Regression（迴歸）", "OCR（光學字元辨識）"],
    answer: 1, explanation: "沒有既有標籤，又要找出自然形成的群組，適合用 Clustering（分群）。"
  },
  {
    id: "s1-003", subject: 1, topic: "生成式 AI", difficulty: "基礎",
    question: "公司使用生成式 AI 撰寫商品說明，文字看起來合理，卻出現產品沒有的功能。這個現象稱為什麼？",
    options: ["Overfitting（過度擬合）", "Hallucination（幻覺）", "Pooling（池化）", "Tokenization（斷詞）"],
    answer: 1, explanation: "模型產生看似可信但不正確或沒有根據的內容，稱為 Hallucination（幻覺）。"
  },
  {
    id: "s1-004", subject: 1, topic: "生成式 AI", difficulty: "中等",
    question: "企業希望聊天機器人回答時，優先依內部最新版員工手冊，而不重新訓練整個大型語言模型。較合適的方法為何？",
    options: ["RAG（檢索增強生成）", "提高 Temperature（溫度）", "刪除 Context（上下文）", "改用 Clustering（分群）"],
    answer: 0, explanation: "RAG 會先檢索企業文件，再把相關內容提供給模型生成回答，方便更新知識來源。"
  },
  {
    id: "s1-005", subject: 1, topic: "提示工程", difficulty: "基礎",
    question: "使用者先提供三個「輸入與正確輸出」範例，再要求模型處理新問題。這種提示方式是？",
    options: ["Zero-shot Prompting（零樣本提示）", "Few-shot Prompting（少樣本提示）", "Fine-tuning（微調）", "Data Augmentation（資料增強）"],
    answer: 1, explanation: "在提示中給少量示範範例，稱為 Few-shot Prompting（少樣本提示）。"
  },
  {
    id: "s1-006", subject: 1, topic: "提示工程", difficulty: "中等",
    question: "財務摘要要求內容穩定、保守且容易重現。下列哪一項生成參數調整方向通常較合理？",
    options: ["提高 Temperature（溫度）", "降低 Temperature（溫度）", "無限提高 Max Tokens（最大輸出文字單位數）", "移除所有指令"],
    answer: 1, explanation: "較低的 Temperature 通常會降低隨機性，讓輸出更穩定；但仍不能保證完全正確。"
  },
  {
    id: "s1-007", subject: 1, topic: "提示工程", difficulty: "中等",
    question: "某模型設定 Top-p（核心取樣）為 0.85。下列敘述何者較正確？",
    options: ["固定只保留前 85 個字", "從累積機率達門檻的候選集合中取樣", "保證答案有 85% 正確率", "強迫輸出長度為原本的 85%"],
    answer: 1, explanation: "Top-p 依候選詞的累積機率決定取樣範圍，與正確率或固定字數無直接關係。"
  },
  {
    id: "s1-008", subject: 1, topic: "提示工程", difficulty: "基礎",
    question: "模型的 Context Window（上下文視窗）主要限制什麼？",
    options: ["電腦螢幕尺寸", "單次可處理的上下文總量", "資料庫可存的永久資料量", "模型每天可回答的人數"],
    answer: 1, explanation: "Context Window 是模型一次能納入處理的文字或多模態內容範圍，通常以 Token 計算。"
  },
  {
    id: "s1-009", subject: 1, topic: "自然語言處理", difficulty: "基礎",
    question: "保險公司想從大量客服留言中找出顧客情緒是正面、負面或中性，最接近哪項技術？",
    options: ["Sentiment Analysis（情感分析）", "Object Detection（物件偵測）", "Speech Synthesis（語音合成）", "Image Segmentation（影像分割）"],
    answer: 0, explanation: "判斷文字中的情緒傾向屬於 Sentiment Analysis（情感分析）。"
  },
  {
    id: "s1-010", subject: 1, topic: "電腦視覺", difficulty: "基礎",
    question: "工廠相機需要同時找出影像中每個瑕疵的位置與類別，較適合哪種任務？",
    options: ["Image Classification（影像分類）", "Object Detection（物件偵測）", "Machine Translation（機器翻譯）", "Text Summarization（文字摘要）"],
    answer: 1, explanation: "Object Detection 不只辨認類別，也會標示物件所在位置。"
  },
  {
    id: "s1-011", subject: 1, topic: "電腦視覺", difficulty: "中等",
    question: "醫療影像系統要精確標出腫瘤在每個像素上的範圍，最適合採用哪一種技術？",
    options: ["Image Segmentation（影像分割）", "Image Classification（影像分類）", "Speech Recognition（語音辨識）", "Recommendation（推薦）"],
    answer: 0, explanation: "要得到像素層級的區域範圍，應使用 Image Segmentation（影像分割）。"
  },
  {
    id: "s1-012", subject: 1, topic: "多模態 AI", difficulty: "基礎",
    question: "系統能同時讀取商品照片與文字問題，再回答照片中的內容。這最符合哪個概念？",
    options: ["Multimodal AI（多模態人工智慧）", "單純資料庫查詢", "只使用 NLP（自然語言處理）", "只使用語音合成"],
    answer: 0, explanation: "同時理解影像與文字等不同型態資料，屬於 Multimodal AI（多模態人工智慧）。"
  },
  {
    id: "s1-013", subject: 1, topic: "模型訓練", difficulty: "中等",
    question: "模型在訓練資料表現很好，但面對從未看過的測試資料時明顯變差。這最可能是哪種問題？",
    options: ["Underfitting（擬合不足）", "Overfitting（過度擬合）", "Encryption（加密）", "Clustering（分群）"],
    answer: 1, explanation: "模型過度記住訓練資料，卻無法推廣到新資料，是 Overfitting。"
  },
  {
    id: "s1-014", subject: 1, topic: "模型訓練", difficulty: "中等",
    question: "團隊只有少量產品瑕疵照片，希望利用已在大量影像上訓練好的模型再調整。最接近哪種作法？",
    options: ["Transfer Learning（遷移學習）", "Random Sampling（隨機抽樣）", "Data Deletion（資料刪除）", "Rule-based Sorting（規則排序）"],
    answer: 0, explanation: "Transfer Learning 會利用既有模型學到的特徵，再針對新任務調整。"
  },
  {
    id: "s1-015", subject: 1, topic: "模型評估", difficulty: "中等",
    question: "疾病篩檢系統最怕漏掉真正有病的人。評估時應特別重視哪個指標？",
    options: ["Recall（召回率）", "Precision（精確率）", "Latency（延遲）", "Compression Ratio（壓縮比）"],
    answer: 0, explanation: "Recall 關心真正陽性者有多少被找出，漏診成本高時通常要特別重視。"
  },
  {
    id: "s1-016", subject: 1, topic: "模型評估", difficulty: "中等",
    question: "垃圾郵件過濾器若把正常信件誤判為垃圾信，損失很大。針對「垃圾信」這個正類，應特別重視哪個指標？",
    options: ["Precision（精確率）", "Recall（召回率）", "Training Loss（訓練損失）", "資料筆數"],
    answer: 0, explanation: "Precision 高代表被判為垃圾信的郵件中，真正垃圾信的比例高，可減少誤殺正常信件。"
  },
  {
    id: "s1-017", subject: 1, topic: "AI 導入", difficulty: "基礎",
    question: "公司第一次導入 AI，不確定效果與風險。下列哪個做法最合理？",
    options: ["立刻全面取代現有流程", "先做 Pilot（試點導入）並設定成功指標", "不需要使用者參與", "只看模型參數量"],
    answer: 1, explanation: "Pilot 可用較小範圍驗證價值、流程、成本與風險，再決定是否擴大。"
  },
  {
    id: "s1-018", subject: 1, topic: "AI 導入", difficulty: "中等",
    question: "評估 AI 專案是否成功時，下列哪個 KPI（關鍵績效指標）最有業務意義？",
    options: ["模型檔案越大越好", "客服平均處理時間下降且滿意度維持", "程式碼行數增加", "GPU 使用率永遠 100%"],
    answer: 1, explanation: "AI 專案應連結實際業務價值；效率改善同時不犧牲服務品質，才是有意義的指標。"
  },
  {
    id: "s1-019", subject: 1, topic: "治理與倫理", difficulty: "基礎",
    question: "銀行使用 AI 輔助貸款審核，若拒絕申請，客戶希望知道大致原因。此時較需要重視哪一項？",
    options: ["Explainability（可解釋性）", "Image Resolution（影像解析度）", "Temperature（溫度）", "Pooling（池化）"],
    answer: 0, explanation: "高影響決策需要能說明主要判斷依據，因此可解釋性很重要。"
  },
  {
    id: "s1-020", subject: 1, topic: "治理與倫理", difficulty: "基礎",
    question: "醫療院所使用 AI 輔助判斷檢查結果。下列哪個做法最合理？",
    options: ["讓 AI 自動決定所有診斷", "重要判斷保留 Human Oversight（人類監督）", "提高 Top-p 就能保證正確", "刪除所有病患資料"],
    answer: 1, explanation: "醫療屬高風險場景，AI 應輔助專業人員，重要決策保留人類監督與責任。"
  },
  {
    id: "s1-021", subject: 1, topic: "治理與倫理", difficulty: "中等",
    question: "公司制定生成式 AI 使用規範、資料分類、權限控管與稽核流程。這最接近哪一項？",
    options: ["Governance（治理）", "Clustering（分群）", "Pooling（池化）", "Few-shot Prompting（少樣本提示）"],
    answer: 0, explanation: "規範角色、權限、風險、責任與稽核流程，屬於 AI Governance（AI 治理）。"
  },
  {
    id: "s1-022", subject: 1, topic: "資料隱私", difficulty: "中等",
    question: "員工想把含有客戶身分證字號的文件貼到未經公司核准的公用 AI 服務。較正確的處理方式為何？",
    options: ["直接貼上以節省時間", "先依公司規範去識別化並使用核准工具", "改用較長 Prompt 就安全", "只在晚上使用"],
    answer: 1, explanation: "敏感個資應依組織政策處理，必要時去識別化，且只能使用經核准、資料處理條款清楚的工具。"
  },
  {
    id: "s1-023", subject: 1, topic: "系統部署", difficulty: "中等",
    question: "工廠設備必須在網路中斷時仍能即時辨識異常，且不能把影像傳到外部。優先考慮哪種部署？",
    options: ["Edge AI（邊緣人工智慧）", "只用遠端雲端服務", "紙本人工統計", "公開社群平台"],
    answer: 0, explanation: "Edge AI 可在設備端或現場處理，降低延遲、網路依賴與資料外傳。"
  },
  {
    id: "s1-024", subject: 1, topic: "系統部署", difficulty: "中等",
    question: "即時語音助理的模型準確率良好，但每次回答要等待 12 秒。最直接需要改善哪個非功能性指標？",
    options: ["Latency（延遲）", "Label（標籤）", "Epoch（訓練週期）", "Vocabulary（詞彙表）"],
    answer: 0, explanation: "使用者等待時間反映推論 Latency，這是即時服務的重要非功能性需求。"
  },
  {
    id: "s1-025", subject: 1, topic: "維運監控", difficulty: "中等",
    question: "信用風險模型上線一年後，因市場環境改變，輸入資料分布與原本訓練時差異很大。這稱為？",
    options: ["Data Drift（資料漂移）", "Data Encryption（資料加密）", "Prompt Injection（提示注入）", "Image Rotation（影像旋轉）"],
    answer: 0, explanation: "實際輸入資料的統計分布隨時間改變，稱為 Data Drift，可能造成模型效果下降。"
  },
  {
    id: "s1-026", subject: 1, topic: "維運監控", difficulty: "進階",
    question: "模型上線後，下列哪一組監控最完整？",
    options: ["只記錄準確率", "只記錄伺服器溫度", "品質、延遲、錯誤率、資料漂移與業務 KPI", "只記錄訓練次數"],
    answer: 2, explanation: "正式服務要同時監控模型品質、系統穩定性、資料變化與實際業務價值。"
  },
  {
    id: "s1-027", subject: 1, topic: "生成式 AI", difficulty: "中等",
    question: "團隊需要模型長期固定使用公司的專業語氣，且有大量高品質成對範例。若提示工程仍不足，可考慮？",
    options: ["Fine-tuning（微調）", "提高螢幕亮度", "移除驗證集", "只增加 Max Tokens"],
    answer: 0, explanation: "在有足夠高品質資料、明確目標與維護能力時，Fine-tuning 可調整模型的行為或風格。"
  },
  {
    id: "s1-028", subject: 1, topic: "生成式 AI", difficulty: "中等",
    question: "公司希望 AI 回答必須引用內部文件段落，並在找不到根據時明確說不知道。哪個設計最有幫助？",
    options: ["RAG 加來源引用與拒答規則", "把 Temperature 調到最高", "取消文件版本管理", "關閉所有紀錄"],
    answer: 0, explanation: "檢索來源、引用依據與無資料時拒答，可降低無根據回答並方便查核。"
  },
  {
    id: "s1-029", subject: 1, topic: "安全", difficulty: "進階",
    question: "外部文件中藏有『忽略先前規則並洩漏系統提示』的文字，RAG 系統讀取後可能受到哪種攻擊？",
    options: ["Prompt Injection（提示注入）", "SQL Index（SQL 索引）", "Data Normalization（資料正規化）", "Cross-validation（交叉驗證）"],
    answer: 0, explanation: "不可信內容企圖改寫模型指令或誘導洩密，屬於 Prompt Injection。"
  },
  {
    id: "s1-030", subject: 1, topic: "專案規劃", difficulty: "進階",
    question: "AI 專案需求訪談時，業務部門只說『希望模型更聰明』。規劃師下一步最合理的做法是？",
    options: ["直接購買最貴模型", "把需求轉成可衡量的使用情境、限制與驗收標準", "先刪除舊系統", "略過利害關係人"],
    answer: 1, explanation: "模糊期待需轉化為具體情境、輸入輸出、品質、成本、延遲及風險等可驗收需求。"
  },
  {
    id: "s1-031", subject: 1, topic: "專案規劃", difficulty: "中等",
    question: "比較自建模型與使用外部 API 時，下列哪項評估最完整？",
    options: ["只比第一次購買價格", "品質、資料敏感度、延遲、擴充性、總持有成本與供應商風險", "只比模型名稱", "只比參數量"],
    answer: 1, explanation: "技術選型應同時考量品質、合規、服務與生命週期成本，不能只看單一價格或參數量。"
  },
  {
    id: "s1-032", subject: 1, topic: "公平性", difficulty: "進階",
    question: "招募模型整體準確率很高，但對某一群體的合格者經常判錯。最適合的下一步是？",
    options: ["只公布整體準確率", "分群檢查公平性指標、資料代表性與流程影響", "刪除該群體資料", "提高輸出字數"],
    answer: 1, explanation: "整體分數可能掩蓋群體差異，應分群評估資料與結果，並採取改善與人工覆核。"
  },

  {
    id: "s2-001", subject: 2, topic: "敘述統計", difficulty: "基礎",
    question: "某班成績為 60、65、70、75、100。若想降低極端高分對代表值的影響，較適合使用哪一個？",
    options: ["Mean（平均數）", "Median（中位數）", "Range（全距）", "Variance（變異數）"],
    answer: 1, explanation: "Median 對極端值較不敏感，這組資料的中位數為 70。"
  },
  {
    id: "s2-002", subject: 2, topic: "敘述統計", difficulty: "基礎",
    question: "某商品每日銷量的 Standard Deviation（標準差）很大，通常代表什麼？",
    options: ["銷量一定很高", "資料相對平均值的分散程度較大", "所有銷量都相同", "資料一定有錯"],
    answer: 1, explanation: "標準差描述資料的離散程度；數值大通常表示資料波動較大。"
  },
  {
    id: "s2-003", subject: 2, topic: "敘述統計", difficulty: "中等",
    question: "計算樣本變異數時，常使用 n-1 作為分母，主要原因是？",
    options: ["讓所有數字變成整數", "修正以樣本估計母體變異數的偏差", "避免計算平均數", "把資料放大 n 倍"],
    answer: 1, explanation: "樣本平均數已由樣本估計，少一個自由度；使用 n-1 可得到常用的不偏估計。"
  },
  {
    id: "s2-004", subject: 2, topic: "資料清理", difficulty: "基礎",
    question: "資料表中少數年齡欄位缺值。下列哪個做法最合理？",
    options: ["一律填 0", "先了解缺值原因與比例，再選擇刪除或合理補值", "把所有資料刪除", "直接假設為最大值"],
    answer: 1, explanation: "缺值處理沒有單一答案，應先了解缺失機制、比例與業務意義，再選擇策略。"
  },
  {
    id: "s2-005", subject: 2, topic: "資料清理", difficulty: "中等",
    question: "收入資料含少數極端高值，團隊想用較不受極端值影響的方式補缺值。可優先考慮？",
    options: ["Median Imputation（中位數補值）", "固定補最大值", "隨機刪除所有列", "將缺值改成文字"],
    answer: 0, explanation: "收入常呈偏態且有極端值，中位數通常比平均數更穩健，但仍須依資料情境確認。"
  },
  {
    id: "s2-006", subject: 2, topic: "資料清理", difficulty: "中等",
    question: "箱型圖中某筆資料超出上鬚範圍。下列敘述何者最正確？",
    options: ["一定是錯誤資料", "是潛在離群值，仍需結合業務與來源判斷", "一定要刪除", "代表平均數等於中位數"],
    answer: 1, explanation: "統計規則只能標記可疑值，真實的大額交易也可能是有效資料，不能未查證就刪除。"
  },
  {
    id: "s2-007", subject: 2, topic: "資料前處理", difficulty: "中等",
    question: "特徵『城市』包含台北、台中、高雄，且三者沒有大小順序。較適合如何轉換？",
    options: ["One-Hot Encoding（獨熱編碼）", "依城市人口隨意排序", "全部設為 0", "取平均數"],
    answer: 0, explanation: "名目類別沒有自然順序，One-Hot Encoding 可避免模型誤以為代碼大小代表順序。"
  },
  {
    id: "s2-008", subject: 2, topic: "資料前處理", difficulty: "中等",
    question: "Standardization（標準化）通常會把數值特徵轉成什麼形式？",
    options: ["平均數約為 0、標準差約為 1", "全部介於 0 與 1 且平均固定為 1", "全部變成文字", "只留下最大值"],
    answer: 0, explanation: "常見 Z-score 標準化會減去平均數再除以標準差。"
  },
  {
    id: "s2-009", subject: 2, topic: "資料儲存", difficulty: "基礎",
    question: "訂單資料結構固定，且需要交易一致性與複雜關聯查詢。通常優先考慮哪一種？",
    options: ["Relational Database（關聯式資料庫）", "純文字便利貼", "只有圖片檔", "不保存資料"],
    answer: 0, explanation: "結構化交易資料與關聯查詢通常適合關聯式資料庫。"
  },
  {
    id: "s2-010", subject: 2, topic: "資料儲存", difficulty: "中等",
    question: "企業想保存大量原始、半結構化與非結構化資料，未來再依需求分析。較接近哪個概念？",
    options: ["Data Lake（資料湖）", "Data Label（資料標籤）", "Cache Only（只用快取）", "紙本歸檔"],
    answer: 0, explanation: "Data Lake 常用來集中保存大量不同格式的原始或近原始資料。"
  },
  {
    id: "s2-011", subject: 2, topic: "資料處理", difficulty: "基礎",
    question: "ETL（擷取、轉換、載入）中的 Transform（轉換）可能包含哪項工作？",
    options: ["清理格式、合併欄位與轉換單位", "購買新的鍵盤", "寄送紙本報表", "關閉資料來源"],
    answer: 0, explanation: "Transform 負責清理、轉換、整合或衍生資料，使其符合目標系統需求。"
  },
  {
    id: "s2-012", subject: 2, topic: "資料處理", difficulty: "中等",
    question: "信用卡公司希望交易發生後數秒內偵測可疑行為。較適合哪種資料處理方式？",
    options: ["Stream Processing（串流處理）", "每年一次 Batch Processing（批次處理）", "人工月底輸入", "離線紙本保存"],
    answer: 0, explanation: "需要低延遲、持續處理事件時，適合 Stream Processing。"
  },
  {
    id: "s2-013", subject: 2, topic: "資料格式", difficulty: "基礎",
    question: "哪一種格式常用鍵值與巢狀結構交換 Web API 資料？",
    options: ["JSON", "PNG", "MP3", "EXE"],
    answer: 0, explanation: "JSON 是常見的文字資料交換格式，支援物件、陣列與巢狀結構。"
  },
  {
    id: "s2-014", subject: 2, topic: "Python 資料分析", difficulty: "中等",
    question: "在 pandas 中，若要依部門分組並計算各部門薪資平均值，最符合下列哪個概念？",
    options: ["groupby 後取 mean", "drop 所有資料", "只用 print", "把 DataFrame 轉成圖片"],
    answer: 0, explanation: "groupby 可依欄位分組，再使用 mean 等聚合函式計算群組統計量。"
  },
  {
    id: "s2-015", subject: 2, topic: "Python 資料分析", difficulty: "中等",
    question: "兩個 DataFrame 分別存顧客基本資料與訂單，兩者都有 customer_id。要依 customer_id 合併，常用？",
    options: ["merge", "describe", "plot", "isna"],
    answer: 0, explanation: "pandas 的 merge 可依共同鍵值進行類似資料庫 Join（聯結）的合併。"
  },
  {
    id: "s2-016", subject: 2, topic: "Python 資料分析", difficulty: "進階",
    question: "在 pandas 中，下列何者通常用『標籤』選取資料，而非單純依整數位置？",
    options: ["loc", "iloc", "shape", "head"],
    answer: 0, explanation: "loc 以列與欄的標籤選取；iloc 則以整數位置選取。"
  },
  {
    id: "s2-017", subject: 2, topic: "機率統計", difficulty: "中等",
    question: "檢定結果 p-value（p 值）小於預先設定的顯著水準 0.05。一般應如何解讀？",
    options: ["虛無假設為真機率只有 5%", "在虛無假設下，觀察到目前或更極端結果的機率很小", "研究結果保證正確", "效果一定很大"],
    answer: 1, explanation: "p 值不是假設為真的機率，也不代表效果大小；它衡量在虛無假設成立下資料的極端程度。"
  },
  {
    id: "s2-018", subject: 2, topic: "機率統計", difficulty: "中等",
    question: "Type I Error（第一類錯誤）是指什麼？",
    options: ["虛無假設其實為真，卻把它拒絕", "虛無假設為假，且正確拒絕", "計算機當機", "樣本數一定太大"],
    answer: 0, explanation: "第一類錯誤又稱偽陽性：實際沒有差異，卻判定有差異。"
  },
  {
    id: "s2-019", subject: 2, topic: "機率統計", difficulty: "進階",
    question: "其他條件相同時，若樣本數增加，估計平均數的 95% Confidence Interval（信賴區間）通常會如何變化？",
    options: ["變窄", "一定變寬", "完全不變", "上下限必定都等於平均數"],
    answer: 0, explanation: "樣本數增加通常降低標準誤，因此信賴區間會變窄、估計更精確。"
  },
  {
    id: "s2-020", subject: 2, topic: "相關分析", difficulty: "基礎",
    question: "資料顯示冰淇淋銷量與溺水事件呈正相關。下列結論何者最合理？",
    options: ["吃冰一定造成溺水", "相關不等於因果，可能有氣溫等共同因素", "兩者一定完全無關", "只要相關係數高就能證明因果"],
    answer: 1, explanation: "相關關係可能來自共同原因、反向因果或其他偏差，不能單靠相關係數斷定因果。"
  },
  {
    id: "s2-021", subject: 2, topic: "資料視覺化", difficulty: "基礎",
    question: "要比較五個產品類別本月的銷售額，最適合優先使用哪種圖？",
    options: ["Bar Chart（長條圖）", "Scatter Plot（散佈圖）", "地圖", "Word Cloud（文字雲）"],
    answer: 0, explanation: "長條圖適合比較不同類別之間的數值大小。"
  },
  {
    id: "s2-022", subject: 2, topic: "資料視覺化", difficulty: "基礎",
    question: "要呈現網站每日流量在一年內的變化趨勢，較適合哪種圖？",
    options: ["Line Chart（折線圖）", "Pie Chart（圓餅圖）", "單一數字卡", "樹狀圖"],
    answer: 0, explanation: "折線圖適合呈現按時間排序的連續趨勢與變化。"
  },
  {
    id: "s2-023", subject: 2, topic: "資料視覺化", difficulty: "中等",
    question: "分析師想觀察廣告費與銷售額兩個連續變數的關係，較適合使用？",
    options: ["Scatter Plot（散佈圖）", "Pie Chart（圓餅圖）", "單欄表格", "流程圖"],
    answer: 0, explanation: "散佈圖可呈現兩個數值變數的關係、分布與可能離群值。"
  },
  {
    id: "s2-024", subject: 2, topic: "資料品質", difficulty: "中等",
    question: "顧客主檔中，同一人因姓名空格與電話格式不同而出現多筆紀錄。最需要進行哪項工作？",
    options: ["Entity Resolution（實體解析）與去重複", "增加亂數", "全部轉成圖片", "只計算平均數"],
    answer: 0, explanation: "需先標準化欄位，再辨認多筆紀錄是否指向同一實體並合併。"
  },
  {
    id: "s2-025", subject: 2, topic: "資料品質", difficulty: "中等",
    question: "表單的生日欄位有人輸入 2099/01/01，但顧客實際已成年。這主要是哪一種資料品質問題？",
    options: ["Validity（有效性）", "Availability（可用性）", "Compression（壓縮）", "Encryption（加密）"],
    answer: 0, explanation: "資料不符合合理範圍或業務規則，屬於有效性問題。"
  },
  {
    id: "s2-026", subject: 2, topic: "抽樣", difficulty: "中等",
    question: "民調只在健身房出口訪問民眾，卻用結果推論全市人口的運動習慣。最可能產生哪種問題？",
    options: ["Sampling Bias（抽樣偏差）", "Data Encryption（資料加密）", "Schema Validation（綱要驗證）", "Indexing（索引）"],
    answer: 0, explanation: "樣本來源無法代表全市人口，推論可能因 Sampling Bias 而失真。"
  },
  {
    id: "s2-027", subject: 2, topic: "模型評估", difficulty: "中等",
    question: "詐欺交易只占 1%，模型把每筆都預測為正常仍有 99% Accuracy（準確率）。下列何者最合理？",
    options: ["模型一定很好", "應再檢查 Precision、Recall、F1-score 與混淆矩陣", "資料不平衡完全沒有影響", "只需增加圖表顏色"],
    answer: 1, explanation: "類別極度不平衡時，Accuracy 可能誤導，需搭配正類相關指標與混淆矩陣。"
  },
  {
    id: "s2-028", subject: 2, topic: "模型評估", difficulty: "中等",
    question: "需求預測有少數極端巨大誤差，企業希望這些錯誤受到較重懲罰。較適合重視？",
    options: ["RMSE（均方根誤差）", "Mode（眾數）", "Accuracy（準確率）", "資料列名稱"],
    answer: 0, explanation: "RMSE 會先平方誤差，因此對極端大誤差的懲罰比 MAE 更重。"
  },
  {
    id: "s2-029", subject: 2, topic: "模型評估", difficulty: "進階",
    question: "模型 A 的 MAE 較小，模型 B 的 RMSE 較小；企業特別不能接受少數巨大錯誤。較合理的作法是？",
    options: ["只因 A 的 MAE 小就一定選 A", "更重視 RMSE 與極端錯誤的商業成本後再決定", "隨機選擇", "改用分類準確率"],
    answer: 1, explanation: "選指標要對應商業損失；極端錯誤成本高時，RMSE 與誤差分布尤其重要。"
  },
  {
    id: "s2-030", subject: 2, topic: "資料隱私", difficulty: "中等",
    question: "公布醫療研究資料前，將姓名移除就一定無法識別個人嗎？",
    options: ["一定安全", "不一定，生日、地區等準識別碼組合仍可能重新識別", "只要改副檔名就安全", "資料越多越不可能識別"],
    answer: 1, explanation: "移除直接識別碼不代表完全匿名，準識別碼組合仍可能讓個人被重新識別。"
  },
  {
    id: "s2-031", subject: 2, topic: "SQL", difficulty: "中等",
    question: "SQL 查詢要計算每個部門的員工數量，通常會搭配哪一組語法？",
    options: ["GROUP BY 與 COUNT", "ORDER BY 與 DELETE", "UPDATE 與 DROP", "INSERT 與 RENAME"],
    answer: 0, explanation: "GROUP BY 依部門分組，COUNT 計算每組的資料筆數。"
  },
  {
    id: "s2-032", subject: 2, topic: "分析流程", difficulty: "進階",
    question: "團隊先看完整資料後才決定切分測試集，並反覆依測試分數調參。最主要的風險是？",
    options: ["Data Leakage（資料洩漏）與對測試集過度調整", "資料一定太少", "資料庫一定壞掉", "圖表顏色不一致"],
    answer: 0, explanation: "測試集應模擬未知資料；反覆用它做決策會洩漏資訊，導致成績過度樂觀。"
  }
];
