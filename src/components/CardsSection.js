
import { useNavigate } from "react-router-dom";

import img30 from "../assets/images/img30.jpg";
import img31 from "../assets/images/img31.jpg";
import img32 from "../assets/images/img32.jpg";
import img33 from "../assets/images/img33.jpg";
import img34 from "../assets/images/img34.jpg";
import img35 from "../assets/images/img35.jpg";

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
                image: img30,
                title: "Ceramic Clay Tile",
                description:
                  "Ceramic Clay Tile offers superior durability, excellent weather resistance, and a premium finish suitable for modern residential and commercial buildings."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img30} alt="Stone-Coated Metal Roofing" />
          </div>
          <h3>Ceramic Clay Tile</h3>
          <p>Durable, weather-resistant roofing sheets with a premium finish.</p>
        </div>

        <div
          className="card"
          onClick={() =>
            navigate("/product/ventilation-blocks", {
              state: {
                image: img31,
                title: "Designer Ventilation Blocks",
                description:
                  "Designer ventilation blocks improve airflow while adding architectural beauty to walls and facades."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img31} alt="Designer Ventilation Blocks" />
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
                title: "Ceramic Clay Tile",
                description:
                  "Ceramic Clay Tiles are available in various colors and patterns, offering durability with style."
              }
            })
          }
        >
          <div className="card-image">
            <img className="card-img" src={img32} alt="Designer Roofing Sheets" />
          </div>
          <h3>Ceramic Clay Tile</h3>
          <p>Stylish Ceramic Tiles with long-lasting performance.</p>
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
            <img className="card-img" src={img33} alt="Stone-Coated Roofing Sheets" />
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
            <img className="card-img" src={img34} alt="Classic Metal Roof Tiles" />
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
            <img className="card-img" src={img35} alt="Modern Roofing Tile Collection" />
          </div>
          <h3>Modern Roofing Tile Collection</h3>
          <p>Modern tiles with color variety and protection.</p>
        </div>

      </div>
    </section>
  );
}
