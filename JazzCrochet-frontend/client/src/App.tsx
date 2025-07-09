import "./App.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
