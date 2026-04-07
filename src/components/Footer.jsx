import React from "react";
import "../styles/footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
import logo_navy from "../assets/images/logo-navy-joann-carter.png";
const Footer = () => (
  <footer className="footer">
    <div className="footer-col left">
      <div className="footer-contact">
        <div className="footer-contact-item">
          <FaEnvelope className="footer-icon" />
          <span>Joann333Carter@gmail.com</span>
        </div>
        <div className="footer-contact-item">
          <FaPhone className="footer-icon" />
          <span>(603)566-5610</span>
        </div>
      </div>
    </div>
    <div className="footer-col center">
      <img src={logo_navy} alt="Joann Carter logo" className="footer-image" />
      <div className="footer-location">Based in New Hampshire, EST</div>
      <div className="footer-updated">Last Updated: March 2026</div>
      <div className="footer-socials">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </a>
      </div>
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
