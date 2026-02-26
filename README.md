# 店舗カードアプリ

## 目的
友達とのMT後に、行き先の店選びにかかる時間を短縮する。

## 現在の実装範囲
- `specs/001_card.md`: 店舗カード仕様
- `specs/002_homeview.md`: ホーム画面（カテゴリ縦並び + カテゴリ内横スクロール）

表示情報:
- 店名
- ハート（ON/OFF）
- 営業中ステータス
- 画像
- 詳細カテゴリ
- 場所（Google Mapsリンク）
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
- `app/components/home/`: ホーム画面（カテゴリセクション/横スクロール行）
- `app/lib/mock/cards.ts`: モック店舗データ（Google Place準拠）
- `app/lib/googlePlaceAdapter.ts`: Google Place形式から画面表示用データへの変換
- `app/lib/home/groupCardsByCategory.mjs`: HomeView用カテゴリ分割ロジック
- `app/lib/cardInteractions.mjs`: お気に入り操作の純粋関数
- `app/types/`: カード/ホーム画面の型定義
- `tests/`: `node:test` ベースのテスト

## 補足
- お気に入り状態は現時点でローカル状態管理（DB永続化なし）。
