
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/img1.jpg";
import img17 from "../assets/images/img17.jpg";
import img24 from "../assets/images/img24.jpg";
import img14 from "../assets/images/img14.jpg";
import img13 from "../assets/images/img13.jpg";
import img12 from "../assets/images/img12.jpg";

export default function CardsSection() {
  const navigate = useNavigate();

  return (
    <section id="products" className="cards">
    
      <h2>Our Roofing Designs</h2>

      <div className="card-grid">

        <div
          className="card"
          onClick={() =>
            navigate("/product/stone-coated-metal", {
              state: {
                image: img1,
                title: "Stone-Coated Metal Roofing",
                description:
                  "Stone-coated metal roofing offers superior durability, excellent weather resistance, and a premium finish suitable for modern residential and commercial buildings."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img1} alt="Stone-Coated Metal Roofing" />
          </div>
          <h3>Stone-Coated Metal Roofing</h3>
          <p>Durable, weather-resistant roofing sheets with a premium finish.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/ventilation-blocks", {
              state: {
                image: img17,
                title: "Designer Ventilation Blocks",
                description:
                  "Designer ventilation blocks improve airflow while adding architectural beauty to walls and facades."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img17} alt="Designer Ventilation Blocks" />
          </div>
          <h3>Designer Ventilation Blocks</h3>
          <p>Aesthetic clay ventilation blocks for better airflow.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/designer-sheets", {
              state: {
                image: img24,
                title: "Designer Roofing Sheets",
                description:
                  "Modern roofing sheets available in various colors and patterns, offering durability with style."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img24} alt="Designer Roofing Sheets" />
          </div>
          <h3>Designer Roofing Sheets</h3>
          <p>Stylish roofing sheets with long-lasting performance.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/stone-coated-sheets", {
              state: {
                image: img14,
                title: "Stone-Coated Roofing Sheets",
                description:
                  "Premium stone-coated sheets providing excellent strength, durability, and elegant appearance."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img14} alt="Stone-Coated Roofing Sheets" />
          </div>
          <h3>Stone-Coated Roofing Sheets</h3>
          <p>Elegant stone-coated roofing solutions.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/metal-tiles", {
              state: {
                image: img13,
                title: "Classic Metal Roof Tiles",
                description:
                  "Classic metal roof tiles engineered for strength, reliability, and long-term performance."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img13} alt="Classic Metal Roof Tiles" />
          </div>
          <h3>Classic Metal Roof Tiles</h3>
          <p>Reliable metal tiles with timeless design.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/modern-tiles", {
              state: {
                image: img12,
                title: "Modern Roofing Tile Collection",
                description:
                  "A modern collection of roofing tiles combining innovative design, color variety, and protection."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img12} alt="Modern Roofing Tile Collection" />
          </div>
          <h3>Modern Roofing Tile Collection</h3>
          <p>Modern tiles with color variety and protection.</p>
        </div>

      </div>
    </section>
  );
}
