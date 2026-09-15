/* v1.8 官方歷屆公告試題完整題庫；答案依公告，解析由本站整理 */
(function () {
  "use strict";
  const questions = [
  {
    "id": "past-114-2-s1-01",
    "subject": 1,
    "topic": "自然語言處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 1,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商企業希望利用自然語言處理（NLP）技術，分析顧客在社群平台與商品評論中的文字內容，以即時掌握顧客對產品的滿意度變化。若採用情感分析（Sentiment Analysis）模型，其主要目的為何？",
    "options": [
      "預測顧客使用的語言風格與語氣；",
      "判斷文本中所表達的情感傾向；",
      "將顧客留言自動翻譯成企業內部指定語言；",
      "產生顧客評論的自動化摘要內容"
    ],
    "answer": 1,
    "explanation": "情感分析的核心是判斷文字呈現的正向、負向或中性傾向，不是翻譯或摘要。"
  },
  {
    "id": "past-114-2-s1-02",
    "subject": 1,
    "topic": "自然語言處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 2,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某跨國金融科技公司導入 Transformer 架構開發多語客服系統，以提升長篇金融文件的自動翻譯品質。下列何者為該模型能顯著改善翻譯準確度的主要原因？",
    "options": [
      "透過自注意力機制（Self-Attention Mechanism）捕捉長距離語境依賴關係；",
      "透過卷積運算（Convolution Operation）加速訓練過程；",
      "透過強化學習（Reinforcement Learning）自動調整語句生成策略；",
      "透過資料增強（Data Augmentation）平衡多語語料比例"
    ],
    "answer": 0,
    "explanation": "自注意力能直接比較序列中不同位置的重要性，因此較能掌握長篇文字的遠距語意關係。"
  },
  {
    "id": "past-114-2-s1-03",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 3,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業計畫應用 BERT（Bidirectional Encoder Representations from Transformers）模型分析大量顧客意見，以強化客服自動回覆系統。在 BERT 的預訓練過程中，「遮罩語言模型（Masked Language Model, MLM）」的主要訓練策略為何？",
    "options": [
      "依序遮罩句尾詞語，讓模型從左到右逐步生成完整句子；",
      "隨機遮罩部分詞語，並讓模型根據雙向上下文（Bidirectional Context）預測被遮罩的詞；",
      "透過對抗訓練（Adversarial Training）生成語意相似的擾動樣本以提升泛化性；",
      "以未遮罩的詞為條件，使用解碼器（Decoder）結構重建整句內容"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：隨機遮罩部分詞語，並讓模型根據雙向上下文（Bidirectional Context）預測被遮罩的詞；。"
  },
  {
    "id": "past-114-2-s1-04",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 4,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在詞向量（Word Embedding）訓練方法中，GloVe（Global Vectors for Word Representation）與 Word2Vec 的主要差異為何？",
    "options": [
      "Word2Vec 以詞頻權重訓練詞向量，而 GloVe 以隨機初始化向量進行學習；",
      "Word2Vec 以全局統計矩陣為基礎，而 GloVe 採用神經網路進行上下文預測；",
      "Word2Vec 為基於預測的模型，而 GloVe 為基於共現統計的模型；",
      "Word2Vec 僅能用於靜態文本語料，而 GloVe 可應用於即時語料更新"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：Word2Vec 為基於預測的模型，而 GloVe 為基於共現統計的模型；。"
  },
  {
    "id": "past-114-2-s1-05",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 5,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業以詞頻–逆文件頻率（Term Frequency–Inverse Document Frequency, TF-IDF）方法分析顧客意見內容，但發現模型在處理篇幅較長的回饋文本時，無法準確反映關鍵詞的重要性。下列何者為造成此現象的主要原因？",
    "options": [
      "長文本中的詞頻偏高，導致常見詞權重被過度放大；",
      "長文本中缺乏明確句子邊界，造成 TF-IDF 無法計算詞頻；",
      "TF-IDF 無法同時處理多份文件；",
      "長文本會改變 IDF（Inverse Document Frequency）的計算，使所有詞權重趨於相近"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：長文本中的詞頻偏高，導致常見詞權重被過度放大；。"
  },
  {
    "id": "past-114-2-s1-06",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 6,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業嘗試以 N-gram 語言模型（N-gram Language Model）建立客服自動回覆系統，但發現模型生成的句子雖在片段上合理，卻缺乏整體語意連貫性。此問題最可能源自 N-gram 模型的哪一項限制？",
    "options": [
      "N-gram 模型在訓練過程中需要龐大計算量，導致長句無法收斂；",
      "N-gram 模型僅根據固定長度的前序詞建立機率估計，難以捕捉長距離依賴關係（Long-range Dependencies）；",
      "N-gram 模型缺乏語意嵌入（Semantic Embedding）層，因此無法表徵詞語間的語意相似度；",
      "N-gram 模型假設詞與詞之間相互獨立，導致無法建構上下文語意關聯"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：N-gram 模型僅根據固定長度的前序詞建立機率估計，難以捕捉長距離依賴關係（Long-range Dependencies）；。"
  },
  {
    "id": "past-114-2-s1-07",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 7,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在企業導入的智慧監控系統中，模型以物件偵測（Object Detection）方式自動辨識影像中的人物與車輛。若評估指標採用平均精確率（Mean Average Precision, mAP），其中 IoU（Intersection over Union）閾值設定較高時，代表下列哪一項意義？",
    "options": [
      "預測邊界框與真實邊界框的重疊程度越高，模型偵測結果越精準；",
      "預測邊界框與真實邊界框的誤差越大，導致 mAP 數值上升；",
      "模型整體精確率（Precision）降低，但召回率（Recall）上升；",
      "預測邊界框的評估結果不受真實框大小影響"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：預測邊界框與真實邊界框的重疊程度越高，模型偵測結果越精準；。"
  },
  {
    "id": "past-114-2-s1-08",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 8,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "關於 Softmax 與 Max-Pooling，下列敘述何者正確？",
    "options": [
      "Softmax 與 Max-Pooling 都會將特徵張量壓縮為單一最大值；",
      "Max-Pooling 會對輸入進行機率分佈的轉換；",
      "Softmax 會保留所有輸入資訊，但以比例表示；Max-Pooling 只保留區域最大值；",
      "Softmax 主要用於特徵降維，而 Max-Pooling 用於分類輸出"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：Softmax 會保留所有輸入資訊，但以比例表示；Max-Pooling 只保留區域最大值；。"
  },
  {
    "id": "past-114-2-s1-09",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 9,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業在訓練生成式 AI 模型時，導入資料增強（Data Augmentation）技術以擴充訓練資料，但觀察到模型效能反而下降。下列哪一項最可能的原因與對應改善策略最為正確？",
    "options": [
      "增強樣本未經隨機初始化，導致模型梯度更新不穩定，應重新設計訓練啟動流程；",
      "增強後資料的特徵分佈與原始資料不一致，影響模型的泛化能力，應檢查並調整增強策略以維持語意一致性；",
      "增強樣本的比例過高，造成模型對特定資料產生偏好，應適度提高增強比例並調整學習率；",
      "增強後資料的標註可信度下降，導致訓練訊號偏差，應以半監督學習方式重新校正資料"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：增強後資料的特徵分佈與原始資料不一致，影響模型的泛化能力，應檢查並調整增強策略以維持語意一致性；。"
  },
  {
    "id": "past-114-2-s1-10",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 10,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "如果希望同時兼顧「精確率（Precision）」和「召回率（Recall）」，下列哪一個指標可以作為綜合評估的標準？",
    "options": [
      "準確率（Accuracy）；",
      "均方根誤差（RMSE）；",
      "均方誤差（MSE）；",
      "F1 分數（F1 Score）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：F1 分數（F1 Score）。"
  },
  {
    "id": "past-114-2-s1-11",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 11,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "企業資料分析團隊使用 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法進行顧客行為分群，並希望模型能自動區分主要群集與雜訊資料。在此演算法中，決定聚類結果的兩個主要超參數為下列何者？",
    "options": [
      "特徵數與學習率；",
      "K 值與距離閾值；",
      "鄰域半徑（Epsilon ε）與最小點數（MinPts）；",
      "交叉熵（Cross Entropy）與權重初始化"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：鄰域半徑（Epsilon ε）與最小點數（MinPts）；。"
  },
  {
    "id": "past-114-2-s1-12",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 12,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司建立房價預測模型，使用多項特徵（如建坪、房齡、樓層、總價等）進行線性迴歸分析（Linear Regression Analysis）。資料分析師發現多個特徵之間存在高度相關性，導致模型係數不穩定、預測誤差上升。為解決此問題，下列哪一種方法最適合？",
    "options": [
      "繼續保留所有特徵，不進行任何處理；",
      "使用主成分分析（PCA）將相關特徵轉換為彼此獨立的主成分；",
      "新增更多原始變數以提升模型表現；",
      "改用分類模型進行預測"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：使用主成分分析（PCA）將相關特徵轉換為彼此獨立的主成分；。"
  },
  {
    "id": "past-114-2-s1-13",
    "subject": 1,
    "topic": "系統部署",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 13,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "下列何者為 Kubernetes 在 AI 模型部署與運行中的核心功能？",
    "options": [
      "自動化管理模型的訓練流程與參數調校；",
      "管理與協調模型服務的部署、擴展與運行環境；",
      "提供 AI 模型的資料儲存與版本控管功能；",
      "負責深度學習推論的 GPU 加速運算"
    ],
    "answer": 1,
    "explanation": "Kubernetes 的重點是容器化工作負載的部署、調度、擴展與維運，不是模型訓練或版本管理工具本身。"
  },
  {
    "id": "past-114-2-s1-14",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 14,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在調整模型超參數（Hyperparameters）時，若希望避免因過度調整參數而導致過擬合，下列哪一種做法最有效提升模型的泛化能力？",
    "options": [
      "採用交叉驗證（Cross-Validation）於多組參數組合間反覆評估，選擇在驗證資料上表現最穩定的設定；",
      "使用早期停止機制（Early Stopping）監控訓練誤差並在收斂前停止訓練，以防模型學習過度；",
      "對輸入特徵進行標準化以減少特徵值差異帶來的過擬合風險；",
      "提高模型複雜度並使用更多超參數搜尋範圍，以確保模型能充分學習資料特徵"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：採用交叉驗證（Cross-Validation）於多組參數組合間反覆評估，選擇在驗證資料上表現最穩定的設定；。"
  },
  {
    "id": "past-114-2-s1-15",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 15,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在企業導入的 MLOps（Machine Learning Operations）流程中，Model Registry 最常用於哪一個階段？",
    "options": [
      "用於設定運算資源與執行環境以確保訓練穩定；",
      "用於建立可重複使用的資料與特徵版本；",
      "用於集中管理模型版本、訓練紀錄與部署狀態；",
      "用於追蹤模型上線後的表現與漂移情況"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：用於集中管理模型版本、訓練紀錄與部署狀態；。"
  },
  {
    "id": "past-114-2-s1-16",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 16,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "下列哪一種情境中最適合使用「序列到序列（Seq2Seq）」模型？",
    "options": [
      "預測銷售趨勢曲線，輸出未來數值序列；",
      "辨識文本中出現的人名、地名與組織名稱等實體資訊；",
      "對輸入文本中的關鍵字進行頻率統計與可視化；",
      "將輸入文字轉換成語意等價的另一段文字，如自動翻譯或摘要生成"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：將輸入文字轉換成語意等價的另一段文字，如自動翻譯或摘要生成。"
  },
  {
    "id": "past-114-2-s1-17",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 17,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在自然語言處理中，檢索增強生成（Retrieval-Augmented Generation, RAG）是一種結合語言模型與向量搜尋的技術，可有效減少模型知識過時與產生幻覺的問題。若要建立一套高效能的 RAG 系統，下列何者為在「檢索階段」最關鍵的挑戰？",
    "options": [
      "確保檢索到的文件能被完整納入語言模型的上下文視窗（Context Window）中進行生成；",
      "選擇使用 Faiss 或 ScaNN 等近似最近鄰搜尋函式庫；",
      "降低嵌入模型（Embedding Model）在高維空間中的計算成本與記憶體占用；",
      "避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯的情況"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯的情況。"
  },
  {
    "id": "past-114-2-s1-18",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 18,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "當 Transformer 模型發生「注意力分布過於平均（Attention Collapse）」的情形時，導致模型無法有效聚焦於關鍵資訊，下列哪一項策略可有效改善此問題？",
    "options": [
      "提高 Query-Key 點積（Dot Product）的縮放常數；",
      "在 Softmax 前加入高斯雜訊（Gaussian Noise）；",
      "使用 ReLU 函數取代 Softmax；",
      "對注意力權重施加稀疏化約束（Sparsity Constraint）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：對注意力權重施加稀疏化約束（Sparsity Constraint）。"
  },
  {
    "id": "past-114-2-s1-19",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 19,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某研究團隊正在訓練一個針對低資源語言（如少數民族語言）的語言模型，但該語言僅有約 1 萬筆語料可用。在訓練過程中出現明顯的過擬合現象，若希望在不新增真實語料的前提下提升模型的泛化能力，採用下列哪一種方法最為適合？",
    "options": [
      "將 Transformer 的隱藏層維度擴增至 1024，以提升表徵能力；",
      "採用反向翻譯（Back-Translation）技術，以生成額外目標語句的偽平行語料（Pseudo‑Parallel Corpus）；",
      "對詞嵌入矩陣（Embedding Matrix），施加 L1 正則化以壓縮模型參數；",
      "將多語言 BERT（mBERT）中所有 Transformer 層全部凍結以保留預訓練知識"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用反向翻譯（Back-Translation）技術，以生成額外目標語句的偽平行語料（Pseudo‑Parallel Corpus）；。"
  },
  {
    "id": "past-114-2-s1-20",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 20,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在使用生成對抗網路（GAN）進行人臉影像生成時，若出現「模式崩潰」（Mode Collapse）現象，下列哪一種方法最常被用來有效解決此問題？",
    "options": [
      "在鑑別器中加入梯度懲罰（Gradient Penalty）以穩定訓練過程；",
      "採用 Wasserstein 距離（WGAN 損失）替代原始的 GAN 損失函數；",
      "對生成器輸入的潛在向量加入隨機擾動；",
      "使用多尺度鑑別器架構以提高對多樣性的判別能力"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用 Wasserstein 距離（WGAN 損失）替代原始的 GAN 損失函數；。"
  },
  {
    "id": "past-114-2-s1-21",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 21,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在多模態 AI 模型訓練或推論過程中，遇到某一模態資料缺失（例如僅有影像資料但缺少文本說明），下列哪一種策略最有效維持模型效能？",
    "options": [
      "以零向量或固定向量填充缺失模態輸入；",
      "訓練具備模態缺失感知能力的模型，使其適應缺失狀況；",
      "利用生成模型（如 GAN 或自迴歸模型）預測並補全缺失模態資料；",
      "直接捨棄缺少模態的樣本，避免干擾訓練或推論"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：訓練具備模態缺失感知能力的模型，使其適應缺失狀況；。"
  },
  {
    "id": "past-114-2-s1-22",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 22,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台開發的顧客流失預測模型在上線數月後，預測準確率明顯下降。專案團隊懷疑顧客行為模式改變，導致模型輸入特徵的分佈與原始訓練資料不同，出現典型的資料漂移（Data Drift）問題。為了偵測並確認資料分佈是否發生變化，下列哪一種作法最合適？",
    "options": [
      "定期重新訓練模型以應對外部變化；",
      "提升模型複雜度以捕捉更多資料變異性；",
      "增加測試資料量以提高評估準確度；",
      "計算輸入特徵分佈間的 KL 散度（KL Divergence）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：計算輸入特徵分佈間的 KL 散度（KL Divergence）。"
  },
  {
    "id": "past-114-2-s1-23",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 23,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某大型醫院即將部署一套輔助診斷的 AI 系統，為降低對臨床流程的衝擊，同時確保風險可控與回饋可收斂，應採取何種『漸進式部署』（Phased Rollout）策略最為合適？",
    "options": [
      "從單一專科（如放射科）或特定病房開始啟用，逐步擴展至全院；",
      "先部署於病例量較高的急診單位，加速收集高頻使用回饋；",
      "僅在夜班或離峰時段啟用，避免影響主要臨床工作負載；",
      "在使用者界面啟用提示模式，讓全院同步體驗但不影響診斷流程"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：從單一專科（如放射科）或特定病房開始啟用，逐步擴展至全院；。"
  },
  {
    "id": "past-114-2-s1-24",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 24,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融機構的 AI 風控系統遭受對抗性攻擊，駭客透過對輸入特徵進行微小但惡意的擾動，成功欺騙了模型。為了從根本上解決模型自身對這類攻擊的脆弱性，下列何者並非針對此種攻擊型態的技術手段？",
    "options": [
      "強化資料前處理，用以過濾掉格式不符或數值極端異常的輸入；",
      "在模型訓練階段導入對抗樣本訓練，以提升模型對惡意特徵擾動的辨識與防禦能力；",
      "於推論後階段使用規則引擎，以確保模型的預測結果不違反既有的業務硬性規定；",
      "在模型部署環境中強化網路防火牆，以阻擋來自未授權來源的網路連線"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：在模型部署環境中強化網路防火牆，以阻擋來自未授權來源的網路連線。"
  },
  {
    "id": "past-114-2-s1-25",
    "subject": 1,
    "topic": "AI 風險管理",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 25,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業部署生成式 AI 系統協助行銷與內容產出，但近期遭質疑部分生成內容可能涉及著作權侵權。為降低企業在法律層面的潛在責任與風險，下列哪一項策略最能有效預防侵權問題產生？",
    "options": [
      "對生成內容進行語意相似度比對，自動標註可能涉及既有著作的輸出結果，以降低侵權風險；",
      "建立訓練資料篩選與授權驗證機制，排除未授權或高風險資料來源；",
      "在訓練與微調過程中採用差分隱私技術，避免模型記憶特定受著作權保護的樣本；",
      "在模型輸出端嵌入浮水印（Watermarking）或數位指紋（Digital Fingerprint）技術，以確保生成內容可追溯"
    ],
    "answer": 1,
    "explanation": "從來源端建立授權與資料治理機制，能直接降低使用未授權訓練資料的風險；其餘措施較偏偵測、隱私或追溯。"
  },
  {
    "id": "past-114-2-s1-26",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 26,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在房價預測任務中，若發現特徵如「房間數」與「坪數」存在高度多重共線性（Multicollinearity），為降低共線性對模型參數估計的負面影響，應優先選擇下列哪種模型？",
    "options": [
      "不受多重共線性影響的決策樹模型；",
      "傳統線性迴歸模型，不含正則化項；",
      "支持向量機搭配線性核函數；",
      "含 L1 正則化的 LASSO 迴歸模型"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：含 L1 正則化的 LASSO 迴歸模型。"
  },
  {
    "id": "past-114-2-s1-27",
    "subject": 1,
    "topic": "AI 技術應用與規劃",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 27,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業需分析半結構化的系統日誌（JSON 格式），以提取關鍵的時序特徵供故障預測模型使用。考量日誌結構複雜且包含巢狀欄位（Nested Fields），下列哪一種策略最有效且實務可行？",
    "options": [
      "先將 JSON 資料扁平化轉成 CSV，再對欄位計算統計量（如均值、次數）作為特徵；",
      "使用遞歸神經網路（RNN）直接輸入原始 JSON 字串進行時序特徵抽取；",
      "設計遞迴函式展開巢狀欄位，並基於時間窗口（Time Window）進行聚合與特徵萃取；",
      "只保留時間戳記欄位，忽略其他巢狀內容以簡化特徵工程"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：設計遞迴函式展開巢狀欄位，並基於時間窗口（Time Window）進行聚合與特徵萃取；。"
  },
  {
    "id": "past-114-2-s1-28",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 28,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在一個同時包含連續型特徵與類別型特徵的資料集中，若希望透過適當的特徵工程流程來提升模型整體表現，下列哪一種作法最為合適？",
    "options": [
      "將類別型特徵使用標籤編碼（Label Encoding）轉換後，與連續特徵直接合併進行模型訓練；",
      "將連續特徵進行離散化（Discretization）或分桶（Binning）轉為類別型特徵，統一以類別方式處理；",
      "對連續特徵做標準化（Standardization），類別特徵採用目標編碼（Target Encoding），並生成交互特徵提升模型表現；",
      "只保留連續特徵，忽略類別型變量以簡化模型"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：對連續特徵做標準化（Standardization），類別特徵採用目標編碼（Target Encoding），並生成交互特徵提升模型表現；。"
  },
  {
    "id": "past-114-2-s1-29",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 29,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 開發團隊為提升模型開發效率及品質控制，計畫實施持續整合（Continuous Integration, CI）流程。下列哪一項做法最符合 CI的核心實踐，且能有效減少整合風險？",
    "options": [
      "在主分支（Main Branch）每日固定時間手動合併並執行完整測試流程；",
      "每次程式碼提交（Commit）後自動觸發建置、單元測試及靜態程式碼分析；",
      "於模型訓練完成後，定期安排開發團隊回顧並合併程式碼；",
      "透過自動化部署腳本，將模型在特定時間點批次釋出到測試環境"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：每次程式碼提交（Commit）後自動觸發建置、單元測試及靜態程式碼分析；。"
  },
  {
    "id": "past-114-2-s1-30",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 30,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某銀行計劃將 AI 詐欺偵測模組整合至核心交易系統，主管機關要求全流程必須符合金融監管對「不可否認性（Non-repudiation）」的資訊安全規範，以確保日後能進行法務追蹤與稽核。下列哪一項措施最能確保此要求的落實？",
    "options": [
      "為每筆 AI 模型推論記錄其輸入與輸出結果的加密雜湊值（Hash），並簽署數位簽章以確保不可竄改性；",
      "優化模型效能以降低平均推論延遲至 100ms 以下，提升使用者體驗；",
      "增加主機備援數量，以確保系統在故障時持續可用；",
      "將模型推論請求導入負載平衡器，避免單點壅塞導致服務延遲"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：為每筆 AI 模型推論記錄其輸入與輸出結果的加密雜湊值（Hash），並簽署數位簽章以確保不可竄改性；。"
  },
  {
    "id": "past-114-2-s1-31",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 31,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 服務系統每次推論請求需約 1 秒完成，且必須支撐高達 10,000次請求每秒（RPS）的流量。為確保系統具備高可用性且能穩定應付流量峰值，下列哪一種架構方案最為合適？",
    "options": [
      "依賴單台超高效能伺服器進行垂直擴展，提升硬體規格；",
      "採用容器化部署並水平擴展服務實例，結合自動彈性伸縮機制（Auto Scaling）；",
      "限制最大併發連線數，以避免系統過載；",
      "增加批次處理大小，一次同時處理上千筆請求"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用容器化部署並水平擴展服務實例，結合自動彈性伸縮機制（Auto Scaling）；。"
  },
  {
    "id": "past-114-2-s1-32",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 32,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業已將 AI 模型部署於生產環境，為確保系統持續穩定運作，並能提前偵測模型效能可能衰退，技術團隊希望透過監控指標進行預警。下列哪一項監控指標最具預測效力，能提早發現模型效能下滑風險？",
    "options": [
      "系統 CPU 與記憶體使用率波動幅度；",
      "模型推論結果的置信度（Confidence）分佈變化趨勢；",
      "API 平均回應時間與延遲百分位數變化；",
      "輸入特徵與訓練資料分布差異的 PSI（Population Stability Index）指數"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：輸入特徵與訓練資料分布差異的 PSI（Population Stability Index）指數。"
  },
  {
    "id": "past-114-2-s1-33",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 33,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "企業團隊在使用 Word2Vec 模型訓練客服文本語料時，若訓練資料量龐大且希望模型能更有效捕捉罕見詞的語意關聯，下列哪一種訓練策略最為適合？",
    "options": [
      "採用 Skip-gram 模型，但以隨機初始化權重加快高頻詞的訓練收斂；",
      "採用 CBOW 模型（Continuous Bag of Words Model）並結合 TF-IDF 權重以強化低頻詞表示；",
      "採用 Skip-gram 模型，利用中心詞預測周圍詞語，能更有效學習低頻詞關係；",
      "採用 CBOW 模型（Continuous Bag of Words Model），利用周圍詞預測中心詞，能提升罕見詞的語意穩定度"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：採用 Skip-gram 模型，利用中心詞預測周圍詞語，能更有效學習低頻詞關係；。"
  },
  {
    "id": "past-114-2-s1-34",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 34,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在自駕車影像辨識系統中，開發團隊希望模型能同時辨識每個像素所屬的物件類別（例如道路、建築、行人），又能區分出同類物件的不同個體（例如多位行人）。此時最適合採用下列哪一項電腦視覺技術？",
    "options": [
      "語義分割（Semantic Segmentation）；",
      "物件偵測（Object Detection）；",
      "實例分割（Instance Segmentation）；",
      "全景分割（Panoptic Segmentation）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：全景分割（Panoptic Segmentation）。"
  },
  {
    "id": "past-114-2-s1-35",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 35,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某媒體公司計畫導入 CLIP（Contrastive Language–Image Pre-training）模型，以協助大量影像自動標註與搜尋，並希望在無需新增標訓資料的情況下，僅透過文字提示（Text Prompt）即可識別影像內容。請問此應用情境中，CLIP 能夠達成的關鍵技術特性為何？",
    "options": [
      "透過圖文對比式學習（Contrastive Learning）將影像與文字映射至共同嵌入空間（Shared Embedding Space），可直接以語意相似度進行零樣本分類；",
      "透過影像增強與特徵擴散降低標訓資料需求；",
      "以監督式學習結合多層感知器（Multilayer Perceptron, MLP）進行影像特徵分類；",
      "以自迴歸生成模型（Autoregressive Model）逐步生成文字標籤描述影像內容"
    ],
    "answer": 0,
    "explanation": "CLIP 以大量圖文配對進行對比學習，讓文字提示和影像能在同一向量空間比較，因此支援零樣本分類。"
  },
  {
    "id": "past-114-2-s1-36",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 36,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料科學團隊在開發預測模型時，針對多種模型設定（如學習率、樹深度、正則化係數等）進行系統化測試，希望找出在驗證資料上表現最穩定的組合。此過程最可能採用下列哪一種方法？",
    "options": [
      "使用交叉驗證（Cross Validation）反覆評估模型以降低過擬合風險；",
      "透過網格搜尋（Grid Search）在多組超參數設定中進行系統化搜尋與評估；",
      "以隨機搜尋（Random Search）快速探索部分參數空間以提升搜尋效率；",
      "採用貝葉斯優化（Bayesian Optimization）根據歷次結果動態調整搜尋方向"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：透過網格搜尋（Grid Search）在多組超參數設定中進行系統化搜尋與評估；。"
  },
  {
    "id": "past-114-2-s1-37",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 37,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某公司正在訓練一個大型語音合成模型，開發團隊使用多台 GPU 進行訓練，但經常出現 GPU 記憶體不足問題。由於模型架構已固定且無法更換硬體，團隊希望在維持模型效能與收斂品質的前提下，下列哪一種方法最有效降低單張 GPU 的記憶體壓力？",
    "options": [
      "減少訓練資料量以降低記憶體使用；",
      "採用較小的批次大小（Batch Size）並搭配資料分片（Data Sharding）分散訓練負載；",
      "增加學習率（Learning Rate）以加快收斂速度；",
      "改用測試資料集（Test Set）進行部分訓練以節省空間"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用較小的批次大小（Batch Size）並搭配資料分片（Data Sharding）分散訓練負載；。"
  },
  {
    "id": "past-114-2-s1-38",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 38,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某影像設計團隊在使用 Stable Diffusion 生成 4K 級產品圖時，發現影像邊緣與細節存在顆粒化與模糊現象。若僅能在生成階段進行調整，希望提升畫面清晰度與紋理層次，同時避免過度平滑，下列哪一項作法最適合？",
    "options": [
      "降低取樣步數，以縮短生成時間；",
      "增加取樣步數並選擇高品質取樣器，以強化細節還原度；",
      "提高 CFG（Classifier-Free Guidance）值，使生成結果更具創意與多樣性；",
      "改用低解析度輸入以降低計算成本"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：增加取樣步數並選擇高品質取樣器，以強化細節還原度；。"
  },
  {
    "id": "past-114-2-s1-39",
    "subject": 1,
    "topic": "AI 技術應用與規劃",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 39,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業的資料科學團隊利用 ARIMA 模型（AutoRegressive Integrated Moving Average Model）預測每週產品銷售量。模型建立完成後，分析人員發現預測誤差隨時間呈現週期性波動，且自相關函數（ACF）顯示殘差在多個時滯（Lag）上仍顯著不為零。根據上述現象，最合理的模型診斷結論為何？",
    "options": [
      "模型殘差符合白噪音（White Noise）假設，預測表現穩定；",
      "模型殘差雖有輕微異常，但可視為隨機誤差忽略不計；",
      "模型存在配適不足（Underfitting）問題，需重新調整 p 或 q參數以捕捉時間依賴性；",
      "殘差特性不影響預測結果，無須進一步修正"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：模型存在配適不足（Underfitting）問題，需重新調整 p 或 q參數以捕捉時間依賴性；。"
  },
  {
    "id": "past-114-2-s1-40",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 40,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "下列哪一項最正確地描述了 VAE（Variational Autoencoder）、GAN（Generative Adversarial Network）與擴散模型（Diffusion Model）在多模態潛在空間對齊（Latent Alignment）與生成策略上的根本差異？",
    "options": [
      "VAE 透過顯式潛在變數建模實現跨模態對齊，適合捕捉整體語意結構但生成解析度有限；GAN 透過對抗損失（Adversarial Loss）在不同模態間學習分佈映射，生成品質高但穩定性差；擴散模型則以條件化噪聲反推（Conditional Denoising）方式實現高保真跨模態生成，兼具穩定性與多樣性；",
      "VAE 與 Diffusion Ｍodel 均屬隱式生成架構，主要依賴對抗式訓練實現跨模態對齊；GAN 則以顯式後驗估計方式提升樣本一致性；",
      "VAE 與 GAN 均使用馬爾可夫鏈（Markov Chain）進行跨模態轉換；Diffusion Model 則透過 KL 散度最小化學習語意對應。；",
      "三者在多模態應用中皆依賴同一潛在表徵空間（Shared Latent Space），僅在解碼器結構不同而已"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：VAE 透過顯式潛在變數建模實現跨模態對齊，適合捕捉整體語意結構但生成解析度有限；GAN 透過對抗損失（Adversarial Loss）在不同模態間學習分佈映射，生成品質高但穩定性差；擴散模型則以條件化噪聲反推（Conditional Denoising）方式實現高保真跨模態生成，兼具穩定性與多樣性；。"
  },
  {
    "id": "past-114-2-s1-41",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 41,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "在進行超參數調校（Hyperparameter Tuning）時，若直接在 K-Fold交叉驗證（Cross-Validation）的資料上同時調整模型參數並評估效能，最可能導致下列哪一種問題？",
    "options": [
      "模型的交叉驗證結果出現過度樂觀偏差（Over-optimistic Bias），因測試摺資料間接參與參數選擇，造成資料洩漏（Data Leakage）；",
      "模型會在每一摺（Fold）內反覆調整參數，導致訓練不穩與過度正則化；",
      "因交叉驗證資料被重複使用，造成效能方差增大，無法獲得穩定估計；",
      "K-Fold 交叉驗證的假設與超參數搜尋相衝突，導致驗證過程失效"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：模型的交叉驗證結果出現過度樂觀偏差（Over-optimistic Bias），因測試摺資料間接參與參數選擇，造成資料洩漏（Data Leakage）；。"
  },
  {
    "id": "past-114-2-s1-42",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 42,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "若部署一個深度學習模型至金融風控系統，該模型採用鑑別式架構（如 Transformer Classifier）。然而上線後，模型對新樣本的分類錯誤率顯著上升，經檢查發現，輸入資料分佈已與原訓練集明顯不同。針對此情形，下列哪一種應對策略最為適合？",
    "options": [
      "改用生成對抗網路（GAN）生成新樣本並混入訓練集；",
      "改用邏輯迴歸模型（Logistic Regression）以提升穩定性；",
      "增加模型容量（Model Capacity），以學習更多樣本差異；",
      "使用變分自編碼器（VAE）監控潛在空間分佈，偵測輸入資料偏移"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：使用變分自編碼器（VAE）監控潛在空間分佈，偵測輸入資料偏移。"
  },
  {
    "id": "past-114-2-s1-43",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 43,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司欲導入 AI 模型協助客服郵件自動分類（投訴、詢問、表揚）。團隊同時考慮兩種模型設計：方案 A（生成式路徑）：採用 VAE 建構潛在語意空間，再結合下游分類器進行標籤預測；方案 B（鑑別式路徑）：採用 BERT Classifier 直接根據輸入文本進行監督式分類。現有標註資料約 2,000 筆，資料分佈均勻但擴充成本高。若團隊希望公平比較兩種模型的資料利用效率與泛化能力，下列哪一種實驗設計最能突顯兩者的本質差異？",
    "options": [
      "在完整資料集上分別訓練兩者，並比較其分類準確率（Accuracy）與推論時間；",
      "在低資源情境（Low-resource Setting）下，逐步減少標註比例（100%、50%、10%），比較其 F1-score；",
      "使用 GAN 自動生成文本樣本補足資料，觀察兩模型在資料增強後的精確率（Precision）差異；",
      "在相同訓練資料上固定輸入維度，僅調整模型參數量，比較其對過擬合的敏感度"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：在低資源情境（Low-resource Setting）下，逐步減少標註比例（100%、50%、10%），比較其 F1-score；。"
  },
  {
    "id": "past-114-2-s1-44",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 44,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某電信公司希望建立一個模型來預測顧客是否即將流失，並進一步模擬不同促銷或服務策略下顧客的行為變化，以生成多樣化的虛擬樣本資料進行 A/B 測試與行銷策略評估。若要同時兼顧預測與資料生成的需求，最適合採用下列哪一種方法？",
    "options": [
      "使用傳統隨機森林（Random Forest）；",
      "使用邏輯迴歸（Logistic Regression）模型；",
      "使用變分自編碼器（Variational Autoencoder, VAE）或生成對抗網路（Generative Adversarial Network, GAN）；",
      "使用強化學習代理（Reinforcement Learning Agent）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：使用變分自編碼器（Variational Autoencoder, VAE）或生成對抗網路（Generative Adversarial Network, GAN）；。"
  },
  {
    "id": "past-114-2-s1-45",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 45,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "進行影像分類任務時，研究團隊嘗試利用主成分分析（Principal Component Analysis, PCA）將輸入特徵從 1024 維降至 100 維，並將降維後的資料輸入支持向量機（Support Vector Machine, SVM）模型進行訓練。關於此作法，下列哪一項描述最為合理？",
    "options": [
      "PCA 保留的主成分必然能提升 SVM 的分類準確率；",
      "使用原始高維資料通常更能保留資訊，因此 PCA 沒有實際意義；",
      "PCA 可讓 SVM 自動適用於非線性（Nonlinear）資料集；",
      "降維後可降低訓練時間並減少過擬合（Overfitting）風險"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：降維後可降低訓練時間並減少過擬合（Overfitting）風險。"
  },
  {
    "id": "past-114-2-s1-46",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 46,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業的 AI 模型已部署於線上服務環境中，用於即時預測顧客流失機率。近期團隊注意到模型預測準確率逐漸下降，但系統運作正常且未出現錯誤訊息。經分析發現，近期輸入資料的分布與模型訓練資料相比出現顯著偏移。若要在 MLOps 流程中主動偵測並預警此類問題，最應採用下列哪項措施？",
    "options": [
      "建立即時的資料漂移（Data Drift）與概念漂移（Concept Drift）監測機制；",
      "將模型轉換為量化版本以降低延遲；",
      "增加模型超參數調整次數以強化適應性；",
      "使用固定隨機種子（Random Seed）確保訓練穩定"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：建立即時的資料漂移（Data Drift）與概念漂移（Concept Drift）監測機制；。"
  },
  {
    "id": "past-114-2-s1-47",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 47,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司導入多任務學習架構，讓單一 Transformer 模型同時執行 OCR（Optical Character Recognition）後的文檔分類以及命名實體辨識（Named Entity Recognition, NER）任務，以協助自動歸檔與抽取關鍵金融資訊。在部署初期，團隊發現當模型的 NER 準確率（Accuracy）提升時，文檔分類準確率反而下降。若模型架構正確且資料品質良好，下列哪一項最可能是造成此現象的原因？",
    "options": [
      "模型架構無法同時支援文字分類與序列標註任務（Sequence Labeling）；",
      "文檔分類任務不需要語意化表徵（Contextualized Representation）；",
      "損失函數（Loss Function）未進行權重平衡，導致任務間競爭；",
      "所使用的 BERT 模型無法支援多任務輸出頭（Multi-Head Outputs）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：損失函數（Loss Function）未進行權重平衡，導致任務間競爭；。"
  },
  {
    "id": "past-114-2-s1-48",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 48,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某數據工程師使用 DBSCAN 演算法對一份數百萬筆的高維顧客資料進行聚類分析，但發現程式執行速度極慢，甚至出現記憶體不足的情況。若要在不改變演算法核心邏輯的前提下，最有效提升其運算效率的作法為何？",
    "options": [
      "改用以平均連結（Average Linkage）為基礎的階層式群集法（Hierarchical Clustering）；",
      "採用高效率的距離索引結構（Distance Index Structure），例如KD-Tree 或 Ball Tree；",
      "將 ε（Epsilon）參數調得極小，以減少鄰近點的數量；",
      "在資料前處理時增加標準化後的特徵維度數"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用高效率的距離索引結構（Distance Index Structure），例如KD-Tree 或 Ball Tree；。"
  },
  {
    "id": "past-114-2-s1-49",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 49,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台導入 AI 情感分析模型，用以自動偵測顧客評論中的負面情緒並觸發客服機制。然而，上線後發現模型在面對不同語言或族群書寫風格的評論時表現不一致，例如部分語氣強烈的正面評論被誤判為負面，而禮貌但含批評意圖的評論卻被判為中性。若從技術與資料治理的角度分析，下列哪一項描述不正確？",
    "options": [
      "模型未啟用詞嵌入正規化（Embedding Normalization）可能造成語意距離不穩定，導致預測誤差；",
      "訓練語料若偏向特定文化或語氣特徵，可能使模型產生內隱偏誤（Implicit Bias）；",
      "模型若訓練資料來源不平衡，容易導致對不同語言或族群風格的情緒判斷不準確；",
      "Transformer 架構能捕捉上下文語意，但若訓練資料偏差仍存在，模型仍可能學習到偏誤判斷"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：模型未啟用詞嵌入正規化（Embedding Normalization）可能造成語意距離不穩定，導致預測誤差；。"
  },
  {
    "id": "past-114-2-s1-50",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 50,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%B8%80%E7%A7%91%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000616.pdf",
    "requiresOfficialPdf": false,
    "question": "某設計師使用公司內部建置的生成式 AI 工具製作行銷素材，並輸入提示語（Prompt）：「請生成一張模特兒手持品牌飲料、背景為海邊夕陽的照片」。系統能正確生成主要主題與場景，但輸出的圖像中，品牌標誌顏色常有誤差，或人物手部姿勢顯得不自然。若從多模態生成模型的技術機制分析，此現象最可能是下列哪一項原因所造成？",
    "options": [
      "擴散式生成模型的去雜訊過程出現隨機梯度漂移，導致影像像素錯誤；",
      "提示語過長造成 Transformer 的位置編碼超出上下文限制，導致生成混亂；",
      "CLIP 模型中的文字編碼器與影像編碼器在語意嵌入空間未充分對齊，導致跨模態理解偏差；",
      "模型未採用對比學習（Contrastive Learning）損失函數，無法建立多模態語意關聯"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：CLIP 模型中的文字編碼器與影像編碼器在語意嵌入空間未充分對齊，導致跨模態理解偏差；。"
  },
  {
    "id": "past-114-2-s2-01",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "基礎",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 1,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "若某數據點的 Z 分數（Z-Score）= 2，請問代表下列哪一種意涵？",
    "options": [
      "代表該數據點之原始數值為 2；",
      "該數據點比平均值低 2 個標準差；",
      "代表數據為異常值；",
      "該數據點比平均值高 2 個標準差"
    ],
    "answer": 3,
    "explanation": "Z=2 代表觀測值位於平均數上方 2 個標準差；是否為異常值仍取決於採用的判定門檻。"
  },
  {
    "id": "past-114-2-s2-02",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "基礎",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 2,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "使用 Python 的 pandas 套件處理各商品銷售數據（變數為 df）時，若需計算「總銷售額」欄位的敘述性統計量（如平均值、標準差等），應使用下列哪一種語法？",
    "options": [
      "df['總銷售額'].sum()；",
      "df['總銷售額'].describe()；",
      "df['總銷售額'].sort_values()；",
      "df['總銷售額'].stats()"
    ],
    "answer": 1,
    "explanation": "describe() 會一次回傳筆數、平均數、標準差、最小值、四分位數與最大值等摘要。"
  },
  {
    "id": "past-114-2-s2-03",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 3,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "附圖為某資料之分佈圖，此圖資料之偏態（Skewness）值較有可能為下列哪個選項？",
    "options": [
      "Skewness < 0；",
      "Skewness > 0；",
      "Skewness = 0；",
      "無法計算 Skewness"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：Skewness < 0；。"
  },
  {
    "id": "past-114-2-s2-04",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 4,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "累積分佈函數（Cumulative Distribution Function, CDF）可用於描述隨機變數的機率分佈特性，其數學定義為下列何者？",
    "options": [
      "機率密度函數（Probability Density Function, PDF）的平均值；",
      "機率密度函數（Probability Density Function, PDF）的積分；",
      "機率密度函數（Probability Density Function, PDF）的離散總和；",
      "機率密度函數（Probability Density Function, PDF）的標準差"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：機率密度函數（Probability Density Function, PDF）的積分；。"
  },
  {
    "id": "past-114-2-s2-05",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 5,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在進行資料前處理時，若使用 Label Encoding 將類別變數轉換為數字型態，下列何者為最常見的潛在風險？",
    "options": [
      "無法處理缺值；",
      "會引入類別之間的虛假順序關係；",
      "無法擴展至新資料；",
      "記憶體佔用過高"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：會引入類別之間的虛假順序關係；。"
  },
  {
    "id": "past-114-2-s2-06",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 6,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在進行資料分析時，會遇到類別型（Categorical）與數值型（Numerical） 資料格式。關於這兩種資料格式的處理，下列敘述何者不正確？",
    "options": [
      "One-Hot 編碼（One-Hot Encoding）會將類別變數轉換為多維二元向量，適用於無序（Nominal）類別資料，但在高基數（High Cardinality）特徵下可能造成維度爆炸問題；",
      "標籤編碼（Label Encoding）會以整數表示不同類別，若應用於無序（Nominal）資料，可能導致模型誤將編碼值解讀為具數值大小關係的特徵；",
      "標準化（Standardization）透過將資料平移與縮放，使其平均值為0、標準差為 1，可在多數距離型演算法中改善收斂速度，並同時將數值範圍壓縮至 0 至 1 之間；",
      "對連續變數進行分箱（Binning）可提升模型可解釋性，但若分段方式未依據資料分佈特性設計，可能導致資訊損失或邊界偏誤"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：標準化（Standardization）透過將資料平移與縮放，使其平均值為0、標準差為 1，可在多數距離型演算法中改善收斂速度，並同時將數值範圍壓縮至 0 至 1 之間；。"
  },
  {
    "id": "past-114-2-s2-07",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 7,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在資料庫的 ACID 特性中，下列何者為「原子性（Atomicity）」的正確定義？",
    "options": [
      "所有資料欄位必須為相同型別；",
      "每次交易需以批次方式執行；",
      "交易不可分割，需完全成功或完全失敗；",
      "系統會自動同步交易資料至所有節點"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：交易不可分割，需完全成功或完全失敗；。"
  },
  {
    "id": "past-114-2-s2-08",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 8,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "資料科學家為分析顧客行為，利用現有欄位「銷售金額」與「瀏覽次數」，計算出新變數「銷售金額/瀏覽次數」。此動作屬於下列哪一類特徵工程方法？",
    "options": [
      "特徵選擇（Feature Selection）；",
      "特徵衍生（Feature Derivation）；",
      "特徵轉換（Feature Transformation）；",
      "分箱處理（Binning）"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：特徵衍生（Feature Derivation）；。"
  },
  {
    "id": "past-114-2-s2-09",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 9,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在進行數值特徵的標準化（Normalization）時，若資料中存在極端值（Outliers），下列哪一種方法最適合使用？",
    "options": [
      "Min-Max 正規化（Min-Max Scaling）；",
      "Z-score 標準化（Z-score Normalization）；",
      "穩健縮放（Robust Scaling）；",
      "標準分箱（Standard Binning）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：穩健縮放（Robust Scaling）；。"
  },
  {
    "id": "past-114-2-s2-10",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 10,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "下列哪一種情境最適合應用異常偵測（Anomaly Detection）技術？",
    "options": [
      "根據歷史銷售資料預測特定商品在旺季期間是否會出現供貨短缺，以提前調整庫存策略；",
      "透過信用風險模型預測顧客是否可能發生違約，以輔助核貸決策；",
      "即時分析金融交易資料流，偵測與平常交易行為明顯不同的可疑交易紀錄；",
      "監控線上服務平台的使用者登入次數，預測次日的登入量變化趨勢"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：即時分析金融交易資料流，偵測與平常交易行為明顯不同的可疑交易紀錄；。"
  },
  {
    "id": "past-114-2-s2-11",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 11,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "若一家公司需即時監控大量物聯網裝置的異常行為，下列哪一種組合最適合此應用？",
    "options": [
      "傳統關聯式資料庫+圖形視覺化；",
      "批次資料處理+雲端備份；",
      "大數據平台+即時資料分析技術；",
      "Word 文件+手動標註"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：大數據平台+即時資料分析技術；。"
  },
  {
    "id": "past-114-2-s2-12",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 12,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在處理分類問題時，若某一類樣本數明顯少於其他類別，研究人員可能採用隨機過採樣（Random Oversampling）以平衡資料比例，此方法最常造成下列哪一種問題？",
    "options": [
      "增加過擬合風險；",
      "降低模型的收斂速度；",
      "減少資料總筆數數量；",
      "導致訓練資料欄位缺失"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：增加過擬合風險；。"
  },
  {
    "id": "past-114-2-s2-13",
    "subject": 2,
    "topic": "資料安全",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 13,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "下列何者為同態加密（Homomorphic Encryption）技術的核心特性？",
    "options": [
      "將資料轉換為匿名識別碼以隱藏身分；",
      "對資料進行標準化處理以提升模型精度；",
      "自動偵測與排除異常值；",
      "可直接在加密狀態下進行數據運算"
    ],
    "answer": 3,
    "explanation": "同態加密允許系統直接對密文運算，解密後能得到對應的明文運算結果。"
  },
  {
    "id": "past-114-2-s2-14",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 14,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某組資料共 10 項標籤如下：A, A, A, A, A, B, B, B, B, B若該標籤僅有 A、B 兩種，請問這組資料的「正規化吉尼不純度（Normalized Gini impurity）」為何？",
    "options": [
      "0；",
      "0.42；",
      "0.84；",
      "1"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：1。"
  },
  {
    "id": "past-114-2-s2-15",
    "subject": 2,
    "topic": "機率分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 15,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某家客服中心統計資料發現，平均每小時會接到約 20 通顧客來電，但每分鐘的來電數量不固定，可能為 0、1、2 通不等。這些來電事件彼此獨立，且在短時間內，發生的機率與時間長短成正比。若要以機率模型描述「每分鐘接到幾通來電」的機率分佈，下列哪一種最適合使用？",
    "options": [
      "均勻分佈（Uniform distribution）；",
      "指數分佈（Exponential distribution）；",
      "卜瓦松分佈（Poisson distribution）；",
      "常態分佈（Normal distribution）"
    ],
    "answer": 2,
    "explanation": "卜瓦松分布常用來描述固定時間區間內，彼此獨立事件的發生次數。"
  },
  {
    "id": "past-114-2-s2-16",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 16,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司以 Z 分數（Z-Score）監控交易金額異常狀況。若交易金額平均為新台幣 2,000 元，標準差為 400 元，某筆交易金額為 3,200元，且公司以|Z| ≥ 3 判定為異常值（Outlier），下列判斷何者最為正確？",
    "options": [
      "該筆交易的 Z 分數為 3，應標記為異常值；",
      "該筆交易的 Z 分數為 2.5，屬於合理變異範圍；",
      "該筆交易的 Z 分數為 2，顯示模型標準差估計過高；",
      "該筆交易的 Z 分數為 1.5，無須納入異常檢測"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：該筆交易的 Z 分數為 3，應標記為異常值；。"
  },
  {
    "id": "past-114-2-s2-17",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 17,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商公司欲利用顧客行為資料建立消費預測模型，其中「會員等級」欄位包含「一般、白金、黑卡」三種類別。若模型採用梯度提升樹（Gradient Boosting Tree）演算法，資料科學家在進行特徵編碼時應特別注意下列何種情況？",
    "options": [
      "應優先採用獨熱編碼（One-Hot Encoding），以減少類別之間的相依性與記憶體使用量；",
      "直接使用標籤編碼（Label Encoding）可能使模型誤判類別間存在順序關係，導致特徵重要性偏誤；",
      "使用目標編碼（Target Encoding）會自動消除過擬合（Overfitting）風險；",
      "若類別數量較少，建議先使用主成分分析（Principal Component Analysis, PCA）進行降維"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：直接使用標籤編碼（Label Encoding）可能使模型誤判類別間存在順序關係，導致特徵重要性偏誤；。"
  },
  {
    "id": "past-114-2-s2-18",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 18,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某人工智慧團隊使用分散式資料庫（Distributed Database）儲存模型訓練資料，並在更新訓練樣本時啟用多節點交易。若其中一個節點在交易過程中發生錯誤，但系統仍確保整體資料不會出現部分更新、最終狀態維持一致，下列何者最能說明此現象？",
    "options": [
      "系統透過原子性（Atomicity）確保交易必須全部成功或全部回復（Rollback）；",
      "系統透過一致性（Consistency）確保交易完成後資料符合完整性規則；",
      "系統透過隔離性（Isolation）避免多筆交易同時存取或修改相同資料；",
      "系統透過持久性（Durability）確保交易一旦提交，其結果將永久保留於資料庫中"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：系統透過原子性（Atomicity）確保交易必須全部成功或全部回復（Rollback）；。"
  },
  {
    "id": "past-114-2-s2-19",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 19,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某製造企業導入上萬台物聯網（IoT）感測器以進行設備健康監測。系統需在毫秒級回應異常事件，並同時將完整資料保留於雲端供後續 AI 模型訓練與分析。若企業希望兼顧即時性、資料完整性與可擴展性，下列哪一種資料流程設計最符合此目標？",
    "options": [
      "感測器 → 雲端 API Gateway → 分散式資料庫→ 批次特徵工程（→模型推論；",
      "感測器 → MQTT Broker → 雲端資料倉儲→ 即時儀表板→ 模型再訓練；",
      "感測器 → 邊緣運算節點→ 流式資料處理框架（Stream Processing Framework）→ 雲端資料湖→ 模型推論；",
      "感測器 → 本地快取層→ RESTful API → 雲端報表系統）→ 模型批次更新"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：感測器 → 邊緣運算節點→ 流式資料處理框架（Stream Processing Framework）→ 雲端資料湖→ 模型推論；。"
  },
  {
    "id": "past-114-2-s2-20",
    "subject": 2,
    "topic": "資料安全與隱私",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 20,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某銀行計畫將信用風險評估模型部署至雲端平台，以便即時分析客戶交易行為。由於涉及大量敏感金融資料，銀行要求雲端服務商在不解密原始資料的情況下仍能執行模型運算。為達成此目標，最適合採用下列哪一項技術？",
    "options": [
      "在上傳資料前進行匿名化（Anonymization），僅保留可識別代碼供比對使用；",
      "利用雜湊（Hash）函數轉換資料，以確保模型可追蹤但無法還原個資；",
      "採用資料本地化（Data Localization）策略，將所有模型訓練限制於內部伺服器中；",
      "透過同態加密（Homomorphic Encryption），讓雲端系統能直接在加密資料上執行運算，解密後結果與原始資料一致"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：透過同態加密（Homomorphic Encryption），讓雲端系統能直接在加密資料上執行運算，解密後結果與原始資料一致。"
  },
  {
    "id": "past-114-2-s2-21",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 21,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料分析師設計在業務績效報告時，希望單一頁面中同時呈現多區域、不同產品線的銷售趨勢變化，並確保主管能在短時間內掌握整體資料走向。若依據 Edward Rolf Tufte 的數據密度（Data Density） 原則，下列哪一種設計方式最能符合該概念？",
    "options": [
      "將每個區域的銷售資料分成多張獨立折線圖，以避免資訊重疊；",
      "使用顏色區分產品線，於同一圖表中整合多區域趨勢線，保持比例一致且標註清晰；",
      "移除所有輔助線與標籤，僅保留主要折線以凸顯趨勢；",
      "將資料轉換為表格形式，確保數值精確呈現並取代圖表視覺化"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：使用顏色區分產品線，於同一圖表中整合多區域趨勢線，保持比例一致且標註清晰；。"
  },
  {
    "id": "past-114-2-s2-22",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 22,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "某投資研究員希望分析四檔科技類股（A、B、C、D）每日報酬率的變化趨勢，以判斷這些股票之間是否存在高度相關性與共變動性，並評估投資組合分散風險的程度。若研究員希望以單一圖表快速呈現各股票間的關聯強度與方向，下列哪一種視覺化呈現方式最適合？",
    "options": [
      "為每檔股票各自繪製直方圖（Histogram）以比較報酬率分佈；",
      "針對任兩檔股票繪製散佈圖並加上趨勢線（Regression Line）；",
      "使用雙軸折線圖（Dual-axis Line Chart）同時顯示四檔股價變化；",
      "熱力圖（Heatmap）配合相關係數矩陣（Correlation Matrix）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：熱力圖（Heatmap）配合相關係數矩陣（Correlation Matrix）。"
  },
  {
    "id": "past-114-2-s2-23",
    "subject": 2,
    "topic": "假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 23,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "某研究團隊以單樣本 t 檢定（one-sample t-test）檢驗「新行銷策略後的平均月銷售額是否與原本的 100 萬元不同」，顯著水準設定為 α=0.05。檢定結果顯示：p 值=0.08，且 95%信賴區間為 [95 萬元, 108 萬元]。根據上述結果，下列敘述何者正確？",
    "options": [
      "因 p 值< 0.05，可拒絕虛無假設；",
      "若顯著水準改為 0.10，仍不顯著；",
      "因 100 萬元落在信賴區間內，無法拒絕虛無假設；",
      "信賴區間寬度僅與顯著水準有關"
    ],
    "answer": 2,
    "explanation": "p=0.08 大於 0.05，且虛無假設值 100 萬位於 95% 信賴區間內，因此無法拒絕虛無假設。"
  },
  {
    "id": "past-114-2-s2-24",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 24,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業建置生成式 AI 系統，利用大量客服紀錄與產品評論資料訓練語言模型，以自動生成客服回覆與知識摘要。由於資料來源多樣，且包含非結構化文字、影像與表格資訊，團隊希望在不降低模型效能的前提下，提升資料處理效率與一致性，下列哪一種資料處理策略最適合？",
    "options": [
      "建立資料湖（Data Lake）結構，並以 Apache Spark 或 Ray 進行分散式資料預處理與特徵抽取，再串接至模型訓練管線（Pipeline）；",
      "採用單節點高效能伺服器搭配批次處理模式，集中執行資料清理與格式轉換；",
      "將所有文字資料轉換為向量，並以資料庫索引方式直接餵入語言模型訓練；",
      "使用生成式模型先行自動清理資料內容，再將結果輸入至下游訓練流程"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：建立資料湖（Data Lake）結構，並以 Apache Spark 或 Ray 進行分散式資料預處理與特徵抽取，再串接至模型訓練管線（Pipeline）；。"
  },
  {
    "id": "past-114-2-s2-25",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 25,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商資料團隊繪製顧客單筆消費金額的箱型圖後發現：四分位距（IQR）範圍極小，但上鬚線拉得很長，且在高金額區域有多筆離群值。若希望協助行銷部門依據消費層級設計分群策略，下列哪一種視覺化方式最有助於凸顯不同消費層級間的差異？",
    "options": [
      "以對數刻度繪製箱型圖或長條圖，放大高金額消費族群的變化差異；",
      "移除所有離群值，確保資料呈現集中分布；",
      "採用等距分箱（Equal-Width Binning）方式分群；",
      "改以折線圖（Line Chart）觀察時間變化趨勢"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：以對數刻度繪製箱型圖或長條圖，放大高金額消費族群的變化差異；。"
  },
  {
    "id": "past-114-2-s2-26",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 26,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某串流影音平台運用關聯規則學習（Association Rule Learning）分析用戶的觀影行為，發現若使用者觀看了科幻影集，則有較高機率接著觀看超級英雄電影。分析顯示，同時觀看這兩種類型的使用者約佔全部觀影紀錄的 12%，而觀看科幻影集的使用者中，有 50%也觀看了超級英雄電影，該規則的提升度（Lift）為 1.8。根據上述資訊，下列哪一項推論最為正確？",
    "options": [
      "支持度（Support）過低，代表此規則不具任何商業價值；",
      "提升度（Lift）大於 1 表示兩種類型內容無關，僅屬於隨機重疊；",
      "信賴度（Confidence）為 50%，代表觀看科幻影集者有明顯傾向觀看超級英雄電影；",
      "同時觀看比例僅 12%，代表兩種類型互相排斥"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：信賴度（Confidence）為 50%，代表觀看科幻影集者有明顯傾向觀看超級英雄電影；。"
  },
  {
    "id": "past-114-2-s2-27",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 27,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司分析每日上億筆交易資料，以監控客戶轉帳金額分佈與異常波動。由於資料量極大，為兼顧效率與準確度，團隊決定採用「近似分位數（Approximate Quantile）」方法進行資料摘要統計。下列何者最能正確反映該技術的核心目的？",
    "options": [
      "確保每個分位值的結果完全精確，即使計算時間較長；",
      "利用機器學習模型預測分位數位置，以減少統計計算量；",
      "僅能對結構化資料進行批次處理，無法應用於即時資料流；",
      "在可容忍誤差範圍內，快速估算分位值以支援即時分析"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：在可容忍誤差範圍內，快速估算分位值以支援即時分析。"
  },
  {
    "id": "past-114-2-s2-28",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 28,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "若在高維度（>500 維）的資料上應用 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法，卻發現所有資料點皆被判定為雜訊（Noise），下列何者為最有可能的原因？",
    "options": [
      "高維下距離變化趨同，導致 ε（Epsilon）閾值選擇失效；",
      "使用錯誤的距離函數（Distance Function）；",
      "MinPts 參數設得太小；",
      "資料過度標準化導致特徵消失"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：高維下距離變化趨同，導致 ε（Epsilon）閾值選擇失效；。"
  },
  {
    "id": "past-114-2-s2-29",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 29,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某團隊在開發風險評估模型時，使用主成分分析（Principal Component Analysis, PCA）進行降維。輸入資料包含三個數值欄位：「交易金額（單位：新台幣）」、「交易次數（次／月）」與「年齡（歲）」，其數值量級分別約為 10⁵、10¹與 10²。分析人員直接將原始數據帶入 PCA，結果第一主成分（PC1）幾乎完全由「交易金額」主導。下列哪一項作法或判斷最合理？",
    "options": [
      "這是正常現象，金額本身變異較大，應主導主要成分；",
      "若改用特徵選擇法，可自動解決變數量級問題；",
      "可刪除「交易金額」欄位以平衡各主成分的影響；",
      "在進行 PCA 前應先進行標準化（Standardization），以避免因數值尺度差異造成特徵偏誤"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：在進行 PCA 前應先進行標準化（Standardization），以避免因數值尺度差異造成特徵偏誤。"
  },
  {
    "id": "past-114-2-s2-30",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 30,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某行銷團隊想了解「廣告預算」與「銷售金額」之間的關聯程度。經繪製散佈圖後發現兩者呈現明顯線性趨勢，且資料中無明顯離群值（Outliers）。若希望衡量兩者之間線性關係的強度與方向，下列哪一種方法最適合？",
    "options": [
      "均方根誤差（Root Mean Squared Error, RMSE）；",
      "共變異數（Covariance）；",
      "皮爾森相關係數（Pearson Correlation Coefficient）；",
      "平均絕對誤差（Mean Absolute Error, MAE）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：皮爾森相關係數（Pearson Correlation Coefficient）；。"
  },
  {
    "id": "past-114-2-s2-31",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 31,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商團隊觀察到，每位顧客對廣告推播的點擊行為可視為一次伯努利試驗（Bernoulli Trial），單次點擊成功機率為 p=0.4。當推播對象擴增至5,000 位顧客時，團隊想快速預估「成功點擊總數」的分佈情形，以進行模型效能模擬與預測。若希望以常態分佈（Normal Distribution）近似原始分佈，下列哪一項判斷最為合理？",
    "options": [
      "因樣本數極大，可直接以常態分佈近似二項分佈（Binomial Distribution）；",
      "只有當 np 與 n(1-p) 皆大於 5 時，才能以常態分佈作近似；",
      "常態近似只適用於 p=0.5 的情況；",
      "無論樣本數多大，二項分佈都不能以常態分佈近似"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：只有當 np 與 n(1-p) 皆大於 5 時，才能以常態分佈作近似；。"
  },
  {
    "id": "past-114-2-s2-32",
    "subject": 2,
    "topic": "資料安全與隱私",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 32,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某電信公司導入生成式 AI 客服系統，利用過去對話紀錄與用戶行為資料訓練語言模型，在資料治理與合規審查過程中，團隊發現模型可能會在回答中生成包含真實姓名、電話或交易資訊的內容。為確保系統符合個資法及生成式 AI 的安全與隱私要求，下列哪一項作法最符合實務可行及法規原則？",
    "options": [
      "在訓練資料前進行資料匿名化（Anonymization）或偽匿名化（Pseudonymization）處理，並建立輸出內容稽核機制；",
      "改以強化學習（Reinforcement Learning）微調模型，使模型學習避免產出真實資訊；",
      "採用同態加密（Homomorphic Encryption）以加密所有文字輸入，確保模型無法辨識任何個資；",
      "僅設定模型回覆時不顯示用戶姓名，即可視為隱私防護完成"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：在訓練資料前進行資料匿名化（Anonymization）或偽匿名化（Pseudonymization）處理，並建立輸出內容稽核機制；。"
  },
  {
    "id": "past-114-2-s2-33",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 33,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融機構的量化分析師在建立資產風險評估模型時，發現報酬率資料分佈明顯非對稱，且出現多次極端損失事件，使得傳統假設常態分佈的模型無法準確反映真實風險。若希望在不依賴常態分佈假設的前提下，採取更能捕捉資料極端情況的建模策略，下列哪一種方法最為合適？",
    "options": [
      "採用線性迴歸模型（Linear Regression Model），以常態分佈殘差（Residuals）為基礎進行推估；",
      "使用平均數（Mean）與標準差（Standard Deviation）估計波動範圍；",
      "將資料裁剪至 ±3σ 範圍內以排除異常值影響；",
      "採用分位數回歸模型（Quantile Regression Model），聚焦於尾部分位（Tail Quantiles）以評估極端風險"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：採用分位數回歸模型（Quantile Regression Model），聚焦於尾部分位（Tail Quantiles）以評估極端風險。"
  },
  {
    "id": "past-114-2-s2-34",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 34,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "在圖形資料庫（Graph Database）中建模社群平台資料時，若每筆「按讚」行為都包含時間戳記（Timestamp）與裝置類型（Device Type）等資訊。若希望同時保留使用者與貼文之間的互動關係，並能有效查詢「按讚」的行為屬性，下列哪一種設計方式最為合適？",
    "options": [
      "將「按讚」視為節點（Node），與使用者建立邊（Edge）；",
      "將「按讚」資訊作為邊的屬性（Property）儲存，連結使用者與被按讚的貼文節點；",
      "把「按讚」資訊直接寫入使用者節點中作為屬性；",
      "建立「按讚紀錄表」並將資料存入關聯式資料庫"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：將「按讚」資訊作為邊的屬性（Property）儲存，連結使用者與被按讚的貼文節點；。"
  },
  {
    "id": "past-114-2-s2-35",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 35,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業欲建構知識圖譜（Knowledge Graph），以整合內部的研究報告、專利資料與專家知識，並支援語意查詢與關聯推理。若希望模型能具備良好的語意擴展性與高效推理能力，下列哪一種圖模型設計最為合適？",
    "options": [
      "僅以節點（Node）與邊（Edge）表示，所有資訊存放於節點屬性中；",
      "將資料結構建為 RDF（Resource Description Framework）三元組（Subject–Predicate–Object）；",
      "使用文件型資料庫儲存內容，並以標籤（Tag）連接節點；",
      "採用關聯式資料庫儲存對應關係，並搭配預建索引加速查詢"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：將資料結構建為 RDF（Resource Description Framework）三元組（Subject–Predicate–Object）；。"
  },
  {
    "id": "past-114-2-s2-36",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 36,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "某研究人員欲使用線性迴歸模型（Linear Regression Model）分析變數Y 與 X 之間的關係，但發現 Y 的分佈明顯右偏，且其變異數隨 X 的增大而增加。為滿足模型假設並提升配適效果，下列哪一種前處理方法最為合適？",
    "options": [
      "對 X 進行標準化（Standardization）；",
      "對 Y 進行 Box–Cox 轉換（Box–Cox Transformation）；",
      "對資料進行一次差分（First Differencing）；",
      "將 Y 中變異較大的樣本移除"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：對 Y 進行 Box–Cox 轉換（Box–Cox Transformation）；。"
  },
  {
    "id": "past-114-2-s2-37",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 37,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "若開發一個用於罕見疾病自動診斷的分類模型，目前資料集中確診樣本僅佔不到 1%，且因為標註成本高，短期內無法取得更多資料。在此情況下，若希望提升模型對少數類的偵測能力，同時避免過擬合，下列哪一種策略最為合理？",
    "options": [
      "對少數類進行隨機過採樣（Random Oversampling）；",
      "對多數類進行欠採樣（Random Undersampling）；",
      "使用 SMOTE（Synthetic Minority Over-sampling Technique）生成合成少數類樣本後再訓練分類模型；",
      "僅使用現有資料調整模型決策閾值（Decision Threshold）以提升召回率"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：使用 SMOTE（Synthetic Minority Over-sampling Technique）生成合成少數類樣本後再訓練分類模型；。"
  },
  {
    "id": "past-114-2-s2-38",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 38,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "一家製造廠評估新生產線推出後，產品良率是否較原生產線提升。工程師分別從兩條生產線各抽樣 100 件產品，原生產線良率為 95%，新生產線為 97%。若欲檢定兩條生產線良率的差異是否具有統計意義，下列哪一種方法最為合適？",
    "options": [
      "雙樣本平均數 t 檢定（Two-sample t-test）；",
      "雙比例 Z 檢定（Two-proportion Z-test）；",
      "卡方檢定（Chi-square test）；",
      "變異數分析（ANOVA）"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：雙比例 Z 檢定（Two-proportion Z-test）；。"
  },
  {
    "id": "past-114-2-s2-39",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 39,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "若評估一個新開發的腫瘤分類模型，其資料集中有 80%的樣本來自良性病例。若直接使用 5-fold 交叉驗證（Cross-Validation） 進行模型評估，可能導致模型效能評估出現偏差，為避免此問題，下列哪一種作法最合適？",
    "options": [
      "降低 K 值以減少交叉驗證次數；",
      "改為使用拔靴法（Bootstrap）；",
      "調整測試集使良性樣本比例更高，以模擬真實分佈；",
      "使用分層交叉驗證（Stratified K-Fold Cross-Validation），以確保每折類別比例一致"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：使用分層交叉驗證（Stratified K-Fold Cross-Validation），以確保每折類別比例一致。"
  },
  {
    "id": "past-114-2-s2-40",
    "subject": 2,
    "topic": "Python 資料處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 40,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "請參考附圖，下列虛擬程式碼（pseudocode）最可能是在描述何種驗證法？",
    "options": [
      "Hold-out 驗證（Hold-out Validation）；",
      "留一交叉驗證 LOOCV（Leave-One-Out Cross Validation）；",
      "K-fold 交叉驗證（K-fold Cross Validation）；",
      "拔靴法（Bootstrap）驗證"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：留一交叉驗證 LOOCV（Leave-One-Out Cross Validation）；。"
  },
  {
    "id": "past-114-2-s2-41",
    "subject": 2,
    "topic": "Python 資料處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 41,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "請參考附圖，下列虛擬程式碼（pseudocode）最可能是在描述何種演算法？",
    "options": [
      "K-means 分群（K-means Clustering）；",
      "高斯混合模型分群（Gaussian Mixture Model Clustering）；",
      "階層式分群（Hierarchical Clustering）；",
      "DBSCAN 分群（Density-based Spatial Clustering of Applications with Noise Clustering）"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：K-means 分群（K-means Clustering）；。"
  },
  {
    "id": "past-114-2-s2-42",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 42,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "考慮某生產線每小時出現瑕疵品的個數符合卜瓦松分佈（Poisson Distribution），已知平均每小時產生 5 個瑕疵品，附圖程式碼展示資料處理，請問下列敘述何者正確？",
    "options": [
      "lambda_poisson = 5 表示每小時最多 5 個瑕疵品；",
      "poisson.pmf(5, lambda_poisson) 表示小於 5 個瑕疵品的機率；",
      "卜瓦松分佈的適用條件為事件彼此獨立，且平均發生率固定；",
      "poisson.cdf(10, 5) 表示大於或等於 10 個瑕疵品的機率"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：卜瓦松分佈的適用條件為事件彼此獨立，且平均發生率固定；。"
  },
  {
    "id": "past-114-2-s2-43",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 43,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "分析師在載入資料後，檢視 Year 欄位的資料型態，發現它是 float64，而非一般年份常用的整數。他想了解這樣的情形為什麼會發生。請問下列哪些原因可能導致這種狀況？原因 A：CSV 檔中 Year 欄位有缺失值(NaN)，導致 Pandas 自動將整欄轉為浮點數。原因 B：CSV 檔中的年份資料原本是字串(如 \"2006\")，Pandas 轉換時出錯而變成浮點數。原因 C：Pandas 預設會將所有數值型態讀取為 float64，不論資料是否為整數。原因 D：CSV 檔中的年份資料可能包含小數點(例如 2006.0)，因此被視為浮點數。",
    "options": [
      "原因 B、原因 C；",
      "原因 A、原因 D；",
      "原因 A、原因 B、原因 D；",
      "原因 C、原因 D"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：原因 A、原因 D；。",
    "sourceContext": "一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集，內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如下，請根據下述資料情境回答以 43~47 題。Name：遊戲名稱Platform：遊戲平台（如 PS4、X360、Wii 等）Year：發售年份Genre：遊戲類型（如 Action、Sports、Role-Playing 等）Publisher：發行商名稱NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單位：百萬份）Global_Sales：全球總銷售量（單位：百萬份）資料的欄位概觀如下："
  },
  {
    "id": "past-114-2-s2-44",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 44,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "研究團隊接下來想要將 Year 欄位轉換為整數型態，以便後續進行年份趨勢分析。考慮到資料中可能包含缺失值（NaN），請選出最合適的轉換方式。",
    "options": [
      "data['Year'] = data['Year'].astype(int)；",
      "data['Year'] = data['Year'].fillna(0).astype(int)；",
      "data['Year'] = data['Year'].fillna(1).astype(int)；",
      "data['Year'] = data['Year'].astype('Int64')；"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：data['Year'] = data['Year'].astype('Int64')；。",
    "sourceContext": "一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集，內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如下，請根據下述資料情境回答以 43~47 題。Name：遊戲名稱Platform：遊戲平台（如 PS4、X360、Wii 等）Year：發售年份Genre：遊戲類型（如 Action、Sports、Role-Playing 等）Publisher：發行商名稱NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單位：百萬份）Global_Sales：全球總銷售量（單位：百萬份）資料的欄位概觀如下："
  },
  {
    "id": "past-114-2-s2-45",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 45,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "為了觀察各遊戲平台的市場表現，分析師想要統計每個平台的全球銷售總額，並以長條圖呈現。請選出最能正確實現此分析的程式碼。",
    "options": [
      "data.groupby(\"Platform\")[\"Global_Sales\"].sum().plot(kind=\"bar\")；",
      "data.groupby(\"Platform\")[\"Global_Sales\"].count().plot(kind=\"bar\")；",
      "data[\"Platform\"].value_counts().plot(kind=\"bar\")；",
      "data.groupby(\"Platform\")[\"Global_Sales\"].mean().plot(kind=\"bar\")"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：data.groupby(\"Platform\")[\"Global_Sales\"].sum().plot(kind=\"bar\")；。",
    "sourceContext": "一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集，內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如下，請根據下述資料情境回答以 43~47 題。Name：遊戲名稱Platform：遊戲平台（如 PS4、X360、Wii 等）Year：發售年份Genre：遊戲類型（如 Action、Sports、Role-Playing 等）Publisher：發行商名稱NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單位：百萬份）Global_Sales：全球總銷售量（單位：百萬份）資料的欄位概觀如下："
  },
  {
    "id": "past-114-2-s2-46",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 46,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "團隊希望比較北美、歐洲、日本及其他地區的整體銷售比例，並使用seaborn 套件以長條圖的形式進行可視化分析。請選出能正確顯示這些地區銷售總額比例的程式碼。",
    "options": [
      "sns.countplot(x=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"],data=data)；",
      "sns.lineplot(x=\"Platform\",y=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"],data=data)；",
      "sns.barplot(x=\"variable\", y=\"value\",data=pd.melt(data,value_vars=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"]),estimator=sum)；",
      "sns.histplot(data[[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"]])"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：sns.barplot(x=\"variable\", y=\"value\",data=pd.melt(data,value_vars=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"]),estimator=sum)；。",
    "sourceContext": "一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集，內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如下，請根據下述資料情境回答以 43~47 題。Name：遊戲名稱Platform：遊戲平台（如 PS4、X360、Wii 等）Year：發售年份Genre：遊戲類型（如 Action、Sports、Role-Playing 等）Publisher：發行商名稱NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單位：百萬份）Global_Sales：全球總銷售量（單位：百萬份）資料的欄位概觀如下："
  },
  {
    "id": "past-114-2-s2-47",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 47,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": false,
    "question": "研究團隊想要知道在北美地區（NA）銷售成績最好的遊戲前五名，並希望以 seaborn 的條狀圖呈現結果。請選出能正確完成這項分析的程式碼。",
    "options": [
      "sns.barplot(x=\"NA_Sales\", y=\"Name\", data=data.head(5))；",
      "sns.barplot(x=\"Name\", y=\"NA_Sales\", data=data.nlargest(5,\"NA_Sales\"))；",
      "sns.lineplot(x=\"Name\", y=\"NA_Sales\", data=data.nlargest(5,\"NA_Sales\"))；",
      "sns.countplot(x=\"Name\", y=\"NA_Sales\", data=data)"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：sns.barplot(x=\"Name\", y=\"NA_Sales\", data=data.nlargest(5,\"NA_Sales\"))；。",
    "sourceContext": "一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集，內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如下，請根據下述資料情境回答以 43~47 題。Name：遊戲名稱Platform：遊戲平台（如 PS4、X360、Wii 等）Year：發售年份Genre：遊戲類型（如 Action、Sports、Role-Playing 等）Publisher：發行商名稱NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單位：百萬份）Global_Sales：全球總銷售量（單位：百萬份）資料的欄位概觀如下："
  },
  {
    "id": "past-114-2-s2-48",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 48,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "根據上述結果，下列何者正確？",
    "options": [
      "資料集個數為 199 筆，變數個數為 4 個；",
      "sales 變數的中位數是 16.827；",
      "facebook 變數的第三四分位數(Q3)是 11.94；",
      "youtube 變數的第一四分位數(Q1)是 89.25"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：youtube 變數的第一四分位數(Q1)是 89.25。",
    "sourceContext": "使用銷售資料集(marketing.csv)進行迴歸分析，附圖程式碼展示資料載入與處理，請回答後續 48~50 題。下圖顯示資料集的前 5 筆資料與相關資訊。"
  },
  {
    "id": "past-114-2-s2-49",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 49,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "參考下圖計算各變數的遺漏值(NaN)個數結果，下列何者正確？選項 A: df.isnull().sum()選項 B: df.isNaN().sum()選項 C: df.isna().sum()選項 D: df.isnan().sum()",
    "options": [
      "選項 D；",
      "選項 B、選項 C、選項 D；",
      "選項 A、選項 C；",
      "選項 A、選項 B、選項 C"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：選項 A、選項 C；。",
    "sourceContext": "使用銷售資料集(marketing.csv)進行迴歸分析，附圖程式碼展示資料載入與處理，請回答後續 48~50 題。下圖顯示資料集的前 5 筆資料與相關資訊。"
  },
  {
    "id": "past-114-2-s2-50",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "114 年第二梯次",
    "sourceQuestion": 50,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/114%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%A2%AF%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB%E7%AC%AC%E4%BA%8C%E7%A7%91%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8%28%E7%95%B6%E6%AC%A1%E8%A9%A6%E9%A1%8C%E5%85%AC%E5%91%8A114_20251226000634.pdf",
    "requiresOfficialPdf": true,
    "question": "考慮資料集已經填補遺漏值，參考下圖執行結果，下列何者正確？A：空格 1 完整語法 reg = LinearRegression().fit(y, X) B：空格 1 完整語法 reg = LinearRegression().fit(X, y) C：print(reg.coef_) 結果為包括截距項等 4 個係數值D：空格 2 完整語法 sm.OLS(X2, y).fit() E：model_sm 迴歸模型的所有迴歸係數在α=0.05 之下具有顯著的解釋力F：截距項係數值為 3.5561",
    "options": [
      "B、C、F",
      "B、F",
      "A、C、D、F",
      "B、E"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：B、F。",
    "sourceContext": "使用銷售資料集(marketing.csv)進行迴歸分析，附圖程式碼展示資料載入與處理，請回答後續 48~50 題。下圖顯示資料集的前 5 筆資料與相關資訊。"
  },
  {
    "id": "past-115-1-s1-01",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 1,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師正在建置一套法律文件解析系統，在進行資訊擷取（Information Extraction）前，需要對文本進行詞性標註（Part-of-Speech Tagging, POS Tagging）。請問此步驟的主要目的為何？",
    "options": [
      "將文本翻譯為其他語言以利跨語言分析；",
      "將文本切分為基本詞彙單位，以便後續處理；",
      "判斷文本中各詞彙的情感傾向；",
      "為每個詞彙標記其語法類別，如名詞、動詞與形容詞"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：為每個詞彙標記其語法類別，如名詞、動詞與形容詞。"
  },
  {
    "id": "past-115-1-s1-02",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 2,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "一家新創公司希望對 Llama3 70B 模型進行領域微調（Domain Fine-Tuning）以建立企業專用助理，但 GPU 記憶體有限，無法支撐完整模型的反向傳播梯度計算。工程師希望凍結（freeze）原模型權重、僅訓練少量額外參數的前提下，評估採用LoRA（Low-Rank Adaptation）方案。請問 LoRA 在此場景下的主要優勢為何？",
    "options": [
      "透過知識蒸餾（Knowledge Distillation）將 70B 模型壓縮為較小的學生模型；",
      "對原始模型各層權重進行剪枝（Pruning），移除低重要性參數後再進行微調；",
      "凍結原始預訓練權重，僅在各層加入低秩分解的可訓練矩陣，大幅降低可訓練參數量與 GPU 記憶體需求；",
      "將模型中的注意力機制改為稀疏注意力（Sparse Attention），以降低長序列計算成本"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：凍結原始預訓練權重，僅在各層加入低秩分解的可訓練矩陣，大幅降低可訓練參數量與 GPU 記憶體需求；。"
  },
  {
    "id": "past-115-1-s1-03",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 3,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師在建構搜尋引擎的詞向量模型時，語料庫規模達數十億 token，且包含大量長尾詞彙（Long-tail Terms）。他在 Word2Vec 的 CBOW 與 Skip-gram 兩種訓練策略之間進行選擇，需考量訓練效率與低頻詞表示品質之差異。下列何者最能準確地反映兩者在此情境下的取捨？",
    "options": [
      "CBOW 對長尾詞表現更好，因為它透過多個上下文詞的平均來強化稀疏詞的訓練訊號；",
      "CBOW 訓練速度較快、整體語意平滑，但對低頻詞的向量品質較差；Skip-gram以中心詞預測周圍詞，對長尾詞累積更多訓練樣本，向量品質較優；",
      "Skip-gram 訓練速度更快，因為每次只需預測單一目標詞，計算量低於 CBOW；",
      "兩者對低頻詞的表現完全相同，差異僅在於訓練時的 Batch 組織方式"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：CBOW 訓練速度較快、整體語意平滑，但對低頻詞的向量品質較差；Skip-gram以中心詞預測周圍詞，對長尾詞累積更多訓練樣本，向量品質較優；。"
  },
  {
    "id": "past-115-1-s1-04",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 4,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司的工程師正在準備內部客服對話與交易紀錄文本，進行 BERT 模型的預訓練，以提升模型對金融語境的理解能力，並採用遮蔽語言建模（Masked Language Model, MLM）作為訓練任務。請問 MLM 的核心訓練目標為何？",
    "options": [
      "讓模型自左至右逐 token 生成句子，學習自迴歸語言模型（Autoregressive LM）能力；",
      "透過對抗訓練（Adversarial Training）縮小真實句與生成句之間的語意差異；",
      "隨機遮蔽輸入序列中部分 token，訓練模型根據雙向上下文預測被遮蔽的原始內容；",
      "透過遮蔽低頻詞來減少詞彙表大小，降低 Embedding 的記憶體使用"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：隨機遮蔽輸入序列中部分 token，訓練模型根據雙向上下文預測被遮蔽的原始內容；。"
  },
  {
    "id": "past-115-1-s1-05",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 5,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台的工程師在開發商品評論情感分析系統時，發現使用 One-Hot 編碼無法表達詞語之間的語意關係，且隨著詞彙表擴大，向量維度與記憶體需求快速增加。工程師因此改用 Word2Vec 進行詞語表示。請問 Word2Vec 從根本上解決了上述問題的哪項限制？",
    "options": [
      "建立詞語之間的序列依賴關係，以捕捉長距離上下文語意；",
      "根據詞語在語料中的出現頻率調整其重要性，使模型更重視高頻詞；",
      "降低詞彙表示的維度，同時保留語意結構，避免高維稀疏表示所帶來的限制；",
      "透過監督式學習利用標註語料，提升詞語分類的準確性"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：降低詞彙表示的維度，同時保留語意結構，避免高維稀疏表示所帶來的限制；。"
  },
  {
    "id": "past-115-1-s1-06",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 6,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某自駕車感知系統需要在同一張影像中同時完成道路、建築、行人的逐像素分類，並且能夠區分畫面中兩名相鄰行人（標記為「行人#1」和「行人#2」）。工程師在選擇語義分割（Semantic Segmentation）與實例分割（Instance Segmentation）時，請問兩者的根本差異為何？",
    "options": [
      "實例分割對每個像素進行分類但不產生 Bounding Box；語義分割產生Bounding Box 但不進行像素級標記；",
      "實例分割僅用於影像層級的類別分類，語義分割才進行逐像素標記；",
      "語義分割將每個像素分配至預定義類別，但同一類別內的不同個體無法區分；實例分割能對同一類別的不同物件（如兩名行人）分別建立獨立遮罩（Mask）；",
      "語義分割與實例分割皆為逐像素分類任務，但兩者在是否需要區分不同物件個體上並無差異"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：語義分割將每個像素分配至預定義類別，但同一類別內的不同個體無法區分；實例分割能對同一類別的不同物件（如兩名行人）分別建立獨立遮罩（Mask）；。"
  },
  {
    "id": "past-115-1-s1-07",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 7,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某大型超市的防損系統需要即時偵測多名顧客各自手持的購物籃、手機與商品，並需對每個物件進行精確區域標記（Pixel-level Mask），同時能區分畫面中不同個體（即使不同顧客拿著相同商品，也需分別標記）。請問下列哪一項技術最適合此場景的需求？",
    "options": [
      "影像分類（Image Classification）；",
      "目標檢測（Object Detection）；",
      "實例分割（Instance Segmentation）；",
      "語義分割（Semantic Segmentation）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：實例分割（Instance Segmentation）；。"
  },
  {
    "id": "past-115-1-s1-08",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 8,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師訓練了一個皮膚病變二元分類模型（惡性/良性），在向臨床醫師報告模型效能時，使用 ROC 曲線（Receiver Operating Characteristic Curve）進行呈現。請問 ROC 曲線的橫軸（X 軸）與縱軸（Y 軸）分別代表哪些指標，且在醫療情境中代表哪一種意義？",
    "options": [
      "X 軸為準確率（Accuracy），Y 軸為召回率（Recall），表示模型整體分類正確比例與偵測能力；",
      "X 軸為假陽率（False Positive Rate, FPR），Y 軸為真陽率（True Positive Rate,TPR），反映誤診健康個體的風險與正確識別病患的能力；",
      "X 軸為精確率（Precision），Y 軸為召回率（Recall），表示預測為陽性樣本的準確性與完整性；",
      "X 軸為 IoU 閾值，Y 軸為 mAP，反映物件偵測模型在不同重疊條件下的表現"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：X 軸為假陽率（False Positive Rate, FPR），Y 軸為真陽率（True Positive Rate,TPR），反映誤診健康個體的風險與正確識別病患的能力；。"
  },
  {
    "id": "past-115-1-s1-09",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 9,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某團隊在監控影像分類模型的線上效能時，透過儀表板呈現混淆矩陣（Confusion Matrix），以觀察模型預測結果與實際標籤的分佈情形。請問下列哪一項無法從混淆矩陣中直接計算？",
    "options": [
      "精確率（Precision）；",
      "準確率（Accuracy）；",
      "召回率（Recall）；",
      "ROC 曲線下面積（AUC）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：ROC 曲線下面積（AUC）。"
  },
  {
    "id": "past-115-1-s1-10",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 10,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工廠導入即時影像瑕疵偵測系統，需在高頻影像流中進行快速推論。工程師在YOLO 與 Faster R-CNN 兩種物件偵測架構之間進行評估，請問下列哪一個針對兩者在偵測流程設計上的差異最為正確？",
    "options": [
      "YOLO 採用單階段偵測，直接從整張影像預測物件位置與類別；Faster R-CNN則先產生候選區域再進行分類；",
      "YOLO 與 Faster R-CNN 皆採用兩階段流程，但在特徵擷取方式上有所不同；",
      "YOLO 採用單階段架構，主要透過增加候選區域數量來提升偵測準確率；",
      "Faster R-CNN 採用單階段偵測方式，將物件定位與分類整合於同一模型中"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：YOLO 採用單階段偵測，直接從整張影像預測物件位置與類別；Faster R-CNN則先產生候選區域再進行分類；。"
  },
  {
    "id": "past-115-1-s1-11",
    "subject": 1,
    "topic": "自然語言處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 11,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師在分析 Transformer 架構時，發現自注意力機制（Self-Attention）能夠有效提升模型對序列中長距離依賴關係的建模能力。請問 Self-Attention 的核心功能為何？",
    "options": [
      "透過隱藏狀態的遞迴傳遞，逐步累積序列中的上下文資訊；",
      "讓序列中每個 token 能與其他所有 token 建立關聯，並根據重要性分配權重；",
      "對輸入序列進行局部運算，以捕捉相鄰詞之間的關係；",
      "將整個序列壓縮為固定長度表示，以提供後續任務使用"
    ],
    "answer": 1,
    "explanation": "自注意力會計算序列各 token 之間的關聯權重，因此能直接掌握距離很遠的語意關係。"
  },
  {
    "id": "past-115-1-s1-12",
    "subject": 1,
    "topic": "模型訓練",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 12,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師在設計一個二元分類器（Binary Classifier）時，考慮在輸出層使用 Sigmoid函數。請問 Sigmoid 函數的主要特性與限制為何？",
    "options": [
      "可將輸入轉換為任意實數範圍，適合用於迴歸任務；",
      "可將輸入壓縮至(0, 1)區間，可解釋為機率值，但在輸入值過大或過小時可能產生梯度消失問題；",
      "可將輸入轉換為多類別機率分布，常用於多分類任務；",
      "可在整個輸入範圍內梯度保持穩定，適合用於深層神經網路"
    ],
    "answer": 1,
    "explanation": "Sigmoid 將數值壓到 0～1，常用於二元分類；但兩端容易飽和，使梯度變得很小。"
  },
  {
    "id": "past-115-1-s1-13",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 13,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某公司評估兩種方案，將大型語言模型客製化為內部客服助理：方案 A 為提示微調（Prompt Tuning），在輸入端加入可學習的軟提示（Soft Prompt）；方案 B 為傳統微調（Fine-Tuning），以標註問答資料調整模型。兩方案最本質的技術差異為何？",
    "options": [
      "提示微調主要用於降低推論延遲，而傳統微調則用於提升模型容量；",
      "兩者技術本質相同，差別僅在於學習率（Learning Rate）設定不同；",
      "傳統微調通常需要更新模型參數，而提示微調主要透過調整輸入表示來影響模型行為；",
      "提示微調與傳統微調的差異僅在於是否使用預訓練模型"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：傳統微調通常需要更新模型參數，而提示微調主要透過調整輸入表示來影響模型行為；。"
  },
  {
    "id": "past-115-1-s1-14",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 14,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師計劃將通用 LLM 在醫療問答語料上進行監督微調（Supervised Fine-Tuning, SFT），但發生了災難性遺忘（Catastrophic Forgetting）問題。在計算資源有限的情況下，工程師希望透過調整微調策略來緩解此問題。下列哪一種訓練設計最能有效率地學習新任務的同時保留原有能力？",
    "options": [
      "凍結大部分預訓練參數，僅對少量新增模組（如 LoRA 層）進行微調，並控制更新範圍以減少對原有知識的干擾；",
      "提高學習率（Learning Rate）並縮短訓練步數，使模型快速收斂至新任務，避免長時間訓練造成遺忘；",
      "僅使用醫療語料進行多輪訓練，強化模型對新任務的專注程度；",
      "增加批次大小（Batch Size）以穩定梯度更新，使模型同時保留舊知識與學習新知識"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：凍結大部分預訓練參數，僅對少量新增模組（如 LoRA 層）進行微調，並控制更新範圍以減少對原有知識的干擾；。"
  },
  {
    "id": "past-115-1-s1-15",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 15,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業建置一套多代理人（Multi-Agent）系統，由一個 OrchestratorAgent 負責任務分配，多個 Worker Agent 分別執行網路搜尋、程式撰寫與結果彙整。若Orchestrator 發現某 Worker Agent 回傳結果品質不符合預期，從系統容錯與任務可靠性角度，下列哪一項機制最能確保整體任務仍能正確完成？",
    "options": [
      "直接採用該 Worker Agent 的輸出，避免重試機制造成延遲；",
      "Orchestrator 具備結果評估能力，對不合格結果觸發重試（Retry）或重新分配給不同 Worker，並記錄失敗原因供後續改善；",
      "強制所有 Worker Agent 統一使用相同的 LLM 模型，以減少輸出差異；",
      "當任何一個 Worker 失敗時，整個 Multi-Agent 任務直接中止並通知使用者重新啟動"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：Orchestrator 具備結果評估能力，對不合格結果觸發重試（Retry）或重新分配給不同 Worker，並記錄失敗原因供後續改善；。"
  },
  {
    "id": "past-115-1-s1-16",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 16,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "一位工程師正在實作一個 ReAct 框架的 AIAgent，該 Agent 需要回答「台灣目前最大的電動車充電站營運商是哪間公司，以及其充電樁總數」。Agent 的工具清單如下：•web_search(query)：回傳搜尋結果摘要•get_webpage(url)：回傳網頁內文•calculator(expression)：回傳計算結果•get_current_date()：回傳今日日期工程師設計了以下的 System Prompt 與 ReAct Loop，請問此 Agent 設計存在哪些問題？應如何改善？[System Prompt]你是一個資料查詢助理。每次只能使用一個工具。當你知道答案時，直接輸出最終答案。[第一輪 Agent 輸出]Thought: 我已經知道台灣電動車市場的概況，不需要搜尋，可以直接回答。Action: 無Answer: 台灣最大充電站營運商是 XX 公司，共有 500 個充電樁。",
    "options": [
      "System Prompt 未要求 Agent 在回答前使用工具驗證，導致直接依賴既有知識產生幻覺（Hallucination）；應明確規定即時性問題需先執行 web_search；",
      "工具清單提供了 calculator 與 get_current_date，屬於多餘工具，可能增加 Agent的選擇複雜度；",
      "ReAct 框架的核心問題在於 Thought 步驟佔用過多 token，應移除 Thought 欄位，直接讓 Agent 輸出 Action，以提升推理效率；",
      "Agent 應在第一輪就呼叫所有可用工具並彙整結果，避免多輪 Loop 造成的延遲"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：System Prompt 未要求 Agent 在回答前使用工具驗證，導致直接依賴既有知識產生幻覺（Hallucination）；應明確規定即時性問題需先執行 web_search；。"
  },
  {
    "id": "past-115-1-s1-17",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 17,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫療新創公司正在開發一套「多模態患者風險評估系統」，需同時處理三種異質資料來源：胸腔 X 光影像（影像模態）、臨床診斷筆記（文字模態），以及心率與血氧的時序感測資料（數值時序模態）。工程師在進行各模態的特徵擷取模型選擇時，需為每種模態挑選最適合的模型架構。下列哪一組模型配置最符合三種模態各自的資料特性？",
    "options": [
      "影像模態用 LSTM、文字模態用 CNN、時序模態用 BERT；",
      "影像模態用 TF-IDF、文字模態用 ResNet、時序模態用 Word2Vec；",
      "三種模態統一使用 BERT，因為 Transformer 架構具備通用性，可處理任意形式的輸入資料；",
      "影像模態用 CNN、文字模態用 Transformer、時序模態用 LSTM 或 Temporal CNN"
    ],
    "answer": 3,
    "explanation": "CNN 適合擷取影像空間特徵，Transformer 適合文字語意，LSTM 或 Temporal CNN 適合時間序列。"
  },
  {
    "id": "past-115-1-s1-18",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 18,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫院的 AI 研究團隊正在開發一套整合「CT 影像+電子病歷文本+基因序列」三種模態資料的癌症預測模型。請問在此場景中採用「跨模態對齊（Cross-Modal Alignment）」技術主要解決什麼問題？",
    "options": [
      "使模型僅聚焦於 CT 影像資料，避免文本與基因資料引入雜訊；",
      "自動生成跨模態配對標註，以減少人工標記需求；",
      "降低多模態資料的儲存與計算成本，以提升訓練效率；",
      "將不同模態的資料表示對齊至共同語意空間，使模型能建立跨模態之間的語意關聯"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：將不同模態的資料表示對齊至共同語意空間，使模型能建立跨模態之間的語意關聯。"
  },
  {
    "id": "past-115-1-s1-19",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 19,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": true,
    "question": "一家電商公司已將推薦系統 AI 模型上線三個月，業務主管要求專案團隊評估導入成效。團隊根據下圖數據得出結論：「因為 AUC 高達 0.91，模型表現優異，AI導入成效良好。」請問此評估結論存在什麼根本問題？",
    "options": [
      "僅依賴離線指標 AUC 判斷模型成效，忽略線上業務指標（如 CTR 與營收）的變化，可能導致錯誤結論；",
      "AUC 已達 0.91，代表模型排序能力優異，即使 CTR 略為下降，仍可視為推薦品質提升；",
      "CTR 從 3.2%降至 3.1%，顯示模型效果變差，應立即還原（Rollback）至舊模型；",
      "平均訂單金額提升至$1,020，代表模型已成功優化營收，因此無需考慮其他指標"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：僅依賴離線指標 AUC 判斷模型成效，忽略線上業務指標（如 CTR 與營收）的變化，可能導致錯誤結論；。"
  },
  {
    "id": "past-115-1-s1-20",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 20,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商公司計畫導入即時推薦系統，希望使用者進入網站後能在 100 毫秒內取得推薦結果，且推薦結果需依據最新使用者行為進行調整。系統需支援每日約 50 萬活躍使用者，尖峰時段每秒約 3,000 筆請求（QPS）。目前公司已累積歷史購買紀錄與瀏覽行為資料，並持續接收即時點擊流（Streaming Data）。IT 基礎架構採用雲端環境，團隊配置為 2 名資料工程師與 1 名機器學習工程師。某工程師提出以下導入規劃：(1)使用批次訓練（Batch Training）建立協同過濾模型(2)將模型部署為 REST API 提供即時推論服務(3)使用 Kafka 串流處理即時使用者行為特徵(4)將所有即時資料先寫入資料倉儲（Data Warehouse）再進行特徵計算(5)使用 Redis 或 Feature Store 快取即時特徵請問以下哪一項最合理的技術導入規劃組合與調整建議？",
    "options": [
      "保留(1)(2)(3)，移除(4)，並加入(5)以降低延遲；",
      "保留(1)(4)，移除(3)，以確保資料一致性與系統穩定；",
      "保留(2)(4)(5)，移除(1)，改用即時線上學習（Online Learning）；",
      "全部保留(1)~(5)，可同時兼顧即時性與資料完整性"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：保留(1)(2)(3)，移除(4)，並加入(5)以降低延遲；。"
  },
  {
    "id": "past-115-1-s1-21",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 21,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "一位機器學習工程師正在優化公司內部的 RAG 法律文件問答系統。近期因營運成本壓力，公司要求在不更換模型且不影響回答品質的前提下，將整體 token 成本降低至目前的 60%，且目前成本主要集中於輸入 tokens。工程師在檢查系統後，盤點出目前的使用情況如下：◆使用模型：GPT-4o（輸入$5／1M tokens、輸出 $15／1M tokens）◆每次查詢：將前 10 筆檢索文件區塊全部加入 Prompt（每塊約 600 tokens）◆System Prompt：每次請求均包含約 500tokens 的公司背景說明◆對話機制：保留完整對話歷史，平均累積約 8,000tokens◆每日查詢量：約 5,000 次◆平均輸出：約 300tokens／次在上述限制與系統現況下，請問下列哪一項優化組合，最能在維持回答品質的前提下有效降低 token 成本？",
    "options": [
      "將輸出 max_tokens 從 1,000 壓縮至 200，強制模型給出更短的回答，以降低輸出費用；",
      "將 System Prompt 改為 Prompt Caching 或靜態前綴重用，並對對話歷史實作摘要壓縮，以保留語意而非完整對話；",
      "將所有查詢改為 Batch API 模式送出，透過非同步處理降低單次費用；",
      "在 Prompt 中明確要求模型「回答時盡量簡短」，透過指令引導模型自行縮減輸出長度"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：將 System Prompt 改為 Prompt Caching 或靜態前綴重用，並對對話歷史實作摘要壓縮，以保留語意而非完整對話；。"
  },
  {
    "id": "past-115-1-s1-22",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 22,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融科技公司計劃建立完整的 AI 開發到維運流程，希望實現「模型訓練→測試→部署→監控→再訓練」的自動化流程串接，並確保線上模型的版本可追溯。技術主管建議引入 MLOps 框架。MLOps 在此 AI 開發生命週期中的核心角色為何？",
    "options": [
      "專注於訓練資料的標註與品質控管，以提升模型訓練效果；",
      "透過自動化模型搜尋與參數調整，降低模型開發門檻；",
      "建立機器學習流程的自動化與版本管理機制，支援模型部署、監控與持續更新；",
      "確保模型在部署後維持穩定效能，減少後續維運與更新需求"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：建立機器學習流程的自動化與版本管理機制，支援模型部署、監控與持續更新；。"
  },
  {
    "id": "past-115-1-s1-23",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 23,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某製造業公司計劃將 AI 導入生產線瑕疵檢測流程，目前瑕疵樣本約 800 張（含各類瑕疵類型）、正常樣本約 15,000 張，現有 IT 基礎設施為地端伺服器且無 GPU，且生產線環境需於地端即時完成推論，檢測需求為每片零件須在 100 毫秒內完成檢測，且預算為中等、無法於短期內大規模採購硬體。工程師正在規劃第一階段的 AI 導入方案，請問下列哪一種規劃最為合適？",
    "options": [
      "從零訓練一個大型 CNN 模型，並採購高階 GPU 伺服器以滿足推論速度需求；",
      "採用預訓練模型進行 Transfer Learning，針對瑕疵樣本進行 Fine-tuning，並使用模型量化（Quantization）或蒸餾（Distillation）技術壓縮模型以符合延遲需求，部署於地端；",
      "因樣本數不足，建議先暫緩 AI 導入，待蒐集至少 10 萬筆瑕疵樣本後再啟動專案；",
      "將所有影像上傳至雲端，使用第三方 AutoML 平台自動訓練並部署，以節省開發時間"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用預訓練模型進行 Transfer Learning，針對瑕疵樣本進行 Fine-tuning，並使用模型量化（Quantization）或蒸餾（Distillation）技術壓縮模型以符合延遲需求，部署於地端；。"
  },
  {
    "id": "past-115-1-s1-24",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 24,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某即時詐欺偵測系統對模型回應時間有嚴格限制，若推論延遲過高將影響交易核准流程。維運工程師在模型上線前進行延遲測試（Latency Testing）時，主要評估的目標為何？",
    "options": [
      "評估模型推論過程中的記憶體使用量，以確認部署資源是否足夠；",
      "驗證模型對異常或攻擊輸入的穩定性與安全性；",
      "評估模型在不同使用者族群上的預測結果是否一致；",
      "評估模型從接收輸入到產生預測結果所需的回應時間是否符合系統要求"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：評估模型從接收輸入到產生預測結果所需的回應時間是否符合系統要求。"
  },
  {
    "id": "past-115-1-s1-25",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 25,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某企業欲將其 AI 輔助決策系統提交給外部稽核單位審查，並宣稱符合 NIST《AI風險管理框架》（NISTAI RMF）中可驗證性（Verifiability）的要求。為讓第三方稽核人員能獨立重現模型評估結果，下列哪一項技術實踐最直接符合此要求？",
    "options": [
      "將模型測試準確率優化至 99%以上，以達到業界公認的高可靠標準；",
      "建立可追溯的測試資料與評估流程，並記錄模型訓練與評估過程中的關鍵設定，以確保結果可被重現；",
      "加快模型迭代速度，縮短版本發布週期以盡快累積外部驗證數據；",
      "擴充訓練資料量至數百萬筆，以統計方式確保模型的泛化能力達標"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：建立可追溯的測試資料與評估流程，並記錄模型訓練與評估過程中的關鍵設定，以確保結果可被重現；。"
  },
  {
    "id": "past-115-1-s1-26",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 26,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某銀行導入一套 AI 授信審核系統，針對貸款申請人進行自動化決策。監理單位要求系統必須符合負責任 AI（ResponsibleAI）原則，特別是對被拒絕的申請人提供每筆決策的具體理由說明。從技術與合規的角度，此要求的核心能力需求為何？",
    "options": [
      "系統必須在收到申請後 10 秒內自動刪除申請人個資；",
      "系統應隨機調整部分決策以確保多元性；",
      "系統必須保證所有決策準確率達到 100%；",
      "系統必須具備可解釋性（Explainability）能力，能提供特徵貢獻說明"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：系統必須具備可解釋性（Explainability）能力，能提供特徵貢獻說明。"
  },
  {
    "id": "past-115-1-s1-27",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 27,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫院計劃導入一套 AI 醫療影像診斷輔助系統，用於輔助放射科醫師判讀 CT 影像。院方技術委員會討論在人命攸關且需確保最終臨床決策責任由人類承擔的情境下，從系統設計架構層面，最關鍵的安全機制為何？",
    "options": [
      "採用人機協作（Human-in-the-Loop, HITL）架構，由醫師最終審核決策；",
      "模型信心低於閾值（Threshold）即自動關機；",
      "隨機切換模型並以多數決決策；",
      "對輸入影像加入隨機擾動"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：採用人機協作（Human-in-the-Loop, HITL）架構，由醫師最終審核決策；。"
  },
  {
    "id": "past-115-1-s1-28",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 28,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "一位資料科學家使用 XGBoost 建立信用風險評分模型，並使用 SHAP 解釋模型對某申請人的預測結果。SHAP summary plot 顯示該樣本中「月收入」的 SHAP 值為-2.3，「負債比率」為+1.8，其中 SHAP 值代表各特徵對模型輸出值的影響程度與方向。關於對 SHAP 值的解讀，下列敘述何者正確？",
    "options": [
      "「月收入」的 SHAP 值-2.3 代表該特徵使此申請人的違約預測機率降低了 2.3%；",
      "「月收入」的 SHAP 值-2.3 代表相對於基準值（base value），此特徵將模型輸出值往負方向推移了 2.3 個單位，表示月收入對該申請人有降低違約風險的貢獻；",
      "SHAP 值為負代表該特徵對模型整體來說是不重要的特徵，應考慮從模型中移除；",
      "負債比率」SHAP 值+1.8 代表負債比率是整個訓練集中對違約影響最大的特徵"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：「月收入」的 SHAP 值-2.3 代表相對於基準值（base value），此特徵將模型輸出值往負方向推移了 2.3 個單位，表示月收入對該申請人有降低違約風險的貢獻；。"
  },
  {
    "id": "past-115-1-s1-29",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 29,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師為一套卷積神經網路（CNN）的醫療影像輔助診斷系統設計模型可解釋性機制。該系統需滿足下列需求：1.能向醫師說明影像被判定為異常的原因2.支援近即時推論，每次解釋須於 200 毫秒內完成，且不可進行大量重複採樣計算3.解釋結果須以影像中具代表性的視覺化像素區域呈現在此情境下，下列何種方法最為適合？",
    "options": [
      "使用 LIME，透過超像素擾動取樣分析影像區塊對預測的影響；",
      "使用 SHAP KernelExplainer，計算各像素的 Shapley 值並疊加於原始影像；",
      "使用 Grad-CAM（Class Activation Map），透過梯度反向傳播生成類別關注區域；",
      "使用 SHAP TreeExplainer，計算特徵貢獻並以熱力圖呈現"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：使用 Grad-CAM（Class Activation Map），透過梯度反向傳播生成類別關注區域；。"
  },
  {
    "id": "past-115-1-s1-30",
    "subject": 1,
    "topic": "模型訓練",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 30,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料科學家正在處理一份包含 200 個感測器特徵的工廠設備監測資料集，為了降低模型複雜度並保留主要變異資訊，他先對資料進行標準化（Standardization），再使用主成分分析（PCA）進行降維。在 PCA 過程中，為了找出能最大化資料變異量的主成分方向，演算法主要依賴哪一項數學操作？",
    "options": [
      "透過對目標函數進行梯度下降（Gradient Descent）最佳化，迭代求得主成分方向；",
      "根據特徵與目標變數之間的相關性（Correlation）進行排序，選擇重要特徵；",
      "對 資 料 的 協 方 差 矩 陣 （Covariance Matrix） 進 行 特 徵 值 分 解 （Eigen Decomposition），取得對應主要變異方向的特徵向量；",
      "對資料矩陣進行卷積運算（Convolution），擷取特徵之間的局部關係"
    ],
    "answer": 2,
    "explanation": "PCA 常透過協方差矩陣的特徵值與特徵向量，找出變異量最大的正交方向。"
  },
  {
    "id": "past-115-1-s1-31",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 31,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料工程師嘗試對包含 300 個特徵的使用者行為資料集使用 DBSCAN 進行群集分析，但發現幾乎所有資料點都被判定為雜訊點（Noise Points），難以形成有意義的群集，即使不斷調整ε（Epsilon）與 MinPts 參數也無濟於事。請問下列何者為此問題最可能的根本原因？",
    "options": [
      "在高維空間中，維度詛咒（Curse of Dimensionality）使得資料點之間的距離趨於相近，導致 DBSCAN 的密度估計失效；",
      "DBSCAN 演算法僅適用於低維資料，無法處理高維資料；",
      "300 個特徵的資料必然不具備群集結構，因此無法進行有效的分群；",
      "高維空間中核心點的數量會受到數學限制，導致無法形成群集"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：在高維空間中，維度詛咒（Curse of Dimensionality）使得資料點之間的距離趨於相近，導致 DBSCAN 的密度估計失效；。"
  },
  {
    "id": "past-115-1-s1-32",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 32,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師正在實作一個 CNN 影像分類模型，在 PyTorch 中定義模型架構時，需要在卷積擷取特徵後接上全連結層（Fully Connected Layer）進行分類。在模型程式碼中，需要在卷積輸出與全連結層之間插入什麼操作？",
    "options": [
      "使用全域平均池化（Global Average Pooling）將特徵圖壓縮後再接全連結層；",
      "使用 Flatten 將特徵圖展平成一維向量；",
      "直接將卷積輸出接到全連結層，系統會自動轉換維度；",
      "先對特徵圖做 Softmax，再輸入全連結層"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：使用 Flatten 將特徵圖展平成一維向量；。"
  },
  {
    "id": "past-115-1-s1-33",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 33,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某自駕車公司的 AI 訓練團隊面臨標註成本高的問題，無法取得足夠的真實惡劣天氣（大雨、濃霧）駕駛場景資料，工程師提議使用合成資料（Synthetic Data）來補充訓練集。請問下列何者最能正確敘述合成資料在 AI 訓練中的角色？",
    "options": [
      "合成資料主要用於文字任務的資料擴增，影像任務仍需依賴真實資料；",
      "合成資料可完全取代真實資料，直接用於模型訓練；",
      "合成資料主要用於降低模型推論時的計算成本；",
      "合成資料可在控制條件下產生多樣化場景，用於擴充訓練資料並提升模型的泛化能力"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：合成資料可在控制條件下產生多樣化場景，用於擴充訓練資料並提升模型的泛化能力。"
  },
  {
    "id": "past-115-1-s1-34",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 34,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某廣告技術公司的點擊率（CTR）預測系統每天新增數百個用戶行為特徵（如新廣告位、新設備類型），特徵空間持續動態擴展。若採用傳統靜態模型每週批次重訓一次，會導致嚴重的模型過期問題。為在特徵空間頻繁變化的情況下維持模型即時準確度，最適合的模型架構方向為何？",
    "options": [
      "採用傳統靜態羅吉斯迴歸（Logistic Regression），縮短批次重訓週期從每週改為每日；",
      "採用支援增量學習（Incremental Learning）的模型，使模型能隨新資料即時更新並適應新增特徵，而不需重新訓練整個模型；",
      "採用固定架構的深度神經網路（DNN），每次有新特徵時重新定義輸入層後全量重訓；",
      "改用預訓練圖神經網路（GNN），透過圖結構建立特徵間的關聯，自動應對新增特徵"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用支援增量學習（Incremental Learning）的模型，使模型能隨新資料即時更新並適應新增特徵，而不需重新訓練整個模型；。"
  },
  {
    "id": "past-115-1-s1-35",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 35,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某生物醫學研究機構正在建構一個整合「基因序列特徵」與「電子病歷文本特徵」的疾病風險預測模型。由於高維數值特徵和語意文本特徵的性質差異顯著，請問下列哪一種特徵處理與選擇策略最為合適？",
    "options": [
      "將所有特徵合併為單一特徵矩陣後，使用主成分分析（PCA）進行降維，作為模型輸入；",
      "採分層策略，先對基因序列特徵進行特徵選擇，再對文本特徵進行語意表示，最後將兩類特徵融合（Feature Fusion）後輸入模型；",
      "將所有特徵合併後，使用隨機森林（Random Forest）的特徵重要性進行一次性排序與篩選；",
      "將文本特徵轉換為簡單統計特徵（如詞頻）後與基因特徵一併建模，以降低特徵處理複雜度"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採分層策略，先對基因序列特徵進行特徵選擇，再對文本特徵進行語意表示，最後將兩類特徵融合（Feature Fusion）後輸入模型；。"
  },
  {
    "id": "past-115-1-s1-36",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 36,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某公司希望開發一個工業零件瑕疵辨識分類模型，共有 10 個類別，但每類僅約50 張人工標註影像（總計約 500 張）。由於標註成本高昂，短期內無法擴充資料集。在此情境下，工程師需要在有限標註資料下建構高效能模型。請問下列哪一種策略最為適合？",
    "options": [
      "使用在大型資料集預訓練完成的卷積神經網路（CNN），並進行遷移學習微調；",
      "從頭訓練大型 Vision Transformer（ViT），完全使用現有 500 張影像；",
      "使用 K-means 對影像進行分群，並直接將群集結果作為分類模型輸出；",
      "複製既有的資料以增加標註影像數量，並從頭訓練深度 CNN 模型"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：使用在大型資料集預訓練完成的卷積神經網路（CNN），並進行遷移學習微調；。"
  },
  {
    "id": "past-115-1-s1-37",
    "subject": 1,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 37,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某製造廠開發產線瑕疵檢測模型時，資料集存在嚴重類別不平衡問題，其中良品約占 99%，瑕疵品僅占 1%。若直接使用原始資料進行訓練，模型容易偏向預測多數類別（良品），導致對少數類別（瑕疵品）辨識能力不足。在不調整模型架構與學習演算法的前提下，僅透過資料前處理方式改善此問題，下列何者最適當？",
    "options": [
      "使用 SMOTE 等過採樣方法進行少數類別擴增；",
      "加入 L1／L2 正則化（Regularization）以防止過擬合；",
      "大幅增加深度神經網路的層數，以強化特徵萃取能力；",
      "複製更多良品數據，以進一步提升模型的準確率（Accuracy）"
    ],
    "answer": 0,
    "explanation": "SMOTE 可在訓練資料中產生合成少數類樣本，改善模型只偏向多數類的問題。"
  },
  {
    "id": "past-115-1-s1-38",
    "subject": 1,
    "topic": "模型訓練與評估",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 38,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某 IoT 平台接收工廠溫度感測器資料，發現在常態分佈（均值 25°C，標準差 2°C）的數萬筆紀錄中，出現數筆「999°C」的極端值，研判為感測器通訊錯誤（網路封包延遲導致數值溢位）所致，且該異常數值在實際情況下不可能發生。在進行模型訓練前的資料清洗階段，針對這類離群值，最適當的處理策略為何？",
    "options": [
      "保留所有原始數值，並使用平均數（Mean）作為特徵輸入模型；",
      "對數據進行 Z-score 標準化，使數值落於約[-3, 3]範圍；",
      "將 999°C 以獨熱編碼（One-Hot Encoding）轉為獨立類別特徵；",
      "刪除異常的 999°C 記錄，或以中位數（Median）進行填補"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：刪除異常的 999°C 記錄，或以中位數（Median）進行填補。"
  },
  {
    "id": "past-115-1-s1-39",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 39,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 平台工程師正在為多模態模型訓練系統規劃資料儲存架構，需要同時處理原始影像、非結構化文本，以及經過整理的結構化特徵資料。在此情境下，應如何選擇資料湖（Data Lake）與資料倉儲（Data Warehouse）的使用方式？",
    "options": [
      "將原始影像與文本資料儲存在 Data Lake，將整理後的結構化特徵資料儲存在Data Warehouse；",
      "將所有資料統一儲存在 Data Warehouse，以提升查詢效率；",
      "將所有資料統一儲存在 Data Lake，但犧牲結構化資料的查詢效率；",
      "僅將原始影像資料儲存在 Data Lake，其餘資料統一存入 Data Warehouse"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：將原始影像與文本資料儲存在 Data Lake，將整理後的結構化特徵資料儲存在Data Warehouse；。"
  },
  {
    "id": "past-115-1-s1-40",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 40,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某智慧製造公司在產線上部署工業相機進行即時外觀瑕疵檢測，原先將影像傳至雲端進行 AI 推論，但因網路延遲與連線不穩導致系統無法滿足即時需求（需低於 200ms）。工程師因此改為將模型部署於產線端的邊緣裝置後，但仍未達系統需求。在不更換硬體設備的前提下，下列哪一組技術最能有效降低推論延遲，同時維持合理準確率？",
    "options": [
      "減少訓練資料的使用數量，並重新訓練模型以提升推論效率；",
      "使用批次推論（Batch Inference）處理多張影像以提升計算效率；",
      "採用模型集成（Model Ensemble），透過多模型投票提升準確率；",
      "將模型由 FP32 量化為 INT8，並進行推論加速優化"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：將模型由 FP32 量化為 INT8，並進行推論加速優化。"
  },
  {
    "id": "past-115-1-s1-41",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 41,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 影像辨識平台以單一 GPU 伺服器提供多租戶推論服務，系統長期觀察到GPU 使用率約維持在 60%左右，且在執行過程中可觀察到 GPU kernel 之間存在明顯閒置間隔，單次推論多以小批次方式執行。然而，在尖峰時段時，請求延遲會出現明顯波動甚至突增。同時，CPU 與記憶體資源使用率均未達瓶頸，且系統團隊已排除硬體、網路與請求併發控制異常。在此情境下，請判斷最可能造成問題的原因為何？",
    "options": [
      "GPU 排程策略與批次大小設定不當，導致 GPU 運算單元未被有效利用；",
      "請求併發控制機制不佳，導致多個請求同時搶占 GPU Context 資源造成延遲；",
      "GPU 硬體效能不足，無法支撐推論負載；",
      "模型未進行量化優化，導致推論計算成本過高"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：GPU 排程策略與批次大小設定不當，導致 GPU 運算單元未被有效利用；。"
  },
  {
    "id": "past-115-1-s1-42",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 42,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某保險公司將理賠金額預測模型正式部署上線，MLOps 團隊設計監控機制。三個月後模型整體均方根誤差（RMSE）無明顯變化，但業務單位反映高額理賠案件的預測誤差明顯增加。經分析，高額理賠案件僅佔約 5%的樣本比例，且未被監控機制及時發現。請問最可能的設計缺陷為何？",
    "options": [
      "監控頻率不足，應由每日批次監控改為即時串流監控；",
      "高額理賠案件屬於長尾分布，難以透過監控指標偵測，因此無法透過監控機制發現問題；",
      "RMSE 無法有效反映高額誤差，應改以平均絕對誤差（MAE）作為主要監控指標；",
      "僅監控整體 RMSE，未針對不同理賠金額區間進行分群監控"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：僅監控整體 RMSE，未針對不同理賠金額區間進行分群監控。"
  },
  {
    "id": "past-115-1-s1-43",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 43,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台的演算法工程師開發了一個新版商品推薦模型，在離線 A/B 測試中，新模型的各項評估指標（AUC、NDCG@10）均顯著優於現行線上模型。然而，離線測試無法完全反映真實使用者的互動行為（點擊、購買、停留時間）。在正式全面上線前，若希望在可控制風險下量化真實業務指標，應採用下列何種線上驗證策略？",
    "options": [
      "影子模式（Shadow Mode）：新舊模型同時產生預測，但僅顯示舊模型結果，於後端比較輸出差異；",
      "回測（Backtesting）：使用歷史日誌模擬模型表現作為上線依據；",
      "金絲雀發布（Canary Release）：將 1–5%使用者流量導向新模型，量測 CTR、CVR 等指標並逐步擴量；",
      "負載測試（Load Testing）：於測試環境進行高流量壓力測試後直接全面上線"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：金絲雀發布（Canary Release）：將 1–5%使用者流量導向新模型，量測 CTR、CVR 等指標並逐步擴量；。"
  },
  {
    "id": "past-115-1-s1-44",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 44,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某 MLOps 工程師正在設計 AI 模型的推論服務 API，需要處理使用者上傳的高解析度影像（平均 5MB）進行即時分類。在 RESTfulAPI 設計時，選擇 HTTP 請求方法與資料傳輸格式的最佳實踐為何？",
    "options": [
      "使用 HTTP GET 方法，將影像資料 Base64 編碼後附加於 URL Query String中；",
      "採用 HTTP POST 請求，將影像資料以 multipart/form-data 或 application/octet-stream 傳輸於 Request Body；",
      "使用 HTTP PUT 方法，透過 Content-Type: application/xml 傳遞影像資料；",
      "要求客戶端下載模型於本地推論，僅回傳分類結果"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：採用 HTTP POST 請求，將影像資料以 multipart/form-data 或 application/octet-stream 傳輸於 Request Body；。"
  },
  {
    "id": "past-115-1-s1-45",
    "subject": 1,
    "topic": "自然語言與生成式 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 45,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 平台整合多個外部 AI 微服務（語音辨識 API、NLP 分析 API、知識圖譜查詢服務），在高峰期間某外部服務偶發延遲或逾時（Timeout），導致請求鏈路壅塞，最終造成平台級服務中斷（Cascading Failure）。為從架構層面預防此類連鎖故障，最有效的設計模式為何？",
    "options": [
      "將所有外部 API 呼叫改為同步串行處理，並取消逾時限制，確保每個請求皆完成後再繼續；",
      "為外部服務導入斷路器模式（Circuit Breaker），在異常時暫停呼叫並提供替代回應；",
      "擴充各微服務的執行緒池（Thread Pool）上限，以提升併發處理能力；",
      "停用服務健康檢查，減少不必要的額外負載"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：為外部服務導入斷路器模式（Circuit Breaker），在異常時暫停呼叫並提供替代回應；。"
  },
  {
    "id": "past-115-1-s1-46",
    "subject": 1,
    "topic": "電腦視覺",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 46,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫院計劃建立混合雲 AI 平台：使用公有雲 GPU 叢集進行 CT 影像模型訓練，但基於 HIPAA（Health Insurance Portability and Accountability Act）法規要求，患者影像原始資料不得離開醫院院內環境。下列何者最符合「利用公有雲算力訓練模型」與「不傳輸原始患者資料」雙重限制的技術方案？",
    "options": [
      "將患者影像資料以 AES-256 加密後上傳至公有雲，並於雲端解密後進行模型訓練；",
      "在院內部署同態加密（Homomorphic Encryption）模組，對推論請求進行加密處理；",
      "採用聯邦學習（Federated Learning）於院內訓練模型，僅傳送模型更新至雲端聚合，原始資料不外流；",
      "建立專線 VPN 連接醫院與雲端，以網路層安全保護資料傳輸"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：採用聯邦學習（Federated Learning）於院內訓練模型，僅傳送模型更新至雲端聚合，原始資料不外流；。"
  },
  {
    "id": "past-115-1-s1-47",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 47,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台將新的推薦模型部署至線上系統，為降低風險，團隊採用漸進式部署策略（Phased Rollout），先將新模型流量從 5%逐步提升至 100%。在部署初期，團隊發現轉換率（Conversion Rate）略有提升，但在流量提升至 30%時，系統延遲（Latency）明顯上升，且部分使用者體驗變差。請問在此情境下，最適當的下一步策略為何？",
    "options": [
      "立即將新模型全面部署至 100%，以觀察整體效果並評估系統表現變化；",
      "還原（Rollback）至舊模型並停止新模型測試流程，以確保系統穩定與使用者體驗品質；",
      "維持目前 30%流量並持續觀察，即使延遲問題存在也暫不進行調整；",
      "暫停流量提升，針對延遲問題進行效能分析與優化後再繼續部署"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：暫停流量提升，針對延遲問題進行效能分析與優化後再繼續部署。"
  },
  {
    "id": "past-115-1-s1-48",
    "subject": 1,
    "topic": "AI 治理與風險",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 48,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某銀行的信用卡風控模型已穩定上線一年，主要用於偵測盜刷交易提醒。近期在未對模型或特徵工程進行調整的情況下，系統觀察到深夜電商交易的核准率明顯上升，盜刷攔截率下降，但模型 AUC 幾乎維持不變，且交易金額、地區與裝置等特徵分布未出現明顯變化。進一步分析發現，疫情後使用者行為改變，使原本被視為高風險的交易型態逐漸轉為一般消費。下列何者最能敘述此現象的原因？",
    "options": [
      "資料漂移（Data Drift），因輸入特徵分布發生變化；",
      "訓練與服務偏差（Training-Serving Skew），因線上與離線特徵處理不一致；",
      "概念漂移（Concept Drift），因特徵與目標標籤之間的關聯性改變；",
      "決策閾值偏移（Threshold Shift），因分類門檻設定不當導致預測偏差"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：概念漂移（Concept Drift），因特徵與目標標籤之間的關聯性改變；。"
  },
  {
    "id": "past-115-1-s1-49",
    "subject": 1,
    "topic": "部署與 MLOps",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 49,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某零售電商平台已建立模型監控儀表板，用於追蹤線上推薦模型的運作狀態與效能 表 現。 維 運 工 程 師 需 判 斷 哪 些 指 標 屬 於 「 線 上 持 續 監 控 （Continuous Monitoring）」的範疇。下列指標中，哪一項最不適合在即時監控系統中追蹤，而應改由離線實驗追蹤系統管理？",
    "options": [
      "訓練實驗中每個 Epoch 的學習率（Learning Rate）變化曲線與超參數（Hyperparameter）設定軌跡；",
      "線上推論 API 的 P50/P95/P99 回應延遲與每日請求量（RPS）趨勢；",
      "輸入特徵分佈的族群穩定性指數（Population Stability Index, PSI），偵測資料漂移；",
      "模型預測結果分佈（如 CTR）與定期回收的人工標註結果之對比"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：訓練實驗中每個 Epoch 的學習率（Learning Rate）變化曲線與超參數（Hyperparameter）設定軌跡；。"
  },
  {
    "id": "past-115-1-s1-50",
    "subject": 1,
    "topic": "多模態 AI",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 50,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%B8%80%E7%A7%91_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%8A%80%E8%A1%93%E6%87%89%E7%94%A8%E8%88%87%E8%A6%8F%E5%8A%83_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003359.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫療團隊建立肺炎診斷系統，採用晚期融合（Late Fusion）策略，將胸腔 X 光影像與病患問診文字分別進行預測後再整合結果。測試發現，當問診紀錄品質不佳（如描述簡短或資訊缺漏）時，整體模型效能僅小幅下降。關於此現象，下列何者最不可能為其原因？",
    "options": [
      "各模態獨立進行預測，可降低單一模態品質不佳對整體結果的影響",
      "融合階段可調整不同模態的權重，使低品質模態影響降低",
      "各模態使用獨立模型，使錯誤不會在特徵層被放大",
      "晚期融合會在輸入階段整合多模態特徵，因此能避免低品質資料影響"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：晚期融合會在輸入階段整合多模態特徵，因此能避免低品質資料影響。"
  },
  {
    "id": "past-115-1-s2-01",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 1,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "工程師使用盒鬚圖（Box Plot）比較三個城市的房價分布，觀察到城市 A 的盒子很短但鬚很長，城市 B 的盒子很長且對稱，城市 C 的中位數位置明顯偏向盒子下方。依統計圖形判讀原則，下列敘述何者正確？",
    "options": [
      "城市 A 中段房價集中但存在極端值；城市 C 中位數偏低，資料呈右偏分布；",
      "城市 A 房價集中且離群值少；城市 C 資料呈左偏分布；",
      "城市 B 的盒子較長代表房價變異較大；城市 C 呈左偏分布；",
      "盒鬚圖無法判斷偏態，需搭配直方圖才能得出以上結論"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：城市 A 中段房價集中但存在極端值；城市 C 中位數偏低，資料呈右偏分布；。"
  },
  {
    "id": "past-115-1-s2-02",
    "subject": 2,
    "topic": "大數據處理分析與應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 2,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "下圖為吉尼不純度（Gini Impurity）的計算公式，在決策樹（Decision Tree）中，吉尼不純度用於評估節點分裂的品質。關於吉尼不純度，下列敘述何者不正確？",
    "options": [
      "公式中的 pᵢ 代表第 i 類在該節點中的樣本數，並直接帶入公式計算；",
      "公式中的 k 代表節點內資料的類別數量；",
      "吉尼不純度用於衡量節點內資料的類別混雜程度，數值越高代表越混雜；",
      "當節點內所有樣本屬於同一類別時（完全純淨），吉尼不純度為 0"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：公式中的 pᵢ 代表第 i 類在該節點中的樣本數，並直接帶入公式計算；。"
  },
  {
    "id": "past-115-1-s2-03",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 3,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某物流平台要預測「每小時客服來電數量」，資料顯示平均每小時 12 通，且來電事件彼此獨立，並在固定時間區間內發生率穩定。工程師在選擇機率模型時，應優先考慮哪個分布？若實際資料的變異數明顯大於平均數，應如何調整？",
    "options": [
      "使用常態分布（Normal Distribution）；變異數偏大時改用 t 分布；",
      "使用卜瓦松分布（Poisson Distribution）；變異數>平均數時改用負二項分布（Negative Binomial）；",
      "使用卜瓦松分布（Poisson Distribution）；變異數偏大時增加樣本數即可修正；",
      "使用二項分布（Binomial Distribution）；變異數偏大時改用卜瓦松分布（Poisson Dstribution）"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：使用卜瓦松分布（Poisson Distribution）；變異數>平均數時改用負二項分布（Negative Binomial）；。"
  },
  {
    "id": "past-115-1-s2-04",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 4,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師使用 MLflow 進行實驗追蹤，評估三種不同學習率（0.001、0.01、0.1）對同一模型在驗證資料集上的損失表現。每種學習率皆以不同隨機種子重複訓練 10 次，形成三組彼此獨立的樣本資料。經檢查後，這些資料近似常態分布且變異數相近。工程師希望判斷三組平均損失是否存在顯著差異，同時避免因進行多次兩兩比較而提高第一類型錯誤率。請問下列何者為最適合採用的統計方法？",
    "options": [
      "單因子變異數分析（One-Way ANOVA）；",
      "獨立樣本 t 檢定（Independent Samples t-test）；",
      "卡方獨立性檢定（Chi-Square Test）；",
      "Wilcoxon 符號等級檢定（Wilcoxon Signed-Rank Test）"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：單因子變異數分析（One-Way ANOVA）；。"
  },
  {
    "id": "past-115-1-s2-05",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 5,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 團隊在模型上線後，透過監控系統持續追蹤輸入特徵的分布變化，系統使用 Z-score（Z）作為異常判斷依據，並設定當|Z| ≥ 2 時需觸發警示。假設該特徵近似常態分布，某次監控中發現某特徵值的 Z-score 為-2，請問就實務判讀而言，此數值最可能代表什麼意義？",
    "options": [
      "該特徵值低於該特徵歷史平均值 2 個標準差；",
      "該特徵值高於該特徵歷史平均值 2 個標準差；",
      "該特徵值等於該特徵的歷史平均值；",
      "Z-score 為負值代表該數值位於母體分布之外，無法以常態分布解釋"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：該特徵值低於該特徵歷史平均值 2 個標準差；。"
  },
  {
    "id": "past-115-1-s2-06",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 6,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "在 AI 模型評估的假說檢定框架中，「女士品茶」實驗是理解型一／型二錯誤的經典案例。實驗中某女士宣稱能分辨 8 杯奶茶中哪 4 杯先加牛奶，若以顯著水準 α=0.05 進行假說檢定，下列敘述何者不正確？",
    "options": [
      "虛無假說（H₀）為「女士無此能力（隨機猜測）」，對立假說（H₁）為「女士確實有此能力」；",
      "在 α=0.05 下，若女士完全答對（8 選 4 全對），其 p 值約為 1/70≈0.014，小於顯著水準，可達統計顯著；",
      "若女士完全答對且 p 值<α，則拒絕虛無假說，統計上支持女士有此能力；",
      "若女士未完全答對，則「接受虛無假說」，代表確認女士無此能力"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：若女士未完全答對，則「接受虛無假說」，代表確認女士無此能力。"
  },
  {
    "id": "past-115-1-s2-07",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 7,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫療 AI 研究團隊開發了一套個人化用藥劑量推薦系統，並設計實驗評估其效果。研究團隊招募 40 名高血壓患者，分別在導入 AI 推薦系統前後各測量一次收縮壓，且資料近似常態分布。研究目標是判斷同一批患者在依據 AI 推薦調整用藥劑量前後，血壓是否有顯著差異。請問此研究情境應選用哪種統計檢定方法？",
    "options": [
      "獨立樣本 t 檢定（Independent Samples t-test）；",
      "成對樣本 t 檢定（Paired Samples t-test）；",
      "單因子變異數分析（One-Way ANOVA）；",
      "魏克遜符號等級檢定（Wilcoxon Signed-Rank Test）"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：成對樣本 t 檢定（Paired Samples t-test）；。"
  },
  {
    "id": "past-115-1-s2-08",
    "subject": 2,
    "topic": "統計推論與假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 8,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "某咖啡店聲稱其平均外送時間為 36 分鐘，母體標準差為 16 分鐘。顧客保護團體抽樣9 筆訂單，發現平均外送時間為 40 分鐘。若採用右尾 Z 檢定（H₁: μ > 36），顯著水準α= 0.05（臨界值 Z₀.₀₅ = 1.645），請問 Z 值與檢定結果為何？（參考公式如下圖）",
    "options": [
      "Z ≈ 0.08，拒絕虛無假說；",
      "Z ≈ 0.08，不拒絕虛無假說；",
      "Z ≈ 0.75，拒絕虛無假說；",
      "Z ≈ 0.75，不拒絕虛無假說"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：Z ≈ 0.75，不拒絕虛無假說。"
  },
  {
    "id": "past-115-1-s2-09",
    "subject": 2,
    "topic": "假設檢定",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 9,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某生技公司正在進行新型 AI 輔助新藥篩選的臨床試驗，並將顯著水準由 α=0.05 降低至 α=0.01。在新藥療效安全試驗的情境下，此調整對統計檢定的直接影響為何？",
    "options": [
      "降低型二錯誤（Type II Error／β）的發生機率，減少未能偵測到有效藥物的風險；",
      "降低型一錯誤（Type I Error／α，偽陽性）的發生機率，減少將無效藥物誤判為有效並進入後續高成本試驗的風險；",
      "增加樣本數以提升統計功效（Statistical Power），進而改善估計精度；",
      "降低統計計算過程中的數值誤差，提高 p 值的精確度"
    ],
    "answer": 1,
    "explanation": "較小的 α 代表拒絕虛無假設的門檻更嚴格，因此會直接降低第一類錯誤機率。"
  },
  {
    "id": "past-115-1-s2-10",
    "subject": 2,
    "topic": "資料處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 10,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某團隊為職業籃球隊建立球員受傷風險預測模型，原始特徵 280 個。初始模型訓練集AUC 為 0.94、測試集僅 0.68，顯示嚴重過擬合。為改善模型，團隊進行以下處理步驟：第一步於全體資料（含測試集）上計算特徵間線性相關係數並移除高度相關特徵；第二步依模型重要性篩選特徵後重新訓練模型。最終測試集 AUC 提升至 0.81。關於上述調整流程，下列敘述何者最為正確？",
    "options": [
      "使用相關係數進行特徵篩選方向正確，主要問題在於相關係數門檻設定過高；",
      "在全體資料（含測試集）上進行特徵篩選會造成資料洩漏，且線性相關無法捕捉非線性關係；",
      "特徵篩選後需重新對測試集進行標準化，否則會影響模型表現；",
      "測試集表現提升代表過擬合已解決，流程可直接部署"
    ],
    "answer": 1,
    "explanation": "chunksize 會把大型 CSV 分成多批處理，不必一次把完整資料載入記憶體。"
  },
  {
    "id": "past-115-1-s2-11",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 11,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某團隊為電信公司建立用戶月租方案續約預測模型，資料集包含兩個類別特徵：「客服評價」共有 5 個等級（非常不滿意至非常滿意），具明確順序關係；「居住縣市」共有22 個不同類別，類別之間無順序關係。團隊計劃分別以 Logistic Regression 與 XGBoost訓練模型，並對上述特徵進行編碼。請問下列哪個編碼方案最適當？",
    "options": [
      "兩模型皆將「客服評價」與「居住縣市」進行 One-Hot Encoding，保留全部欄位並使用相同特徵矩陣訓練模型；",
      "Logistic Regression 將「客服評價」做 Ordinal Encoding、「居住縣市」以歷史續約率進行編碼且於資料切分前計算；XGBoost 對兩個特徵皆採 Ordinal Encoding 處理；",
      "Logistic Regression 將「客服評價」做 Ordinal Encoding、「居住縣市」進行 One-Hot Encoding 並採 Drop First；XGBoost 將「客服評價」採 Ordinal Encoding，「居住縣市」以類別型態輸入並啟用 enable_categorical；",
      "兩個模型均將「客服評價」以平均續約率進行編碼，「居住縣市」先做 One-Hot Encoding 再以 PCA 降維，並統一作為兩模型輸入特徵"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：Logistic Regression 將「客服評價」做 Ordinal Encoding、「居住縣市」進行 One-Hot Encoding 並採 Drop First；XGBoost 將「客服評價」採 Ordinal Encoding，「居住縣市」以類別型態輸入並啟用 enable_categorical；。"
  },
  {
    "id": "past-115-1-s2-12",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 12,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料工程師在建構 AI 訓練資料處理流程時，需要處理一個 50GB 的 CSV 檔案，其大小遠超過系統可用記憶體。他使用 Python 的 Pandas 進行資料前處理，但直接呼叫pd.read_csv()時出現記憶體溢位（Out of Memory, OOM）錯誤。在不改用其他分散式框架的前提下，下列哪個參數最能有效解決此問題？",
    "options": [
      "nrows=10000：限制僅讀取前 N 筆資料以避免記憶體溢位；",
      "usecols=0.5：隨機載入 50%的資料欄位，以減半記憶體使用量；",
      "chunksize=10000：分批讀取資料並逐批處理，避免一次載入整個檔案；",
      "dtype：指定欄位資料型別以降低記憶體使用量"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：chunksize=10000：分批讀取資料並逐批處理，避免一次載入整個檔案；。"
  },
  {
    "id": "past-115-1-s2-13",
    "subject": 2,
    "topic": "大數據與資料儲存",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 13,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台正在重構商品資料架構，需同時支援三個系統：商品管理後台需處理結構化與半結構化資料（如巢狀庫存與不同類別商品欄位差異），並支援複雜條件查詢；AI推薦系統需儲存高維向量（1,536 維）並進行高效相似度搜尋（高 QPS）；即時庫存服務則要求 ACID 且延遲低於 10ms，以避免超賣。在此情境下，哪種資料庫架構最適合？",
    "options": [
      "全部使用關聯式資料庫，透過 JSON 欄位儲存巢狀資料，並以延伸套件支援向量搜尋，同時以資料列鎖（Row-level Lock）處理庫存扣減；",
      "商品資料使用文件型資料庫，向量搜尋使用專用向量資料庫，庫存服務使用關聯式資料庫，各系統依需求選擇最適合的資料庫；",
      "全部使用文件型資料庫，同時處理商品資料、向量搜尋與庫存服務，以統一技術棧降低維運複雜度；",
      "商品與向量資料使用搜尋引擎型資料庫，並以文件更新機制處理庫存扣減"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：商品資料使用文件型資料庫，向量搜尋使用專用向量資料庫，庫存服務使用關聯式資料庫，各系統依需求選擇最適合的資料庫；。"
  },
  {
    "id": "past-115-1-s2-14",
    "subject": 2,
    "topic": "資料安全與隱私",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 14,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 平台的資料量已達 PB 級，單一資料庫節點已無法負荷，決定採用分片（Sharding）策略。下列何者為 Sharding 設計的主要目的？",
    "options": [
      "增加資料備份數量以提升安全性；",
      "將查詢結果預先計算以降低延遲；",
      "將資料水平分割以提升擴展性與負載均衡；",
      "將資料壓縮以減少儲存成本"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：將資料水平分割以提升擴展性與負載均衡；。"
  },
  {
    "id": "past-115-1-s2-15",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 15,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某資料工程師在建構大規模影像資料處理流程時，需要處理數千萬筆訓練影像，並發現模型出現嚴重的過度擬合（Overfitting）：訓練集準確率達 99%，但驗證集僅有 72%。在不改變模型架構的前提下，下列哪一項「資料處理層面」的調整最無法有效改善過度擬合，甚至可能使問題惡化？",
    "options": [
      "在資料處理流程中加入資料增強（DataAugmentation），於訓練時動態生成多樣化影像樣本；",
      "擴充資料來源，收集更多不同場景與條件的影像，以提升訓練資料分布的多樣性；",
      "為了提升資料處理吞吐量（Throughput），預先將影像轉為固定特徵並快取（Cache），反覆使用相同訓練資料以加速訓練流程；",
      "在資料前處理階段進行資料清理，移除標註錯誤或品質不佳的影像資料"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：為了提升資料處理吞吐量（Throughput），預先將影像轉為固定特徵並快取（Cache），反覆使用相同訓練資料以加速訓練流程；。"
  },
  {
    "id": "past-115-1-s2-16",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 16,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師在建立推薦系統時，評估使用奇異值分解（Singular Value Decomposition, SVD）對使用者-商品評分矩陣進行潛在語意分析（Latent SemanticAnalysis, LSA）。關於 SVD的數學性質，下列何者不正確？",
    "options": [
      "SVD 只能分解方陣（Square Matrix），無法應用於行列數不相等的長方形矩陣；",
      "SVD 常用於降維（Dimensionality Reduction），透過保留最大的 k 個奇異值來近似原始矩陣（截斷 SVD）；",
      "SVD 比 PCA 更一般化，因為 PCA 可視為對資料的共變異數矩陣（Covariance Matrix）進行的特殊 SVD 運算；",
      "LSA 是 SVD 在文字-文件矩陣上的應用，透過截斷 SVD 捕捉詞語與文件的潛在語意關係"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：SVD 只能分解方陣（Square Matrix），無法應用於行列數不相等的長方形矩陣；。"
  },
  {
    "id": "past-115-1-s2-17",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 17,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某醫院欲建立一套加護病房（ICU）敗血症預測模型，資料來自 120 位病患之生命徵象（如心率、血壓、體溫等），每 5 分鐘記錄一次。資料中敗血症相關樣本僅佔 3.2%，屬於高度不平衡資料。在資料檢查過程中發現數項問題，包括血氧資料會出現 10 至 30分鐘的連續缺失、部分血壓感測器隨使用時間產生系統性偏高（感測器漂移）、敗血症標註時間存在約±2 小時誤差，以及不同病患之正常生命徵象基準差異甚大。請問下列何種資料處理與建模方式最為適當？",
    "options": [
      "將缺失值以整體平均填補，未額外處理感測器漂移，並將敗血症標註區間由 6 小時擴大至 8 小時以涵蓋時間誤差，模型評估採用 ROC-AUC 作為主要指標；",
      "對缺失值進行線性插值，若連續缺失時間過長則刪除該段資料，並以 Z-score 標準化處理感測器漂移，交叉驗證採隨機切分，未避免同一病患資料同時出現在訓練與測試集中；",
      "刪除所有含缺失值之資料，對資料進行 Min-Max 正規化處理，未考慮病患間差異直接建模，並以 Accuracy 作為評估指標，交叉驗證採分層 K-Fold 方式進行；",
      "對缺失值採前向填補並加入缺失指標特徵，利用感測器 72 小時滾動中位數進行漂移校正，並處理標註雜訊，同時以個別病患基準建模，交叉驗證採病患分組，評估採PR-AUC 與 Recall 指標"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：對缺失值採前向填補並加入缺失指標特徵，利用感測器 72 小時滾動中位數進行漂移校正，並處理標註雜訊，同時以個別病患基準建模，交叉驗證採病患分組，評估採PR-AUC 與 Recall 指標。"
  },
  {
    "id": "past-115-1-s2-18",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 18,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某零售企業的 AI 工程師正在用關聯規則學習（Association Rule Learning）分析購物籃資料，評估商品 A 跟商品 B 之間同時購買的關係。關於「支援度（Support）」、「信賴度（Confidence）」、「提升度（Lift）」三個指標，下列敘述何者正確？",
    "options": [
      "信賴度=P(A∩B)，即 A 與 B 同時出現的機率，範圍[0,1]；",
      "支援度=P(B|A)，即 A 出現時 B 也出現的條件機率，範圍[0,1]；",
      "提升度=P(A∩B) / [P(A)×P(B)]，範圍固定在[0,1]之間；",
      "提升度=1 表示 A 與 B 獨立（無關聯），<1 表示負相關，>1 表示正向關聯，因此提升度並非數值愈大即代表關聯愈強"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：提升度=1 表示 A 與 B 獨立（無關聯），<1 表示負相關，>1 表示正向關聯，因此提升度並非數值愈大即代表關聯愈強。"
  },
  {
    "id": "past-115-1-s2-19",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 19,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "下圖表為電商平台某時段的交易紀錄（共 8 筆訂單），對圖表內的資料執行 Apriori 演算法，設定最低支援度為 3。請問最終保留下來的最大頻繁項目集為何？",
    "options": [
      "{A}；",
      "{A, D}；",
      "{A, B, E}；",
      "{B, E}"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：{B, E}。"
  },
  {
    "id": "past-115-1-s2-20",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 20,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某電信公司的 AI 反詐欺模型在正常交易佔 99.5%、詐欺交易僅佔 0.5%的類別嚴重不平衡資料集上訓練。若工程師僅以整體準確率（Accuracy）作為模型選擇的唯一指標，最可能產生什麼嚴重問題？",
    "options": [
      "模型訓練時間會因類別不平衡而大幅增加；",
      "一個永遠預測為正常交易的模型即可達到 99.5%準確率，但對詐欺交易的召回率為0%，使準確率失去判別能力；",
      "類別不平衡會導致模型訓練過程出現梯度爆炸；",
      "類別不平衡會直接導致模型過擬合，使測試集表現下降"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：一個永遠預測為正常交易的模型即可達到 99.5%準確率，但對詐欺交易的召回率為0%，使準確率失去判別能力；。"
  },
  {
    "id": "past-115-1-s2-21",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 21,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 平台的資料工程師需要在 Apache Spark 叢集上，對包含 10 億筆使用者行為紀錄的 RDD/DataFrame 計算整體標準差（Standard Deviation）。請問下列哪種策略在分散式環境中最正確且有效率？",
    "options": [
      "呼叫 collect()將所有資料傳回 Driver 節點的本機記憶體後，再使用 Python 的statistics.stdev()計算；",
      "先對資料進行全域排序（sortBy），再取中間值計算變異數；",
      "將資料輸出為 CSV，再以 Excel 的 STDEV 函數計算；",
      "使用 DataFrame.agg({'col': 'stddev'})或 RDD.aggregate()等分散式統計方法，由各Executor 計算局部統計量後再進行彙總"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：使用 DataFrame.agg({'col': 'stddev'})或 RDD.aggregate()等分散式統計方法，由各Executor 計算局部統計量後再進行彙總。"
  },
  {
    "id": "past-115-1-s2-22",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 22,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某連鎖便利商店集團欲建立門市未來 14 天每日銷售額預測模型（500 間門市、3 年歷史資料）。資料具有明顯的週期性（週末較高）、年度季節性（暑假與年末高峰）及長期成長趨勢，並包含已知節日與不定期事件（如颱風）。在此情境下，關於資料切分與建模策略，何者最適當？",
    "options": [
      "採隨機切分（80/20），使用傳統時間序列模型建模，刪除節日資料避免極端值影響，並以均方根誤差（RMSE）評估；",
      "依時間順序切分（最後 90 天為測試集），使用具季節性建模能力的時間序列模型並加入節日資訊，不處理不定期事件，以平均絕對百分比誤差（MAPE）評估；",
      "依時間順序切分並採前進式驗證（Walk-Forward Validation），結合時間序列分解與機器學習模型，加入時間特徵、滯後與滾動統計特徵，並納入節日與不定期事件資訊，使用均方根誤差（RMSE）與平均絕對百分比誤差（MAPE）評估；",
      "依時間順序切分，直接使用深度學習模型建模，不進行特徵工程，所有門市共用模型，以平均絕對誤差（MAE）評估"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：依時間順序切分並採前進式驗證（Walk-Forward Validation），結合時間序列分解與機器學習模型，加入時間特徵、滯後與滾動統計特徵，並納入節日與不定期事件資訊，使用均方根誤差（RMSE）與平均絕對百分比誤差（MAPE）評估；。"
  },
  {
    "id": "past-115-1-s2-23",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 23,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "Receiver Operating Characteristic（ROC）曲線係由單一分類模型在不同決策閾值下形成，並以真陽率（True Positive Rate, TPR）為縱軸、假陽率（False Positive Rate, FPR）為橫軸。請問下圖中四條曲線，何者最不可能是 ROC 曲線？",
    "options": [
      "水平線 A；",
      "曲線 B；",
      "曲線 C；",
      "斜直線 D"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：曲線 C；。"
  },
  {
    "id": "past-115-1-s2-24",
    "subject": 2,
    "topic": "大數據處理分析與應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 24,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 工程師評估客戶滿意度評分（1–5 分，含有明顯離群值）與退款率（連續型比例變數）之間的相關性，考慮使用皮爾森（Pearson）、斯皮爾曼（Spearman）或肯德爾（Kendall）相關係數。關於三者的特性比較，下列敘述何者不正確？",
    "options": [
      "皮爾森衡量兩個連續變數間的線性關係強度；斯皮爾曼與肯德爾基於排名（Rank）計算，對非線性單調關係也適用；",
      "斯皮爾曼相關係數的計算公式等價於皮爾森，只是將原始數值替換為其排名後代入計算；",
      "與肯德爾相比，斯皮爾曼對離群值的穩健度更強；",
      "三者的數值範圍（相關係數區間）皆相同，均在[-1, 1]之間"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：與肯德爾相比，斯皮爾曼對離群值的穩健度更強；。"
  },
  {
    "id": "past-115-1-s2-25",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 25,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融機構導入 AI 模型進行信用卡詐欺偵測，由於詐欺交易極為稀少（約佔全部交易0.3%），因此模型在測試階段得到 99.6%準確率（Accuracy），被初步認定為「高效模型」。然而在實際上線後，風控部門發現模型幾乎無法攔截詐欺交易，且大量誤判正常交易。經進一步檢查，發現資料極度不平衡，但模型仍以 Accuracy 作為主要優化與評估指標。在此情境下，下列何者最適當的改善方向？",
    "options": [
      "持續優化 Accuracy 指標以提升整體分類正確率；",
      "改用精確率（Precision）作為主要評估指標以降低誤報；",
      "引入 Class Weight 或 Cost-sensitive Learning 調整損失函數；",
      "移除少數類資料以提升模型穩定性與收斂速度"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：引入 Class Weight 或 Cost-sensitive Learning 調整損失函數；。"
  },
  {
    "id": "past-115-1-s2-26",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 26,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商推薦系統的資料工程師在建構模型特徵時，將使用者的訂單 UNIX 時間戳記（連續數值）轉換為「早晨（6–12 時）、下午（12–18 時）、夜晚（18–6 時）」三個區間類別，以讓推薦模型更容易學習消費時段規律。在資料前處理中，這種將連續數值轉換為有序類別的操作最精確的名稱為何？",
    "options": [
      "特徵離散化（Feature Discretization）；",
      "特徵縮放（Feature Scaling）；",
      "數據降維（Dimensionality Reduction）；",
      "One-Hot 編碼（One-Hot Encoding）"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：特徵離散化（Feature Discretization）；。"
  },
  {
    "id": "past-115-1-s2-27",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 27,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 產品的商業分析師在準備月度報告時，需要在單一頁面上同時呈現 1,000 位使用者的留存率、活躍程度與付費轉換率三項指標，以讓決策層快速掌握整體趨勢。若依據Edward Tufte 的資料視覺化原則中資料密度（Data Density）的概念，下列何者最符合此原則的設計方向？",
    "options": [
      "將 1,000 筆資料分散至多張圖表（每張顯示約 100 筆），避免單一圖表資訊過載；",
      "移除所有圖例、軸標籤與輔助線等非資料墨水（Non-data Ink），使版面最簡潔；",
      "在圖表中加入大量裝飾性元素（如色塊、陰影、3D 效果），使視覺效果更豐富；",
      "在有限頁面空間中呈現盡可能多的有效資料資訊，同時維持可讀性與清楚的視覺層次"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：在有限頁面空間中呈現盡可能多的有效資料資訊，同時維持可讀性與清楚的視覺層次。"
  },
  {
    "id": "past-115-1-s2-28",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 28,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "行銷團隊比較三種廣告投放管道（A／B／C）的轉換率差異，原始數據如下，A：3.2%、B：3.8%、C：4.0%。若設計圖表時將 y 軸刻意截斷（不從 0 開始），造成視覺差異放大。此做法最可能產生的問題為何？",
    "options": [
      "提升資料解析效率並減少認知負擔；",
      "增強小幅差異的可視化辨識能力；",
      "造成視覺誤導並放大實際差異感；",
      "提升圖表計算準確性與數據正確性"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：造成視覺誤導並放大實際差異感；。"
  },
  {
    "id": "past-115-1-s2-29",
    "subject": 2,
    "topic": "資料視覺化",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 29,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "某 AI 系統的維運工程師需要在儀表板上呈現「模型推論延遲（ms）隨時間的變化趨勢」，以便即時監控 服務水準協議（Service LevelAgreement, SLA）是否達標（P99<200 ms）。在資料視覺化的圖表類型選擇上，下列哪種圖表最適合呈現連續數值隨時間變化的趨勢？",
    "options": [
      "面積圖（Area Chart）；",
      "散佈圖（Scatter Plot）；",
      "長條圖（Bar Chart）；",
      "折線圖（Line Plot）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：折線圖（Line Plot）。"
  },
  {
    "id": "past-115-1-s2-30",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 30,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "訓練資料共 5,000 萬筆，工程師比較 Batch Size=32 與 Batch Size = 4096 的訓練表現，發現大批次（Large Batch）雖然訓練較快，但模型泛化能力較差。從最佳化理論角度，下列何者為此現象最合理的解釋？",
    "options": [
      "大批次（Large Batch）計算量過大，GPU 無法有效處理；",
      "大批次（Large Batch）梯度估計更穩定，但容易收斂至局部極小值（Local Minima），導致泛化能力較差；",
      "小批次（Small Batch）因隨機性高，更容易發生梯度爆炸（Gradient Explosion）；",
      "批次大小（Batch Size）與泛化能力無關，問題出在學習率（Learning Rate）設定"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：大批次（Large Batch）梯度估計更穩定，但容易收斂至局部極小值（Local Minima），導致泛化能力較差；。"
  },
  {
    "id": "past-115-1-s2-31",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 31,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某公司中，A 團隊負責信用評分模型，B 團隊負責詐欺偵測模型，兩團隊皆需要「使用者過去 30 天交易行為」資料，但各自會進行特徵工程與後續工作。以公司整體管理角度，下列何者為導入統一管理與共用特徵的主要目的？",
    "options": [
      "模型推論延遲過高，導致線上服務回應時間不符合系統即時性需求與使用體驗要求；",
      "降低跨團隊重複開發的維護成本；",
      "訓練資料儲存空間不足，造成歷史資料保存與批次訓練流程效率下降問題；",
      "模型版本管理混亂，導致不同模型部署與回溯分析困難並增加維運複雜度"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：降低跨團隊重複開發的維護成本；。"
  },
  {
    "id": "past-115-1-s2-32",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 32,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某銀行建置貸款違約預測模型，資料共 50,000 筆，其中違約樣本僅 800 筆（佔 1.6%）。在模型建置流程中，先對整體資料使用 SMOTE 對少數類進行過採樣，之後再進行訓練／測試切分，並訓練輕量梯度提升機（LightGBM）模型，並以 AUC-ROC 評估模型表現。模型在測試集的 AUC-ROC 達到 0.91，團隊認為模型表現良好，準備上線部署。在模型審查過程中，下列何者為使測試集評估結果失真的主要原因？",
    "options": [
      "SMOTE 不適合用於金融違約預測場景，此類高風險業務應一律採用 class_weight 調整損失函數，而非對資料本身進行過採樣；",
      "SMOTE 的過採樣操作在訓練/測試切分之前即對全體資料執行，導致合成樣本資訊洩漏至測試集，使 AUC-ROC 0.91 虛高而不可信；",
      "AUC-ROC 在 1.6%的不平衡場景下過度樂觀，應改用 PR-AUC 作為評估指標，其餘流程均正確；",
      "LightGBM 本身已內建處理不平衡的機制，與 SMOTE 同時使用會造成少數類過度補償，導致過多誤判"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：SMOTE 的過採樣操作在訓練/測試切分之前即對全體資料執行，導致合成樣本資訊洩漏至測試集，使 AUC-ROC 0.91 虛高而不可信；。"
  },
  {
    "id": "past-115-1-s2-33",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 33,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某線上書店希望建立一個多類別書籍推薦模型，根據讀者的「年齡、性別、過去購書類別偏好評分」等特徵，預測讀者下次最可能購買的書籍主題（共 8 類）。資料已完整標註，且資料量達數十萬筆。在模型選型上，除了預測準確率外，也需考量模型訓練效率、可擴充性，並需支援快速訓練與線上部署。請問下列哪種方法最適合此情境？",
    "options": [
      "多類別羅吉斯迴歸（Multinomial Logistic Regression）；",
      "支援向量機（SVM）搭配 One-vs-One；",
      "K-means 分群後將群集標籤作為分類結果；",
      "主成分分析（PCA）後再以最大主成分作為分類依據"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：多類別羅吉斯迴歸（Multinomial Logistic Regression）；。"
  },
  {
    "id": "past-115-1-s2-34",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 34,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某電商平台希望建立二元分類模型，根據商品的「價格區間、品牌、顏色、材質」等特徵，將商品分類為「高銷量（1）」或「低銷量（0）」。同時希望模型輸出具備可解釋的機率（如 P=0.73 表示 73%機率為高銷量）。請問下列哪種方法最適合？",
    "options": [
      "K-means 分群（K-means Clustering）；",
      "決策樹迴歸（Decision Tree Regression）；",
      "羅吉斯迴歸（Logistic Regression）；",
      "線性迴歸（Linear Regression）"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：羅吉斯迴歸（Logistic Regression）；。"
  },
  {
    "id": "past-115-1-s2-35",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 35,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某工程師在開發一個以 Transformer 為基礎的文本分類模型時，發現模型對於詞語順序的變化不夠敏感，影響語意判斷效果。請問在 Transformer 架構中，位置編碼（Positional Encoding）的主要作用為何？",
    "options": [
      "在詞嵌入（Embedding）中加入隨機擾動，以提升模型對輸入變化的泛化能力；",
      "在注意力機制中加入遮罩（Mask），限制模型只能關注部分詞語；",
      "將輸入序列轉換為可同時運算的向量表示，以提升計算效率；",
      "在詞的向量表示中加入位置資訊，使模型能區分序列中不同位置的詞語"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：在詞的向量表示中加入位置資訊，使模型能區分序列中不同位置的詞語。"
  },
  {
    "id": "past-115-1-s2-36",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 36,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 系統架構師正在為一個電子商務資料湖（Data Lake）設計系統。該資料湖儲存數百億筆使用者點擊紀錄，並作為企業主要的分析資料來源。系統需讓非技術背景的行銷人員能以自然語言查詢數據洞察（如：上個月台北市購買 3C 產品的女性轉換率為何？），同時滿足高精確性、可擴展性，支援資料庫層級的權限控管與查詢審計，並確保查詢結果可由資料庫引擎精確執行。在此情境下，下列何者為最適合的系統架構？",
    "options": [
      "協同過濾（Collaborative Filtering）：根據歷史查詢推薦相似問題的答案，無法執行新問題的即時計算；",
      "檢索增強生成（RAG）：讓 LLM 檢索相關資料後生成回答，但無法可靠執行大規模數值聚合與精確統計查詢；",
      "生成對抗網路（GAN）：用於生成合成資料或模擬數據分佈，可用於資料擴增，但不適合即時查詢與資料庫聚合運算；",
      "Text-to-SQLAgent：由 LLM 將自然語言轉換為 SQL 查詢，交由分散式資料庫執行，兼顧自然語言彈性與資料查詢精確性"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：Text-to-SQLAgent：由 LLM 將自然語言轉換為 SQL 查詢，交由分散式資料庫執行，兼顧自然語言彈性與資料查詢精確性。"
  },
  {
    "id": "past-115-1-s2-37",
    "subject": 2,
    "topic": "資料安全",
    "difficulty": "進階",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 37,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某金融機構將訓練好的信用評分模型開放 API 供合作夥伴查詢。資安團隊警告此設計可能遭受成員推斷攻擊（Membership Inference Attack）。下列何者最準確說明攻擊原理與對應防禦？",
    "options": [
      "利用模型對訓練樣本的高信心輸出判斷其是否屬於訓練集；以差分隱私或降低輸出信心防禦；",
      "利用查詢次數與回應頻率差異判斷資料是否在訓練集中；以限制查詢次數防禦；",
      "透過模型輸出推測輸入的敏感特徵；以限制輸出資訊防禦；",
      "透過大量查詢建立替代模型模擬目標模型；以限制模型存取防禦"
    ],
    "answer": 0,
    "explanation": "成員推斷利用模型對訓練資料與非訓練資料反應的差異，推測特定資料是否曾被用來訓練。"
  },
  {
    "id": "past-115-1-s2-38",
    "subject": 2,
    "topic": "資料安全與隱私",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 38,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "某 AI 平台的資料治理工程師正在評估三種去識別化技術的適用場景與強度：K 匿名（K-anonymity）、差分隱私合成資料（Differential Privacy Synthetic Data）、亂數回應機制（Randomized Response）。下列敘述何者不正確？",
    "options": [
      "K 匿名主要應用於表格型資料，確保每筆記錄在準識別符（Quasi-identifier）組合上至少與 K-1 筆其他記錄相同，防止個體被唯一識別；",
      "差分隱私合成資料是在發布統計查詢結果或訓練模型時直接對原始資料加入雜訊，以確保單一個體的加入或移除不會顯著改變輸出；",
      "亂數回應機制讓受訪者以機率性方式回答敏感問題（如：您是否曾逃稅？），賦予個人對答案的可否認性（Plausible Deniability）；",
      "三種技術中，只有差分隱私提供可組合且可量化的隱私保證，而 K 匿名與亂數回應在面對背景知識攻擊或多次查詢時保護能力有限"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：差分隱私合成資料是在發布統計查詢結果或訓練模型時直接對原始資料加入雜訊，以確保單一個體的加入或移除不會顯著改變輸出；。"
  },
  {
    "id": "past-115-1-s2-39",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 39,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "在建構自動化資料清洗管線時，工程師撰寫一個用於補齊缺失欄位的 Python 函式，如下圖所示。當此函式連續處理兩筆獨立的資料（row1 與 row2）後，請問第二筆資料row2['tags']的內容會為何？",
    "options": [
      "[\"checked\", \"tags\"]；",
      "[]；",
      "[\"checked\", \"checked\"]；",
      "拋出 KeyError 錯誤，因為字典中沒有 tags 鍵值"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：[\"checked\", \"checked\"]；。"
  },
  {
    "id": "past-115-1-s2-40",
    "subject": 2,
    "topic": "資料分析與模型應用",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 40,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "下圖為一段分類演算法的 pseudocode，請問最可能對應下列哪一種演算法？",
    "options": [
      "K-近鄰（K-Nearest Neighbors, KNN）；",
      "K-means 分群（K-means Clustering）；",
      "支援向量機（Support Vector Machine, SVM）；",
      "隨機森林分類器（Random Forest Classifier）"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：K-近鄰（K-Nearest Neighbors, KNN）；。"
  },
  {
    "id": "past-115-1-s2-41",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 41,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "資料分析師使用 Python 檢視 daily_earnings 欄位的基本統計量，執行以下程式碼（Pandas 2 以上版本）：輸出結果如下：● mean：223.411306● 50%：128.552462● max：4500.000000若團隊進一步發現 daily_earnings 欄位約有 5%的遺失值，且目前規劃先建立線性迴歸（Linear Regression）模型來預測未來收入。為盡可能保留該欄位原有分布特性，並降低因補值造成的偏差，請問下列哪一種處理方式最為合理？",
    "options": [
      "df['daily_earnings'].fillna(df['daily_earnings'].mean(), inplace=True)；",
      "df['daily_earnings'].fillna(df['daily_earnings'].median(), inplace=True)；",
      "df['daily_earnings'].fillna(df['daily_earnings'].max(), inplace=True)；",
      "直接刪除所有遺失資料，因數值型欄位不適合進行補值處理"
    ],
    "answer": 1,
    "explanation": "右偏且有極端大值時，平均數容易被拉高；中位數較穩健，通常能降低補值偏差。",
    "sourceContext": "某全球共享乘車平台的資料科學團隊，正針對 2025 年第四季度進行營收優化與防弊分析專案。團隊希望透過資料分析達成兩項目標：一是預測司機未來收入表現，以支援營運策略與獎勵機制調整；二是希望透過分析裝置與定位回傳資料，辨識潛在異常行為，以降低補貼濫用風險。為此，團隊整理出一份司機每日營運資料檔（driver_daily_stats.csv），其中每筆資料代表某位司機於某一天的營運表現與系統回傳摘要資訊。資料欄位如下：● driver_id：司機編號● daily_earnings：日總收入（單位：美元）● region：註冊營運區域（以字串 A、B、C 表示）● app_version：使用的司機端 App 版本（如 v1.0、v2.0）● gps_ping_rate：每分鐘回傳 GPS 訊號的次數請根據此資料情境回答第 41~44 題。"
  },
  {
    "id": "past-115-1-s2-42",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 42,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "承上題，團隊在建立預測模型前，先將 region（A、B、C 區）轉換為整數 1、2、3，即採用標籤編碼（Label Encoding）。模型上線測試後發現，線性迴歸模型對於 C 區（編碼為 3）的預測收入出現明顯高估，顯示模型可能將編碼值誤解為具有線性大小關係。若主管要求不得修改原有的特徵編碼方式，必須維持 1、2、3 的整數表示，但希望從演算法層面降低此類誤解風險，則下列何者最適合作為替代模型？",
    "options": [
      "羅吉斯迴歸（Logistic Regression）；",
      "Ridge 迴歸（Ridge Regression）；",
      "支援向量機（Support Vector Machine, SVM）搭配線性核函數；",
      "隨機森林（Random Forest）"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：隨機森林（Random Forest）。",
    "sourceContext": "某全球共享乘車平台的資料科學團隊，正針對 2025 年第四季度進行營收優化與防弊分析專案。團隊希望透過資料分析達成兩項目標：一是預測司機未來收入表現，以支援營運策略與獎勵機制調整；二是希望透過分析裝置與定位回傳資料，辨識潛在異常行為，以降低補貼濫用風險。為此，團隊整理出一份司機每日營運資料檔（driver_daily_stats.csv），其中每筆資料代表某位司機於某一天的營運表現與系統回傳摘要資訊。資料欄位如下：● driver_id：司機編號● daily_earnings：日總收入（單位：美元）● region：註冊營運區域（以字串 A、B、C 表示）● app_version：使用的司機端 App 版本（如 v1.0、v2.0）● gps_ping_rate：每分鐘回傳 GPS 訊號的次數請根據此資料情境回答第 41~44 題。"
  },
  {
    "id": "past-115-1-s2-43",
    "subject": 2,
    "topic": "資料安全與隱私",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 43,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "平台安全部門發現，僅有極少數司機（約占總體 0.05%）會利用外掛程式竄改gps_ping_rate，以騙取里程補貼。某新進資料科學家訓練了一個二元分類模型，並在報告中指出：「模型整體準確率（Accuracy）高達 99.95%，因此可直接上線攔截可疑帳號。」然而，資深工程師檢視後認為，僅憑上述結果（如圖）仍不足以支持模型直接上線。下列何者不是其提出質疑的合理理由？",
    "options": [
      "在此類極度不平衡的資料中，即使模型永遠預測所有司機皆為正常，整體準確率仍可能高達 99.95%；",
      "報告中未呈現召回率（Recall），因此模型可能無法有效辨識真正的外掛司機；",
      "異常偵測問題不可使用分類模型處理，僅能使用分群或離群值方法；",
      "對於少數類比例極低的問題，若僅觀察 Accuracy，可能忽略模型對異常樣本的實際偵測能力"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：異常偵測問題不可使用分類模型處理，僅能使用分群或離群值方法；。",
    "sourceContext": "某全球共享乘車平台的資料科學團隊，正針對 2025 年第四季度進行營收優化與防弊分析專案。團隊希望透過資料分析達成兩項目標：一是預測司機未來收入表現，以支援營運策略與獎勵機制調整；二是希望透過分析裝置與定位回傳資料，辨識潛在異常行為，以降低補貼濫用風險。為此，團隊整理出一份司機每日營運資料檔（driver_daily_stats.csv），其中每筆資料代表某位司機於某一天的營運表現與系統回傳摘要資訊。資料欄位如下：● driver_id：司機編號● daily_earnings：日總收入（單位：美元）● region：註冊營運區域（以字串 A、B、C 表示）● app_version：使用的司機端 App 版本（如 v1.0、v2.0）● gps_ping_rate：每分鐘回傳 GPS 訊號的次數請根據此資料情境回答第 41~44 題。"
  },
  {
    "id": "past-115-1-s2-44",
    "subject": 2,
    "topic": "機率與分布",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 44,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "針對上述外掛偵測模型，營運長下達最終的商業決策目標如下：「對於作弊行為零容忍。即使誤凍結部分正常司機帳號，後續仍可交由人工覆核；但不能放過任何一個真正的外掛司機。」根據上述目標，團隊在調整模型輸出的決策機率門檻（Threshold，預設為 0.5）時，應採取下列何種策略最為合理？",
    "options": [
      "選擇使模型對作弊者的召回率（Recall）最大化的門檻，通常代表應降低 Threshold",
      "選擇使模型精確率（Precision）最大化的門檻，通常代表應提高 Threshold",
      "固定使用 Threshold=0.5 作為預設值，因為調整門檻將破壞演算法原有的訓練平衡",
      "選擇使模型特異度（Specificity）達到 100%的門檻，以確保正常司機不會被誤判"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：選擇使模型對作弊者的召回率（Recall）最大化的門檻，通常代表應降低 Threshold。",
    "sourceContext": "某全球共享乘車平台的資料科學團隊，正針對 2025 年第四季度進行營收優化與防弊分析專案。團隊希望透過資料分析達成兩項目標：一是預測司機未來收入表現，以支援營運策略與獎勵機制調整；二是希望透過分析裝置與定位回傳資料，辨識潛在異常行為，以降低補貼濫用風險。為此，團隊整理出一份司機每日營運資料檔（driver_daily_stats.csv），其中每筆資料代表某位司機於某一天的營運表現與系統回傳摘要資訊。資料欄位如下：● driver_id：司機編號● daily_earnings：日總收入（單位：美元）● region：註冊營運區域（以字串 A、B、C 表示）● app_version：使用的司機端 App 版本（如 v1.0、v2.0）● gps_ping_rate：每分鐘回傳 GPS 訊號的次數請根據此資料情境回答第 41~44 題。"
  },
  {
    "id": "past-115-1-s2-45",
    "subject": 2,
    "topic": "Python 資料處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 45,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "若分析師想找出「總貢獻營收最高的前 3 名客戶」，下列 Pandas 程式碼何者最為精確且高效？",
    "options": [
      "df.sort_values('Revenue', ascending=False).head(3)['CustomerID']；",
      "df.groupby('CustomerID')['Revenue'].max().head(3)；",
      "df.groupby('CustomerID')['Revenue'].sum().nlargest(3)；",
      "df.value_counts('CustomerID').head(3)"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：df.groupby('CustomerID')['Revenue'].sum().nlargest(3)；。",
    "sourceContext": "請依照以下情境回答第 45~47 題。資料分析師載入一份電商交易紀錄的 Pandas DataFrame df，其欄位包含：OrderID（訂單編號）、CustomerID（客戶編號）、Category（商品分類）、Revenue（該筆營收）。此外，另有一份客戶資料表 customers，包含 CustomerID（客戶編號）與 Region（所在地區）欄位。"
  },
  {
    "id": "past-115-1-s2-46",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 46,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "若分析師只想計算「Electronics（電子產品）」這個特定分類的平均營收，下列何者為最佳的語法？",
    "options": [
      "df[df['Category'] == 'Electronics']['Revenue'].mean()；",
      "df['Category' == 'Electronics']['Revenue'].mean()；",
      "df.loc['Electronics', 'Revenue'].mean()；",
      "df.filter(items=['Electronics'])['Revenue'].mean()；"
    ],
    "answer": 0,
    "explanation": "官方公告答案為 A。判斷關鍵：df[df['Category'] == 'Electronics']['Revenue'].mean()；。",
    "sourceContext": "請依照以下情境回答第 45~47 題。資料分析師載入一份電商交易紀錄的 Pandas DataFrame df，其欄位包含：OrderID（訂單編號）、CustomerID（客戶編號）、Category（商品分類）、Revenue（該筆營收）。此外，另有一份客戶資料表 customers，包含 CustomerID（客戶編號）與 Region（所在地區）欄位。"
  },
  {
    "id": "past-115-1-s2-47",
    "subject": 2,
    "topic": "Python 資料處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 47,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "分析師想將 customers 表中的 Region 欄位加入到 df 交易紀錄中，且「只保留那些在customers 表中有對應資料的交易紀錄」。下列哪一種合併方式最正確？",
    "options": [
      "pd.concat([df, customers], axis=1)；",
      "pd.merge(df, customers, on='CustomerID', how='outer')；",
      "pd.merge(df, customers, on='CustomerID', how='inner')；",
      "df.join(customers, on='CustomerID')"
    ],
    "answer": 2,
    "explanation": "官方公告答案為 C。判斷關鍵：pd.merge(df, customers, on='CustomerID', how='inner')；。",
    "sourceContext": "請依照以下情境回答第 45~47 題。資料分析師載入一份電商交易紀錄的 Pandas DataFrame df，其欄位包含：OrderID（訂單編號）、CustomerID（客戶編號）、Category（商品分類）、Revenue（該筆營收）。此外，另有一份客戶資料表 customers，包含 CustomerID（客戶編號）與 Region（所在地區）欄位。"
  },
  {
    "id": "past-115-1-s2-48",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 48,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": false,
    "question": "在進行機器學習建模前，資料分析師需對特徵變數 X 進行標準化處理，以消除不同量尺所造成的影響。已知使用 StandardScaler 進行資料轉換，程式碼如下：scaler =StandardScaler()。請問下列哪一種寫法可以正確完成資料標準化？",
    "options": [
      "X_norm = scaler.transform(X)；",
      "X_norm = scaler.fit(X)；",
      "X_norm = scaler.fit_transform(X)；",
      "X_norm = fit_transform(scaler)"
    ],
    "answer": 2,
    "explanation": "第一次處理資料時可用 fit_transform() 同時學習平均數、標準差並完成轉換。",
    "sourceContext": "請根據下方資訊回答第 48~50 題。"
  },
  {
    "id": "past-115-1-s2-49",
    "subject": 2,
    "topic": "資料前處理",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 49,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "在進行機器學習建模前，資料分析師已完成資料前處理（包含遺漏值處理與特徵標準化），並準備建立分類模型。已知資料流程如下：1. 將資料區分為訓練集與測試集2. 建立羅吉斯迴歸（Logistic Regression）模型3. 使用訓練資料進行模型擬合（fit）請問下列哪一組 Pandas / Scikit-learn 程式碼流程最為正確？",
    "options": [
      "train_test_split(X_norm, y, train_size=0.2, random_state=123)；LogisticRegression(solver='liblinear')；fit(X_train, y_train)",
      "train_test_split(X_norm, y, train_size=0.2, random_state=123)；LogisticRegression(solver='lbfgs')；fit(X_train, y_train)",
      "train_test_split(y, X_norm, train_size=0.2, random_state=123)；LogisticRegression(solver='liblinear')；fit(X_train, y_train)",
      "train_test_split(y, X_norm, train_size=0.2, random_state=123)；LogisticRegression(solver='lbfgs')；fit(X_train, y_train)"
    ],
    "answer": 1,
    "explanation": "官方公告答案為 B。判斷關鍵：train_test_split(X_norm, y, train_size=0.2, random_state=123)；LogisticRegression(solver='lbfgs')；fit(X_train, y_train)。",
    "sourceContext": "請根據下方資訊回答第 48~50 題。"
  },
  {
    "id": "past-115-1-s2-50",
    "subject": 2,
    "topic": "敘述統計",
    "difficulty": "中等",
    "sourceType": "official-past",
    "sourceYear": "115 年第一次",
    "sourceQuestion": 50,
    "sourceUrl": "https://www.ipas.org.tw/api/proxy/uploads/certification_resource/bf93f438f7be48d295c1b40a34d79f3d/115%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%AD%E7%B4%9AAI%E6%87%89%E7%94%A8%E8%A6%8F%E5%8A%83%E5%B8%AB_%E7%AC%AC%E4%BA%8C%E7%A7%91_%E5%A4%A7%E6%95%B8%E6%93%9A%E8%99%95%E7%90%86%E5%88%86%E6%9E%90%E8%88%87%E6%87%89%E7%94%A8_%E5%85%AC%E5%91%8A%E8%A9%A6%E9%A1%8C_20260615003417.pdf",
    "requiresOfficialPdf": true,
    "question": "參考下圖程式碼，下列描述何者正確？",
    "options": [
      "cm 表示混淆矩陣，橫列表測試集的預測值；",
      "混淆矩陣對角線數值皆大於非對角線數值表示模型過度擬合；",
      "f1_score 參數 average=\"weighted\"表示計算平均 f1_score；",
      "f1_score 計算時採用各類別精確率（Precision）與召回率（Recall）的調和平均，並加權考量類別不平衡性"
    ],
    "answer": 3,
    "explanation": "官方公告答案為 D。判斷關鍵：f1_score 計算時採用各類別精確率（Precision）與召回率（Recall）的調和平均，並加權考量類別不平衡性。",
    "sourceContext": "請根據下方資訊回答第 48~50 題。"
  }
];
  window.QUESTION_BANK.push(...questions);
})();
