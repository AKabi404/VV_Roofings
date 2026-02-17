import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

import img116 from "../assets/images/img116.jpeg";
import img115 from "../assets/images/img115.jpeg";
import img114 from "../assets/images/img114.jpeg";
import img113 from "../assets/images/img113.jpeg";
import img112 from "../assets/images/img112.jpeg";
import img111 from "../assets/images/img111.jpeg";
import img201 from "../assets/images/img201.jpeg";
import img202 from "../assets/images/img202.jpeg";
import img203 from "../assets/images/img203.jpeg";
import img204 from "../assets/images/img204.jpeg";
import img205 from "../assets/images/img205.jpeg";

const products = {
  "stone-coated-metal": {
    title: "Stone Coated Roof Tile",
    image: img116,
    description: "Stone Coated Roof Tiles represent the pinnacle of modern roofing technology, blending aesthetic elegance with industrial-grade strength. Each tile is stamped from high-quality Aluzinc steel, which provides up to nine times the corrosion resistance of traditional galvanized steel. The surface is then coated with natural stone granules bonded with an advanced acrylic polymer, creating a textured finish that resists fading and prevents the metallic 'clatter' sound during heavy rain.\n\nOne of the most significant advantages of this system is its lightweight nature. Weighing nearly 85% less than concrete or clay tiles, it significantly reduces the structural load on the building's framework, often eliminating the need for extra reinforcement. The unique interlocking installation creates a structural web that is exceptionally resistant to high-velocity hurricanes, heavy snow loads, and even earthquakes.\n\nVV Roofing’s Stone Coated tiles are non-combustible (Class A fire rated) and energy-efficient, reflecting a significant portion of solar radiation to keep interiors cool. Available in profiles ranging from classic Mediterranean tile to traditional wood-shake textures, they offer a premium, maintenance-free solution for luxury residences, resorts, and commercial landmarks that require both beauty and resilience."
  },

  "ventilation-blocks": {
    title: "ASA Coated UPVC Sheet",
    image: img115,
    description: "ASA Coated UPVC Roofing Sheets are a high-tech solution designed for industrial, agricultural, and residential applications. The sheets are manufactured using triple-layer co-extrusion technology. The top layer is coated with ASA (Acrylonitrile Styrene Acrylate), a high-weather-resistance resin that protects the sheet from UV radiation, moisture, and chemical exhaustion, ensuring the color remains vibrant for decades.\n\nThe middle layer consists of a specialized foam or reinforced structure that provides superior heat and sound insulation, making the building significantly cooler and quieter compared to metal roofing. The bottom layer is a high-toughness PVC material that ensures structural rigidity and chemical resistance from the inside. This combination makes the sheets completely rust-proof, making them the perfect choice for chemical factories, coastal areas, and warehouses.\n\nVV Roofing’s ASA UPVC sheets are lightweight, fire-retardant, and incredibly easy to install. Their anti-corrosive properties mean they do not require painting or specialized coatings throughout their lifespan. Whether it’s for a large-scale industrial plant or a modern residential porch, these sheets provide a cost-effective, energy-efficient roofing solution that stands up to the toughest environmental challenges."
  },

  "designer-sheets": {
    title: "Roofing Shingles",
    image: img114,
    description: "Roofing Shingles are one of the most popular and versatile roofing solutions available today. Composed of a heavy-duty fiberglass mat base coated with high-quality asphalt and ceramic-coated mineral granules, these shingles offer multi-layered protection against UV degradation and moisture penetration. They are specifically engineered to provide excellent resistance to high winds and heavy impact, ensuring your structure remains safe in all seasons.\n\nOne of the primary advantages of Roofing Shingles is their architectural versatility. Available in a wide array of colors and profiles—from 3-tab designs to dimensional architectural styles—they can complement any building aesthetic. Their flexible nature allows for easy installation on complex roof shapes, including steep slopes and curves. Additionally, the granules provide essential fire resistance and help reflect solar heat to improve energy efficiency.\n\nVV Roofing’s Shingle products are treated with specialized coatings to prevent algae growth and maintain their vibrant appearance over time. Ideal for residential villas, resorts, and premium commercial projects, these shingles provide a sophisticated, textured look that enhances curb appeal while offering a cost-effective, long-lasting roofing solution."
  },

  "stone-coated-sheets": {
    title: "Hysquare UPVC Rainwater Gutter",
    image: img113,
    description: "The Hy-Square UPVC Rainwater Gutter system is a high-performance drainage solution engineered to handle heavy rainfall with ease. Manufactured from premium-grade Unplasticized Polyvinyl Chloride (UPVC), this system is completely rust-proof, chemical-resistant, and UV-stabilized to prevent brittleness or fading under harsh sunlight. The 'Hy-Square' design provides a deeper cross-section compared to traditional round gutters, allowing for significantly higher water-carrying capacity.\n\nPrecision-engineered with a focus on ease of installation, the system features heavy-duty brackets and high-quality rubber seals at every joint to ensure a 100% leak-proof performance. Its smooth internal surface prevents the accumulation of debris and silt, ensuring a free-flowing path to the downspouts. The square profile not only serves a functional purpose but also adds a clean, contemporary architectural line to the eaves of villas, factories, and commercial buildings.\n\nVV Roofing’s Hy-Square systems are built to endure external impacts and thermal expansion. Unlike metal gutters, UPVC operates silently during heavy rain and requires zero painting or anti-corrosion treatments. It is a cost-effective, long-lasting investment that protects your building’s foundation and walls from water damage and dampness for years to come."
  },

  "metal-tiles": {
    title: "Ceramic Clay Roof Tile",
    image: img112,
    description: "Ceramic Clay Roof Tiles are the gold standard for luxury and traditional architecture. Created by firing natural clay in high-temperature kilns, these tiles undergo a vitrification process that makes them incredibly hard and resistant to water absorption. Their high thermal mass allows them to absorb heat during the day and release it slowly at night, keeping interiors naturally cool in tropical climates.\n\nOne of the standout features of Ceramic tiles is their color permanence. Because the pigment is baked into the clay itself, the tiles will not fade, peel, or scratch, even after decades of exposure to harsh sun and salt air. They are naturally fireproof and provide excellent acoustic performance, dampening the sound of heavy rain and external noise better than almost any other roofing material.\n\nVV Roofing’s Ceramic Clay collection is available in a variety of profiles, including the classic 'S' shape (Spanish), Roman, and Flat styles. While they are heavier than metal alternatives, their longevity is unmatched—often lasting over 50 years with minimal maintenance. These tiles are the ideal choice for high-end villas, resorts, and heritage buildings where aesthetic prestige and environmental sustainability are top priorities."
  },

  "modern-tiles": {
    title: "Water Proofing Solution",
    image: img111,
    description: "VV Roofing offers a comprehensive range of advanced Waterproofing Solutions designed to eliminate leaks and prevent moisture-related structural damage. Our systems utilize high-grade polymer-modified coatings and elastomeric liquid membranes that create a continuous, seamless barrier over concrete, metal, or fiber-cement surfaces. Unlike traditional felt, these modern solutions bond directly to the substrate, leaving no room for water to travel underneath.\n\nThese solutions are engineered to be highly flexible, allowing them to bridge hairline cracks and withstand the natural expansion and contraction of buildings during temperature shifts. They are UV-resistant, preventing the 'chalking' or brittleness often seen in standard paints, and provide excellent resistance to stagnant water. Many of our coatings also feature high solar reflectivity, which helps reduce surface temperatures and lowers cooling costs for the building below.\n\nFrom terrace gardens and flat RCC roofs to industrial gutters and basement walls, our waterproofing products ensure a dry and healthy environment. Our application process includes surface preparation, primer application, and reinforced mesh layering for high-stress areas, providing a robust defense system that significantly extends the lifespan of any residential or commercial property."
  },

  "profile-sheet": {
    title: "Profile Sheet",
    image: img201,
    description: "Profile Sheets are manufactured using 100% certified Galvalume steel composed of 55% Aluminium, 43.4% Zinc, and 1.6% Silicon. This advanced metallic coating technology provides exceptional corrosion resistance, superior durability, and long service life, even in coastal and industrial environments.\n\nThe sheets are available in thickness options ranging from 0.28mm to 0.60mm, allowing flexibility for residential, commercial, agricultural, and industrial roofing applications. Customers can choose from 70 GSM, 150 GSM, and 200 GSM coating options for enhanced strength and weather protection.\n\nWith over 25+ vibrant colour options and both Glossy and Matte finish variants, Profile Sheets combine structural performance with modern aesthetics. Lightweight, easy to install, and low maintenance, they offer a cost-effective and reliable roofing solution designed to withstand extreme weather conditions while maintaining long-term visual appeal."
  },
  "rv-liner-sheet": {
    title: "VV Liner Sheet",
    image: img202,
    description: "VV  Liner Sheets are manufactured using 100% certified Galvalume steel composed of 55% Aluminium, 43.4% Zinc, and 1.6% Silicon. This advanced coating technology ensures superior corrosion resistance, high durability, and long-lasting structural performance in demanding environments.\n\nWith a standard width of 1174 mm, these sheets are specifically designed for interior roofing, wall cladding, and industrial shed lining applications. They are available in thickness options ranging from 0.28mm to 0.50mm, providing flexibility based on structural and project requirements.\n\nCustomers can choose from 70 GSM, 150 GSM, and 200 GSM coating options for enhanced protection and extended lifespan. Available in 25+ vibrant colour options along with Glossy and Matte finish variants, VV Liner Sheets combine functionality with a clean and professional finish.\n\nLightweight, easy to install, and low maintenance, VV Liner Sheets are ideal for warehouses, factories, commercial buildings, and large-scale industrial projects requiring durable internal protection and aesthetic consistency."
  },
  "pure-aluminium-sheet": {
    title: "Pure Aluminium Sheet",
    image: img203,
    description: "Pure Aluminium Sheets are manufactured using 3105 alloy grade and consist of 98% pure aluminium, 1.5% zinc, and 0.5% iron. This certified composition ensures excellent corrosion resistance, high strength-to-weight ratio, and long-lasting durability.\n\nAvailable in thickness options of 0.56 mm and 0.71 mm, these sheets are ideal for roofing, cladding, fabrication, and structural applications. Aluminium’s natural resistance to rust makes it highly suitable for coastal regions, industrial zones, and high-moisture environments.\n\nSourced from the trusted Jindal brand, these sheets guarantee premium quality, consistent performance, and superior surface finish. Lightweight, easy to install, and low maintenance, Pure Aluminium Sheets provide a reliable and long-term solution for residential, commercial, and industrial roofing projects."
  },
  "rv-tile-sheet": {
    title: "VV Tile Sheet",
    image: img204,
    description: "VV Tile Sheets are manufactured using 100% certified Galvalume steel composed of 55% Aluminium, 43.4% Zinc, and 1.6% Silicon. This advanced metallic coating technology ensures superior corrosion resistance, durability, and long service life across diverse environmental conditions.\n\nThe sheets are available in thickness options of 0.45mm, 0.47mm, and 0.50mm, making them suitable for residential, commercial, and architectural roofing applications. Customers can select from 70 GSM, 150 GSM, and 200 GSM coating options to meet different strength and longevity requirements.\n\nOffered in more than 25 attractive colours along with Glossy and Matte finish options, VV Tile Sheets provide the classic appearance of tiled roofs while maintaining the benefits of lightweight metal roofing. Easy to install and low maintenance, they deliver a reliable, cost-effective, and visually appealing roofing solution for modern construction projects."
  },
  "rithvig-traditional-tile": {
    title: "VV Traditional Tile",
    image: img205,
    description: "VV Traditional Tiles are manufactured using 100% certified Galvalume steel composed of 55% Aluminium, 43.4% Zinc, and 1.6% Silicon. This advanced coating technology ensures superior corrosion resistance, durability, and long service life across diverse climatic conditions.\n\nThe tiles are available in thickness options of 0.45mm, 0.47mm, and 0.50mm, making them suitable for both residential and commercial roofing applications. Customers can select from 70 GSM, 150 GSM, and 200 GSM coating options to meet varying structural and environmental requirements.\n\nOffered in more than 25 attractive colours along with Glossy and Matte finish options, VV Traditional Tiles deliver a classic roof appearance with modern performance. Lightweight, easy to install, and low maintenance, they provide a reliable and aesthetically pleasing roofing solution for villas, heritage-style homes, resorts, temples, and large architectural projects."
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const product = products[id]; // ✅ FIX

  useEffect(() => {
    requestAnimationFrame(() => {
      pageRef.current.classList.add("enter");
    });
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();

    pageRef.current.classList.remove("enter");
    pageRef.current.classList.add("fade-out");

    setTimeout(() => {
      navigate("/");
    }, 400);
  };

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <section className="product-details" ref={pageRef}>
      <Link to="/" className="back-link" onClick={handleBackClick}>
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
