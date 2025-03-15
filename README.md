白話版：

1. 第7行設定「背景顏色」，第70行藉由更改圖名「更換圖片」，第72和73行設定「按鈕的中文字」。
2. 第73行可設定「按鈕的連結」，目前是設定成官方Line，第82行設定「彈出按鈕的延遲時間」。
3. 資料夾的名稱，即主頁面中的[1]和[2]，就是www.dyeng.com.tw子網域的名稱，如www.dyeng.com.tw/schedule。
4. 注意，圖片必須要上傳到「與index.html相同的位置」；也就是說，如果你要啟用www.dyeng.com.tw/1或www.dyeng.com.tw/2的話，要記得把圖片上傳到名稱為1或2的資料夾中。
   


文言版：

- **`<img src="IMG_2253.jpeg" alt="圖片">`**  
  此標籤負責顯示圖片。若要更換圖片，請修改="後面的檔名（確保已上傳圖片）

- **`<div id="linePopup">`**  
  這是 CTA 框的區域，包含提示文字與連結按鈕  
  - 修改文字：編輯 `<span>` 標籤內的內容  
  - 修改按鈕：編輯 `<a>` 標籤內的文字內容

  - `body`、`.outer-container`、`.image-container`：讓背景、圖片跟CTA置中  

  - `.image-container img` 使用 `max-width: 100vw;` 與 `max-height: 100vh;` 保證圖片依照裝置大小自適應

  - `#linePopup` 為 CTA 框，初始狀態設定為隱藏（`display: none;`）  
  - 當加入 `.show` 類別後，透過 CSS `display: flex;` 顯示並啟動 bounce 動畫（定義在 `@keyframes bounce` 中）
  - 如果要調整提示文字與按鈕之間的間距，可以修改 `gap` 屬性（目前 `32px`）

  - `.line-button` 定義按鈕的外觀，包括背景顏色、字體大小、邊框與圓角。要調整按鈕的字的話，直接改 `<a>` 標籤

- **延遲顯示 CTA 框**  
  在 `<script>` 區塊中，使用 `setTimeout` 延遲 3000 毫秒（3 秒）後，為 CTA 框（`#linePopup`）加入 `.show` 類別，使其在第三秒的時候從隱藏狀態切換到顯示狀態，同時啟用 bounce 動畫。 
  - 若要修改延遲時間，只需要調整 `setTimeout` 的數值（例如，2000 表示 2 秒）


 
Keystone Chiang /n
2025-03-14 /n
v1.0.0
