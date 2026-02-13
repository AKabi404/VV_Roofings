import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import img116 from "../assets/images/img116.jpeg";
import img115 from "../assets/images/img115.jpeg";
import img114 from "../assets/images/img114.jpeg";
import img113 from "../assets/images/img113.jpeg";
import img112 from "../assets/images/img112.jpeg";
import img111 from "../assets/images/img111.jpeg";
import img201 from "../assets/images/img201.jpeg";
import img202 from "../assets/images/img202.jpeg";
import img203 from "../assets/images/img203.jpeg";

export default function CardsSection() {
  const navigate = useNavigate();
  const activeCard = useRef(null);

  const handleNavigate = (path, state, cardEl) => {
    // 🔥 add fade-out animation
    activeCard.current = cardEl;
    cardEl.classList.add("fade-out");

    // 🔥 wait for animation, then navigate
    setTimeout(() => {
      navigate(path, { state });
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 280);
  };

  return (
    <section id="products" className="cards">
      <h2>Our Roofing Designs</h2>

      <div className="card-grid">

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/stone-coated-metal",
              {
                image: img116,
                title: "Stone Coated Roof Tile",
                description:
                  "Combines the strength of steel with the beauty of stone, offering extreme weather resistance and a premium architectural finish."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img116} alt="Stone-Coated Metal Roofing" />
          </div>
          <h3>Stone Coated Roof Tile</h3>
          <p>The strength of steel meets the beauty of stone for a lifetime of protection.</p>
        </div>

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/ventilation-blocks",
              {
                image: img115,
                title: "ASA Coated UPVC Sheet",
                description:
                  "Advanced multi-layer roofing with ASA coating for superior color retention, heat insulation, and anti-corrosion properties."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img115} alt="ASA Coated UPVC Sheet" />
          </div>
          <h3>ASA Coated UPVC Sheet</h3>
          <p>Triple-layer co-extruded sheets with superior heat insulation and color retention.</p>
        </div>

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/designer-sheets",
              {
                image: img114,
                title: "Roofing Shingles",
                description:
                  "High-quality asphalt shingles providing a flexible, water-resistant, and aesthetically versatile roofing solution for slanted roofs."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img114} alt="Roofing Shingles" />
          </div>
          <h3>Roofing Shingles</h3>
          <p>Flexible, high-performance fiberglass shingles with superior waterproofing.</p>
        </div>

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/stone-coated-sheets",
              {
                image: img113,
                title: "Hysquare UPVC Rainwater Gutter",
                description:
                  "A high-flow drainage system designed with durable UPVC to efficiently manage rainwater while preventing leaks and corrosion."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img113} alt="UPVC Rainwater Gutter" />
          </div>
          <h3>Hysquare UPVC Rainwater Gutter</h3>
          <p>High-capacity, leak-proof drainage systems with a sleek square profile.</p>
        </div>

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/metal-tiles",
              {
                image: img112,
                title: "Ceramic Clay Roof Tile",
                description:
                  "Traditional clay tiles fired at high temperatures for a glossy, everlasting finish that offers natural cooling and classic elegance."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img112} alt="Ceramic Clay Roof Tile" />
          </div>
          <h3>Ceramic Clay Roof Tile</h3>
          <p>Authentic, kiln-fired clay tiles offering timeless beauty and natural insulation.</p>
        </div>

        <div
          className="card"
          onClick={(e) =>
            handleNavigate(
              "/product/modern-tiles",
              {
                image: img111,
                title: "Water Proofing Solution",
                description:
                  "Comprehensive liquid membranes and chemical treatments designed to seal surfaces and prevent seepage in roofs and basements."
              },
              e.currentTarget
            )
          }
        >
          <div className="card-image">
            <img src={img111} alt="Water Proofing Solution" />
          </div>
          <h3>Water Proofing Solution</h3>
          <p>High-performance liquid membranes and coatings for leak-free structures.</p>
        </div>

        <div
  className="card"
  onClick={(e) =>
    handleNavigate(
      "/product/profile-sheet",
      {
        image: img201,
        title: "Profile Sheet",
        description:
          "Premium 100% certified Galvalume roofing sheets made with 55% Aluminium, 43.4% Zinc, and 1.6% Silicon. Engineered for superior corrosion resistance, durability, and long-lasting performance across residential, commercial, and industrial applications."
      },
      e.currentTarget
    )
  }
>
  <div className="card-image">
    <img src={img201} alt="Profile Sheet" />
  </div>
  <h3>Profile Sheet</h3>
  <p>
    High-strength Galvalume roofing sheets available in multiple thicknesses,
    GSM coatings, and 25+ vibrant colours.
  </p>
</div>

<div
  className="card"
  onClick={(e) =>
    handleNavigate(
      "/product/rv-liner-sheet",
      {
        image: img202,
        title: "VV Liner Sheet",
        description:
          "High-performance 100% certified Galvalume VV Liner Sheets designed for interior roofing and wall cladding applications. Built with 55% Aluminium, 43.4% Zinc, and 1.6% Silicon for superior durability and corrosion resistance."
      },
      e.currentTarget
    )
  }
>
  <div className="card-image">
    <img src={img202} alt="VV Liner Sheet" />
  </div>
  <h3>VV Liner Sheet</h3>
  <p>
    Durable inner roofing sheets with multiple thickness, GSM, and finish
    options for industrial and commercial structures.
  </p>
</div>

    <div
  className="card"
  onClick={(e) =>
    handleNavigate(
      "/product/pure-aluminium-sheet",
      {
        image: img203,
        title: "Pure Aluminium Sheet",
        description:
          "Premium 3105 alloy aluminium sheets made from 98% pure aluminium, offering excellent corrosion resistance, lightweight performance, and long-term durability."
      },
      e.currentTarget
    )
  }
>
  <div className="card-image">
    <img src={img203} alt="Pure Aluminium Sheet" />
  </div>
  <h3>Pure Aluminium Sheet</h3>
  <p>
    3105 alloy certified aluminium sheets from Jindal, engineered for strength,
    weather resistance, and long service life.
  </p>
</div>

      </div>
    </section>
  );
}
