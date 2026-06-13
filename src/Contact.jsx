import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* header */}
      <div className="contact__header">
        <div className="contact__label">— Find us</div>
        <h2 className="contact__heading">
          Come say <em>hello.</em>
        </h2>
      </div>

      {/* three columns */}
      <div className="contact__grid">

        {/* col 1 — address */}
        <div className="contact__block">
          <div className="contact__block-label">Location</div>
          <p className="contact__block-text">
            12 Amber Lane<br />
            Lagos Island<br />
            Lagos, Nigeria
          </p>
        </div>

        {/* col 2 — hours */}
        <div className="contact__block">
          <div className="contact__block-label">Hours</div>
          <p className="contact__block-text">
            Mon – Fri &nbsp;&nbsp; 7am – 8pm<br />
            Saturday &nbsp;&nbsp;&nbsp; 8am – 7pm<br />
            Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9am – 5pm
          </p>
        </div>

        {/* col 3 — contact */}
        <div className="contact__block">
          <div className="contact__block-label">Get in touch</div>
          <p className="contact__block-text">
            <a href="mailto:hello@aecups.com" className="contact__link">
              hello@aecups.com
            </a>
            <br />
            <a href="tel:+2348000000000" className="contact__link">
              +234 800 000 0000
            </a>
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact