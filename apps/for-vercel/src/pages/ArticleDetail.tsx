import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../data/articles";

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            記事が見つかりません
          </h1>
          <Link
            to="/articles"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            記事一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto">
          <Link
            to="/articles"
            className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← 記事一覧に戻る
          </Link>

          <article className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mb-8 text-gray-600">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {article.content}
              </div>
            </div>
          </article>
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

export default ArticleDetail;
