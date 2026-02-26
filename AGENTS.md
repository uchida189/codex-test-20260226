# Repository Guidelines

## プロジェクト構成とモジュール配置
このリポジトリは Next.js（App Router）を使った最小構成です。
- `app/`: 画面とルーティングの本体（`layout.tsx`、`page.tsx`、`globals.css`）。
- `public/`: 静的アセット配置先（例: `public/next.svg` は `/next.svg` で配信）。
- ルート設定: `next.config.ts`、`tsconfig.json`、`eslint.config.mjs`、`postcss.config.mjs`。
- `.next/` や `node_modules/` は生成物のため、直接編集しないでください。

## ビルド・テスト・開発コマンド
`package.json` の npm scripts を使用します。
- `npm run dev`: 開発サーバーを起動（`http://localhost:3000`）。
- `npm run build`: 本番用ビルドを作成。
- `npm run start`: ビルド済み成果物で本番サーバーを起動。
- `npm run lint`: ESLint（Next.js Core Web Vitals + TypeScript ルール）を実行。

## コーディングスタイルと命名規則
- 言語は TypeScript（`strict: true`）。
- 既存スタイルに合わせ、2スペースインデント・セミコロン・ダブルクォートを基本とします。
- React コンポーネント名は `PascalCase`（例: `RootLayout`）。
- ルートやファイル名は必要に応じて小文字を優先します。
- スタイルは Tailwind ユーティリティを中心に記述し、共通トークンは `app/globals.css` にまとめます。
- 内部 import は可読性向上のため `@/*` エイリアスを利用します。

## テスト方針
現時点では専用テストランナー未導入です。
- 最低限の品質ゲートは `npm run lint` の通過です。
- 複雑なロジックを追加する場合は `*.test.ts` / `*.test.tsx` 形式で同居テストを追加してください。
- PR には実施した確認手順を明記してください。

## コミットと Pull Request の指針
履歴が少ないため、コミットメッセージは命令形で日本語で明確に記述します。
仕様書が指定されている場合、仕様書のIDを含めること。仕様書の指定がない場合は不要。
- 例: `app: add onboarding section to home page`
- 1コミット1目的を原則とし、リファクタと機能追加を混在させないでください。
- PR には目的、主な変更点、実行した確認コマンド、UI変更時のスクリーンショットを含めてください。
- 関連 Issue がある場合はリンクしてください。

## セキュリティと設定
- 秘密情報はコミットしないでください（`.env*` は ignore 対象）。
- `.next/`、`out/`、`build/` などの生成物はコミットしないでください。
