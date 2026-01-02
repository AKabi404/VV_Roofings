import img10 from "../assets/images/img10.jpg";

function AboutCompany() {
  return (
    <section id="about" className="about-company">
      {/* LEFT IMAGE */}
      <div className="about-image">
        <img src={img10} alt="VV Roofing Company" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-content">
        <h2>About VV Roofing</h2>
        <p>
          VV Roofing is a leading roofing solutions provider committed to delivering premium-quality roofing sheets and roofing tiles for residential, commercial, and industrial applications. With a strong focus on durability, aesthetics, and innovation, we help our customers protect and enhance their spaces with confidence.
        </p>
        <p>
         Founded with a vision to offer modern and reliable roofing systems, VV Roofing has grown into a trusted name in the industry. Our product range includes metal roofing, roof shingles, UPVC roofing, and advanced roofing accessories designed to withstand harsh weather conditions while maintaining long-lasting performance.
        </p>
        <p>
          Our team of experienced professionals ensures every solution meets high standards of quality and precision. From product selection to installation guidance, we prioritize customer satisfaction by offering cost-effective, weather-resistant, and visually appealing roofing solutions.
        </p>
        <p>
          At VV Roofing, we believe a roof is more than just protection—it’s an investment in safety, comfort, and style. That’s why we continuously strive to provide innovative roofing products that combine strength, elegance, and sustainability.
        </p>
      </div>
    </section>
  );
}

export default AboutCompany;
