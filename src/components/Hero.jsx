import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/heroImage.png";
import Button from "./Button";
import InfoPopup from "./InfoPopup";
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Joann Carter</h1>
        <InfoPopup />

        <Button
          classN="btn-cta"
          icon={<FaArrowRight />}
          onClick={() => (window.location.href = "/CaseStudies")}
          btnText={"View My Work"}
          primary={true}
        />
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Portrait" className="hero-image" />
      </div>
    </section>
  );
}
