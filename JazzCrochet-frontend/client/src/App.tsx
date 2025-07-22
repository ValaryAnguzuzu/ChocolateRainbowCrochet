import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllVideos from "./pages/AllVideos";
import Partners from "./pages/Partners";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<AllVideos />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
