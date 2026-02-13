import instagram from "../assets/images/instagram.png";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* ADDRESS */}
        <div className="footer-item">
          <h4>📍 Address</h4>
          <p>
            Jakkasamudram–Rayakottai Rd,<br />
            Opposite EB Office,<br />
            Rahamath Colony,<br />
            Rayakottai,<br />
            Tamil Nadu – 635116
          </p>
        </div>

        {/* EMAIL */}
        <div className="footer-item">
          <h4>✉️ Email</h4>
          <p>
            <a href="mailto:vvroofings01@gmail.com">
              vvroofings01@gmail.com
            </a>
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-item">
          <h4>📞 Contact</h4>
          <p>
            <a href="tel:+919952611169">
              +91 99526 11169
            </a>
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-item">
          <h4 className="follow-title">
          <img src={instagram} alt="Instagram" className="insta-icon" />
          Follow us at
          </h4>

          <p className="social">
            <a 
              href="https://www.instagram.com/vv_roofings_rayakottai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @vv_roofings_rayakottai
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>VV Roofing</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
