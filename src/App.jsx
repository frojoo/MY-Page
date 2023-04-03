import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Datetime from "./components/Datetime";
import Introduce from "./components/Introduce";
import Href from "./components/Href";
import Footer from "./components/Footer";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";
import Music from "./pages/music";
import StockTrading from "./pages/stock";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/music" element={<Music />} />
          <Route path="/stock" element={<StockTrading />} />
        </Routes>
        <main className="bg-blue-500">
          <Datetime />
          <Introduce />
          <Href />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
