import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";
import PortfolioDetail from "./pages/portfolioDetail";
import Music from "./pages/music";
import StockTrading from "./pages/stock";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path=":id" element={<PortfolioDetail />} />
          </Route>
          <Route path="/music" element={<Music />} />
          <Route path="/stock" element={<StockTrading />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
