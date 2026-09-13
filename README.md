# iPAS AI 應用規劃師中級刷題站

一個可直接部署到 GitHub Pages 的純前端刷題網站，範圍包含：

- 科目 1：人工智慧技術應用與規劃
- 科目 2：大數據處理分析與應用

目前內建 64 題原創練習題，支援單科／混合練習、20 題模擬測驗、信心程度、即時解析、錯題本、學習進度、考試倒數與手機版介面。所有學習紀錄只存放在使用者瀏覽器的 `localStorage`，不會上傳到伺服器。

> 本專案為非官方學習工具，題目皆為原創練習題，不重製官方試題。

## 本機開啟

這是純靜態網站，可直接開啟 `dist/index.html`。若瀏覽器限制本機檔案，可在專案根目錄執行：

```bash
python -m http.server 8000 --directory dist
```

再開啟 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的空白 Repository。
2. 將本專案推送到 Repository。
3. 進入 **Settings → Pages**。
4. 在 **Build and deployment** 將 Source 選為 **GitHub Actions**。
5. 推送到 `main` 後，GitHub Actions 會自動發布 `dist` 目錄。

## 新增題目

開啟 `dist/questions.js`，依照既有格式加入題目：

```js
{
  id: "s1-033",
  subject: 1,
  topic: "主題名稱",
  difficulty: "基礎",
  question: "題目文字",
  options: ["選項 A", "選項 B", "選項 C", "選項 D"],
  answer: 0,
  explanation: "答案解析"
}
```

`answer` 使用從 0 開始的索引：A = 0、B = 1、C = 2、D = 3。

## 官方資源

- [iPAS AI 應用規劃師學習資源](https://ipd.nat.gov.tw/ipas/certification/AIAP/learning-resources)
- [iPAS AI 應用規劃師考試資訊](https://ipd.nat.gov.tw/ipas/certification/AIAP/exam-info)

## 授權

程式碼採 [MIT License](LICENSE) 授權。題目內容可供個人學習與非商業教學使用；若要公開大量改編或商業使用，請自行確認內容權利與官方規範。
