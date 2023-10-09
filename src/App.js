import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sport from "./pages/sport";
import Economy from "./pages/economy";
import NotFound from "./pages/notFound";
import NewsDetail from "./pages/newsDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/news/detail" element={<NewsDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
