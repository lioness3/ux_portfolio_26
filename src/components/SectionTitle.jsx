import React from "react";
import "../styles/sectionTitle.css";

const SectionTitle = ({ title, subtitle, image }) => {
  return (
    <section className="section-title-bg">
      {image && (
        <img src={image} alt="Section visual" className="section-title-image" />
      )}
      <div className="section-title-text">
        <h2 className="section-title-heading">{title}</h2>
      </div>

      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </section>
  );
};

export default SectionTitle;
