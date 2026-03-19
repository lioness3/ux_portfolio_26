import React from 'react';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Jordan Carter</h1>
        <p className="hero-title">Product Designer — UX & Visual Design</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Get in touch</a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://via.placeholder.com/520x520.png?text=Portrait"
          alt="Portrait"
          className="hero-image"
        />
      </div>
    </section>
  );
}
