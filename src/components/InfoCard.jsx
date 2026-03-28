// StudyCard.jsx
import React from "react";
import "../styles/infoCard.css";

export default function InfoCard({ id, title, titleIcon, study }) {
  return (
    <section className="info-card" id={id}>
      <div className="info-card-col1">
        {titleIcon && (
          <img src={titleIcon} alt={`${title} icon`} className="card-icon" />
        )}
      </div>

      <div className="info-card-col2">
        <h2 className="info-card-title">{title}</h2>
        <h4 className="info-card-headline">{study.headline}</h4>
        <p className="info-card-description">{study.description}</p>
      </div>
    </section>
  );
}
