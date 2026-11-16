# 鐵翼收藏誌（Ironwing Archive）

以軍用飛機模型為主題的靜態展示網站，作為「建立自己的 AGENTS.md」課堂專案。

## 網站功能
- 首頁展示機型卡片、即時文字搜尋。
- 兩篇示範機型頁：F-5E、F-104。
- 共用排版、行動裝置適配與返回首頁導覽。
- `AGENTS.md` 規範未來如何新增條目、維護資料來源和進行驗收。

## 開啟方式
直接開啟根目錄 `index.html`，或使用 GitHub Pages。無需安裝套件或 API 金鑰。

## GitHub Pages 上線步驟
1. 建立公開 GitHub Repository，例如 `ironwing-archive`。
2. 上傳 **此資料夾內全部檔案與子資料夾**，保持 `index.html` 在專案根目錄。
3. 進入 `Settings → Pages`。
4. `Build and deployment` 選 `Deploy from a branch`，選 `main`、`/(root)`，點 Save。
5. 等待 GitHub 顯示正式網址，再以無痕視窗確認首頁及兩篇內頁可開啟。

網址格式通常為 `https://<GitHub帳號>.github.io/ironwing-archive/`，以 GitHub Pages 設定顯示的實際網址為準。

## AI 輔助聲明
初版網站結構、HTML、CSS、JavaScript 與 AGENTS.md 由 OpenAI GPT-6 協助起草，使用者仍須自行檢視內容、修改、測試、上傳 GitHub，並提供真實的公開網站連結及截圖。不得將未完成部署的網站宣稱已上線。

## 新增一篇頁面
1. 閱讀 `AGENTS.md`。
2. 複製 `page-template.html` 到 `aircraft/<slug>.html`。
3. 完成六個必要區塊，補充來源與查證狀態。
4. 更新 `catalog.js` 和 `sources.md`。
5. 測試首頁與新頁的內部連結和手機版。


## 2026-11-17 更新：照片與有史料依據的航空短篇
- F-5E、F-104 兩頁新增國軍實機影像（Wikimedia Commons 線上載入，非內附圖片）。
- 新增史料改寫短篇、官方史實連結、圖片作者及授權來源。
- 以 `sources.md` 為查證清單，並在 `AGENTS.md` 訂出後續增加照片與故事的準則。
