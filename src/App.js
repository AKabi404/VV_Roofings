import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import CardsSection from "./components/CardsSection";
import VideoSection from "./components/VideoSection";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <CardsSection />
              <VideoSection />
              <AboutCompany />
            </>
          }
        />

        {/* PRODUCT DETAILS PAGE */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
