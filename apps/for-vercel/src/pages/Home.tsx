import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヘッダー */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Vite React OG Test
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              ホーム
            </Link>
            <Link
              to="/articles"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              記事一覧
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-6 py-20">
        {/* ヒーローセクション */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            モダンなWebアプリケーション
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            React
            19とViteを使用した高速で美しいWebアプリケーションのテンプレートです。
            最新の技術スタックで、素晴らしいユーザー体験を提供します。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/articles"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              記事を見る
            </Link>
            <button
              type="button"
              className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 transition-all"
            >
              詳細を見る
            </button>
          </div>
        </section>

        {/* 機能セクション */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="高速パフォーマンス"
              >
                <title>高速パフォーマンス</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              高速パフォーマンス
            </h3>
            <p className="text-gray-600">
              Viteの強力なビルドシステムにより、開発体験と本番パフォーマンスが最適化されています。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="モダンなUI"
              >
                <title>モダンなUI</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">モダンなUI</h3>
            <p className="text-gray-600">
              Tailwind
              CSSを使用した美しくレスポンシブなデザインで、あらゆるデバイスで完璧に動作します。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="型安全"
              >
                <title>型安全</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">型安全</h3>
            <p className="text-gray-600">
              TypeScriptによる完全な型安全性で、開発時のエラーを早期に発見できます。
            </p>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">今すぐ始めましょう</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            このテンプレートを使用して、素晴らしいWebアプリケーションを構築してください。
          </p>
          <Link
            to="/articles"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            記事を見る
          </Link>
        </section>
      </main>

      {/* フッター */}
      <footer className="container mx-auto px-6 py-8 mt-20 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2026 Vite React OG Test. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
