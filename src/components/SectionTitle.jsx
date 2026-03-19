import React from "react";
import "../styles/sectionTitle.css";

const SectionTitle = ({ title, subtitle, image }) => {
  return (
    <section className="section-title-bg">
      <div className="section-title-text">
        <h2 className="section-title-heading">{title}</h2>
      </div>
      {image && (
        <img src={image} alt="Section visual" className="section-title-image" />
      )}
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </section>
  );
};

export default SectionTitle;
