import React from "react";
import "../../styles/sections/footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
import logo_navy from "../../assets/images/logo/logo-navy-joann-carter.png";
const Footer = () => (
  <footer className="footer">
    <div className="contact-header">
      <a href="mailto:joann333carter@gmail.com">
        <FaEnvelope />
      </a>

      <a href="tel:+16035665610">
        {" "}
        <FaPhone />{" "}
      </a>
    </div>
    <div className="footer-col left">
      <img src={logo_navy} alt="Joann Carter logo" className="footer-image" />
    </div>
    <div className="footer-col center">
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/joann-carter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/lioness3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.behance.net/Carter-Joann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>
      </div>
      <div className="footer-updated">Last Updated: March 2026</div>
      <div className="footer-location">Based in New Hampshire, EST</div>

      <div className="footer-copyright">
        © 2026 Joann Carter. All rights reserved
      </div>
    </div>
    <div className="footer-col right">
      Designing with empathy.
      <br />
      Driven by curiosity.
      <br />
      Committed to growth.
    </div>
  </footer>
);

export default Footer;
