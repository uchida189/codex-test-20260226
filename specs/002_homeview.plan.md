# 002 HomeView 実装計画

仕様の真実源: `specs/002_homeview.md`

## 1. 実装フェーズ分解

### Phase 1: カテゴリ分割ロジックの導入
- カード配列をカテゴリ単位にグルーピングする。
- カテゴリの並び順は「最初に出現した順」を維持する。

### Phase 2: カテゴリセクションUIの導入
- 縦方向にカテゴリセクションを並べる。
- 各カテゴリ内は横方向にカードを並べる。

### Phase 3: スクロール要件の実装
- ホーム画面全体を縦スクロール可能にする。
- カテゴリ行を横スクロール可能にする。

### Phase 4: 回帰防止テストとドキュメント更新
- カテゴリ分割ユーティリティの単体テスト追加。
- README に HomeView のレイアウト方針を反映。

## 2. 各フェーズの変更対象ファイル

- Phase 1
  - `app/types/home.ts`（新規）
  - `app/lib/home/groupCardsByCategory.mjs`（新規）
- Phase 2
  - `app/components/home/HomeCategorySection.tsx`（新規）
  - `app/components/home/HomeCardRow.tsx`（新規）
  - `app/components/home/HomeCardList.tsx`（更新）
- Phase 3
  - `app/components/home/HomeCardRow.tsx`（横スクロール調整）
  - `app/components/home/HomeCardList.tsx`（縦並び調整）
- Phase 4
  - `tests/homeGrouping.test.mjs`（新規）
  - `README.md`（更新）
  - `specs/002_homeview.plan.md`（本ファイル）

## 3. DB変更がある場合は migrate 手順
- 今回は DB 変更なし。
- 理由: `002_homeview` は表示レイアウト・サジェスト配置の仕様であり、永続化要件を含まない。

## 4. リスク・不明点
- サジェスト順の評価軸（距離、評価、営業中優先など）は仕様未定義。
- カテゴリ名の正規化ルール（例: ラーメン/ramen）は仕様未定義。
- データ件数増加時、横スクロール行の描画コストが増える可能性がある。

## 5. テスト戦略
- 単体テスト:
  - カテゴリ分割の件数・分類・順序（先頭出現順）を検証。
  - ソート関数が不変（コピーを返す）であることを検証。
- 既存テスト回帰:
  - ハート切替ロジックの既存テストを継続実行。
- 手動確認:
  - 画面全体の縦スクロール。
  - 各カテゴリ行の横スクロール。
  - カードのハート操作（クリック/ダブルタップ）が維持されること。
