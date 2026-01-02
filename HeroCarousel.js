import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from "../assets/images/img2.jpg";
import img22 from "../assets/images/img22.jpg";
import img24 from "../assets/images/img24.jpg";
import img26 from "../assets/images/img26.jpg";
import img28 from "../assets/images/img28.png";
import img25 from "../assets/images/img25.jpg";

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="home" className="carousel">
      <Slider {...settings}>
        <div><img src={img2} alt="VV Roofing 1" /></div>
        <div><img src={img22} alt="VV Roofing 2" /></div>
        <div><img src={img24} alt="VV Roofing 3" /></div>
        <div><img src={img26} alt="VV Roofing 4" /></div>
        <div><img src={img28} alt="VV Roofing 5" /></div>
        <div><img src={img25} alt="VV Roofing 6" /></div>
      </Slider>
    </section>
  );
}
