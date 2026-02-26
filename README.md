# 店舗カードアプリ

## 目的
友達とのMT後に、行き先の店選びにかかる時間を短縮する。

## 現在の実装範囲
`specs/001_card.md` に基づき、ホーム画面で店舗カード一覧を表示します。

- 店名
- ハート（ON/OFF）
- 営業中ステータス
- 画像
- 詳細カテゴリ
- 場所（Google Maps検索リンク）
- カテゴリ
- 支払い情報
- レビュー
- 料金

操作:
- ハートボタンのタップ/クリックでお気に入り切替
- カード本体のダブルタップ/ダブルクリックでお気に入り切替

## 開発コマンド
```bash
npm run dev    # 開発サーバ起動
npm run lint   # ESLint
npm run test   # node:test (ロジック単体)
npm run build  # 本番ビルド
npm run start  # 本番サーバ起動
```

## 主な構成
- `app/components/card/`: カード関連UI
- `app/components/home/`: ホーム画面用コンポーネント
- `app/lib/mock/cards.ts`: モック店舗データ
- `app/lib/googlePlaceAdapter.ts`: Google Place形式から画面表示用データへの変換
- `app/lib/cardInteractions.mjs`: お気に入り操作の純粋関数
- `app/types/card.ts`: カード型定義
- `tests/`: `node:test` ベースのテスト

## 補足
- お気に入り状態は現時点でローカル状態管理（DB永続化なし）。
- 店舗の元データは Google Maps Platform（Places API）に合わせた形で保持し、UI表示用に変換して利用。
