import { Route, Routes } from "react-router-dom";
import ArticleDetail from "./pages/ArticleDetail";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
