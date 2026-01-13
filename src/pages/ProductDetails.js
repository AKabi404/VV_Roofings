import { useParams, Link } from "react-router-dom";

import img1 from "../assets/images/img1.jpg";
import img17 from "../assets/images/img17.jpg";
import img24 from "../assets/images/img24.jpg";
import img14 from "../assets/images/img14.jpg";
import img13 from "../assets/images/img13.jpg";
import img12 from "../assets/images/img12.jpg";

const products = {
  "stone-coated-metal": {
    title: "Stone-Coated Metal Roofing",
    image: img1,
    description:
      "Stone-coated metal roofing is a premium roofing solution designed to deliver unmatched durability, weather resistance, and long-term performance. Manufactured using high-grade steel coated with stone granules, this roofing system offers excellent protection against harsh sunlight, heavy rain, strong winds, and corrosion. Its multi-layered construction enhances strength while reducing noise during rainfall, making it ideal for residential, commercial, and industrial buildings.\n\nIn addition to durability, stone-coated metal roofing enhances the overall appearance of a structure with its elegant textures and natural color finishes. It mimics the look of traditional tiles while maintaining the lightweight advantages of metal roofing. This roofing solution is fire-resistant, energy-efficient, and requires minimal maintenance, making it a cost-effective investment over time.\n\nVV Roofing’s stone-coated metal roofing products are engineered to meet modern architectural standards and are suitable for villas, apartments, warehouses, factories, and resorts. With superior insulation properties and long service life, this roofing option ensures safety, comfort, and aesthetic appeal for years to come.",
  },

  "ventilation-blocks": {
    title: "Designer Ventilation Blocks",
    image: img17,
    description:
      "Designer ventilation blocks are an essential architectural element that enhances airflow while adding visual appeal to buildings. Crafted from high-quality clay or concrete materials, these blocks allow natural air circulation, reducing indoor heat and improving ventilation without compromising privacy or security.\n\nVV Roofing’s ventilation blocks are available in a variety of designs, patterns, and finishes, making them suitable for residential homes, commercial spaces, boundary walls, and facades. They help maintain a comfortable indoor environment by allowing continuous airflow while preventing moisture buildup.\n\nApart from functionality, these ventilation blocks contribute significantly to modern and traditional architectural aesthetics. Their durability, weather resistance, and low maintenance requirements make them a preferred choice among architects and builders.",
  },

  "designer-sheets": {
    title: "Designer Roofing Sheets",
    image: img24,
    description:
      "Designer roofing sheets combine modern aesthetics with exceptional durability, making them a popular choice for contemporary construction projects. Manufactured using high-quality materials, these sheets are engineered to withstand extreme weather conditions while maintaining their structural integrity and visual appeal.\n\nAvailable in a wide range of colors, textures, and profiles, designer roofing sheets allow architects and homeowners to achieve customized roofing designs. They offer excellent resistance to heat, UV rays, corrosion, and moisture, ensuring long-term performance with minimal maintenance.\n\nVV Roofing’s designer roofing sheets are suitable for residential buildings, industrial sheds, commercial complexes, and agricultural structures.",
  },

  "stone-coated-sheets": {
    title: "Stone-Coated Roofing Sheets",
    image: img14,
    description:
      "Stone-coated roofing sheets are designed to deliver superior protection and long-lasting beauty. These sheets feature a metal core coated with natural stone granules, providing excellent resistance against corrosion, fire, and extreme weather conditions.\n\nThe stone coating enhances insulation and reduces noise caused by rain or wind, creating a comfortable indoor environment. Their aesthetic finish gives a premium tiled appearance while offering the strength and flexibility of metal roofing.\n\nVV Roofing’s stone-coated roofing sheets are ideal for residential homes, commercial buildings, and luxury projects.",
  },

  "metal-tiles": {
    title: "Classic Metal Roof Tiles",
    image: img13,
    description:
      "Classic metal roof tiles offer a perfect blend of traditional aesthetics and modern engineering. Designed to resemble conventional roof tiles, these metal tiles provide superior durability, lightweight performance, and weather resistance.\n\nThey are manufactured using high-strength steel with protective coatings that prevent rust, corrosion, and fading. These tiles are fire-resistant, energy-efficient, and capable of withstanding heavy rain, strong winds, and intense sunlight.\n\nVV Roofing’s metal roof tiles are ideal for residential villas and architectural projects.",
  },

  "modern-tiles": {
    title: "Modern Roofing Tile Collection",
    image: img12,
    description:
      "The modern roofing tile collection from VV Roofing is designed to meet contemporary architectural demands. These tiles combine innovative design, vibrant color options, and reliable performance to deliver stylish roofing solutions.\n\nManufactured using advanced technology, modern roofing tiles offer excellent resistance to heat, moisture, and environmental wear. They enhance thermal insulation and contribute to energy efficiency.\n\nSuitable for residential, commercial, and luxury projects, this tile collection provides long-lasting protection with minimal maintenance.",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <section className="product-details">
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      <div className="product-grid">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-content">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
}
