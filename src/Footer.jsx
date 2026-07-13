import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">AE Cups</div>

      <p className="footer__copy">
        &copy; 2025 <span>AE Cups.</span> All rights reserved.
      </p>

      <div className="footer__right">
        <Link to="/checkout">
          <span className="footer__cta">Order Now</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;