import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import CardsSection from "./components/CardsSection";
import VideoSection from "./components/VideoSection";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <CardsSection />
      <VideoSection />

      {/* NEW SECTION AFTER VIDEO */}
      <AboutCompany />

      <Footer />
    </>
  );
}

export default App;
