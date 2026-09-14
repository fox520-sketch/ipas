# iPAS AI 應用規劃師中級刷題站 v1.3

純前端刷題網站，包含科目 1 與科目 2 各 100 題，共 200 題原創練習題。

## v1.3 新功能

- 題庫由 64 題擴充至 200 題
- 科目 1：NLP、電腦視覺、生成式 AI、多模態 AI、導入規劃、風險管理與部署
- 科目 2：統計推論、資料處理、儲存管理、分析方法、資料視覺化、AI應用與隱私安全
- 所有新增題目皆有難度、四個選項及白話解析

## v1.2 功能

- 答錯或低信心題，自動安排第 1、3、7 天複習
- 20 題、30 分鐘模擬考，交卷後才公布答案
- 題號導覽、未作答提示與稍後檢查標記
- 每次練習自動打亂選項順序
- 依章節正確率顯示優先加強考點
- 學習進度可匯出及匯入 JSON 備份檔

## GitHub Pages 發布方式

1. 將 ZIP 解壓縮後的檔案全部上傳到 GitHub Repository 根目錄。
2. 進入 `Settings → Pages`。
3. 將 Source 設為 `Deploy from a branch`。
4. Branch 選 `main`，資料夾選 `/ (root)`，再按 Save。

網站不需要安裝套件，也不需要 GitHub Actions。學習紀錄保存在瀏覽器的 localStorage。

## 題目聲明

本專案為非官方學習工具，題目皆為原創練習題，不重製官方試題。

官方資源：https://ipd.nat.gov.tw/ipas/certification/AIAP/learning-resources
