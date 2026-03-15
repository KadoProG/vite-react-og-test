export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "React Router Dom の導入方法",
    excerpt:
      "React Router Dom を使用して、SPA（Single Page Application）でページ遷移を実装する方法を解説します。",
    content: `React Router Dom は、React アプリケーションでルーティングを実装するための最も人気のあるライブラリです。

## インストール

\`\`\`bash
pnpm add react-router-dom
\`\`\`

## 基本的な使い方

1. BrowserRouter でアプリケーションをラップします
2. Routes と Route コンポーネントを使用してルートを定義します
3. Link コンポーネントを使用してナビゲーションを行います

## 動的ルーティング

\`articles/:id\` のような動的なルートを定義するには、Route の path に \`:id\` を使用します。
useParams フックを使用して、URL パラメータを取得できます。

これにより、SPA（Single Page Application）でページ遷移を実装することができます。`,
    date: "2026-03-15",
    author: "開発者",
  },
  {
    id: "2",
    title: "Vite と React 19 の最新機能",
    excerpt:
      "Vite 8.0 と React 19 の新機能を紹介し、パフォーマンス向上のポイントを解説します。",
    content: `Vite 8.0 と React 19 には、多くの新機能とパフォーマンス改善が含まれています。

## Vite 8.0 の新機能

- より高速なビルド時間
- 改善されたHMR（Hot Module Replacement）
- より良いTypeScriptサポート

## React 19 の新機能

- 新しいコンパイラによる最適化
- 改善されたサーバーコンポーネント
- より良い型安全性

これらの機能を活用することで、より高速で保守性の高いアプリケーションを構築できます。`,
    date: "2026-03-14",
    author: "開発者",
  },
  {
    id: "3",
    title: "TypeScript で型安全な開発",
    excerpt:
      "TypeScript を使用することで、開発時のエラーを早期に発見し、保守性の高いコードを書くことができます。",
    content: `TypeScript は、JavaScript に静的型付けを追加したプログラミング言語です。

## 型安全性のメリット

- 開発時のエラーを早期に発見
- IDE の自動補完が向上
- リファクタリングが容易

## 基本的な使い方

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

型を適切に定義することで、バグを減らし、コードの品質を向上させることができます。`,
    date: "2026-03-13",
    author: "開発者",
  },
  {
    id: "4",
    title: "Tailwind CSS でモダンなUIを構築",
    excerpt:
      "Tailwind CSS を使用して、レスポンシブで美しいUIを効率的に構築する方法を紹介します。",
    content: `Tailwind CSS は、ユーティリティファーストのCSSフレームワークです。

## Tailwind CSS の特徴

- ユーティリティクラスによる高速な開発
- カスタマイズ可能なデザインシステム
- レスポンシブデザインの簡単な実装

## 基本的な使い方

\`\`\`html
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello, Tailwind!
</div>
\`\`\`

Tailwind CSS を使用することで、美しく一貫性のあるUIを効率的に構築できます。`,
    date: "2026-03-12",
    author: "開発者",
  },
];

// IDで記事を取得するヘルパー関数
export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

// すべての記事を取得する関数
export function getAllArticles(): Article[] {
  return articles;
}
