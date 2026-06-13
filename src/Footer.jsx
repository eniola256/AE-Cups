import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">AE Cups</div>

      <p className="footer__copy">
        &copy; 2025 <span>AE Cups.</span> All rights reserved.
      </p>

      <div className="footer__right">
        <a href="#order" className="footer__cta">Order Now</a>
      </div>
    </footer>
  );
}

export default Footer;