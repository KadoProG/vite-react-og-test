import { Link } from "react-router-dom";
import { getAllArticles } from "../data/articles";

function Articles() {
  const articles = getAllArticles();

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
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            記事一覧
          </h1>

          <div className="grid gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-[1.02]"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-blue-600 font-semibold">
                    続きを読む →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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

export default Articles;
