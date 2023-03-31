import Header from "./components/Header";
import Datetime from "./components/Datetime";
import Introduce from "./components/Introduce";
import Href from "./components/Href";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="bg-blue-500">
        <Datetime />
        <Introduce />
        <Href />
      </main>
      <Footer />
    </div>
  );
}

export default App;
