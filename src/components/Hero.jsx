import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/heroImage.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Joannn Carter</h1>
        <a className="hero-title">UX Engineer</a>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Portrait" className="hero-image" />
      </div>
    </section>
  );
}
