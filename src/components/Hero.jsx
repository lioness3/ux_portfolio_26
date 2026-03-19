import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/heroImage.png";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Joann Carter</h1>
        <a className="hero-title">User Experience Engineer</a>
        <p className="hero-description">
          Designing intuitive, accessible experiences that empower every user.
        </p>

        <Button
          className="btn-cta"
          icon={<FaArrowRight />}
          onClick={() => (window.location.href = "/CaseStudies")}
        >
          View My Work
        </Button>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Portrait" className="hero-image" />
      </div>
    </section>
  );
}
