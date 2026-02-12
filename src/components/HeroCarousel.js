import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img22 from "../assets/images/img22.jpg";
import img24 from "../assets/images/img24.jpg";

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
    <div id="home"className="carousel">
      <Slider {...settings}>

        <div className="slide">
          <div
            className="image-box"
            style={{ backgroundImage: `url(${img22})` }}
          >
            <img src={img22} alt="Roofing 2" />
          </div>
        </div>

        <div className="slide">
          <div
            className="image-box"
            style={{ backgroundImage: `url(${img24})` }}
          >
            <img src={img24} alt="Roofing 3" />
          </div>
        </div>

        <div className="slide">
          <div
            className="image-box"
            style={{ backgroundImage: `url(${img25})` }}
          >
            <img src={img25} alt="Roofing 6" />
          </div>
        </div>

      </Slider>
    </div>
  );
}
