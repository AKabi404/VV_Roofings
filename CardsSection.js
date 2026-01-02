import img1 from "../assets/images/img1.jpg";
import img17 from "../assets/images/img17.jpg";
import img24 from "../assets/images/img24.jpg";
import img14 from "../assets/images/img14.jpg";
import img13 from "../assets/images/img13.jpg";
import img12 from "../assets/images/img12.jpg";

export default function CardsSection() {
  return (
    <section id="products" className="cards">
      <h2>Our Roofing Designs</h2>

      <div className="card-grid">
        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img1} alt="Stone-Coated Metal Roofing" />
          </div>
          <h3>Stone-Coated Metal Roofing</h3>
          <p>
            Durable, weather-resistant roofing sheets with a premium finish,
            designed for long-lasting protection and modern aesthetics.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img17} alt="Designer Ventilation Blocks" />
          </div>
          <h3>Designer Ventilation Blocks</h3>
          <p>
            Aesthetic clay ventilation blocks that improve airflow while
            enhancing the visual appeal of walls and facades.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img24} alt="Designer Roofing Sheets" />
          </div>
          <h3>Designer Roofing Sheets</h3>
          <p>
            High-quality roofing sheets available in multiple colors and
            patterns for durability and modern aesthetics.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img14} alt="Stone-Coated Roofing Sheets" />
          </div>
          <h3>Stone-Coated Roofing Sheets</h3>
          <p>
            Premium roofing sheets with stone-coated finish offering strength,
            weather resistance, and elegant appearance.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img13} alt="Classic Metal Roof Tiles" />
          </div>
          <h3>Classic Metal Roof Tiles</h3>
          <p>
            Strong and reliable roofing tiles designed for long-lasting
            performance and visual appeal.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img className="card-img" src={img12} alt="Modern Roofing Tile Collection" />
          </div>
          <h3>Modern Roofing Tile Collection</h3>
          <p>
            A versatile range of roofing tiles combining modern design, color
            variety, and reliable protection.
          </p>
        </div>
      </div>
    </section>
  );
}
