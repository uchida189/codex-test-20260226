### カード
- 主にホーム画面（`002_homeview.md`）で使用するコンポーネント
- 役目
  - ユーザに店の情報を表示する
  - ユーザのハートON/OFF

- 表示する情報とその優先順位
  1. 店名
  2. ハート
  3. 営業中ステータス
  4. 画像（見れば味・カテゴリがわかる）
  5. 詳細カテゴリ（こってり・あっさり・二郎系など）
  6. 場所（マップ）
  7. カテゴリ
  8. 支払い情報（PayPay勢向け）
  9. レビュー
  10. 料金

- 操作
  - ダブルタップで「ハート」をON/OFFできる

- 営業中ステータスの表示ルール
  - `営業中`（緑）
  - `まもなく営業終了`（オレンジ）
  - `営業時間外`（赤）
  - ハートON時はピンクで表示
  - 文字コントラストは 4.5:1 以上を満たす配色を使う

- データソース
  - 店舗情報は Google Maps Platform（Places API の Place 形式）を基準に扱う
  - 最低限利用するフィールド
    - `id`
    - `displayName`
    - `formattedAddress`
    - `googleMapsUri`
    - `primaryType` / `primaryTypeDisplayName`
    - `currentOpeningHours`（`openNow`, `nextCloseTime`）
    - `rating`, `userRatingCount`
    - `priceLevel`
    - `paymentOptions`
