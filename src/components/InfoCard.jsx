// StudyCard.jsx
import React from "react";
import "../styles/infoCard.css";

export default function InfoCard({ label, labelIcon, study }) {
  return (
    <section className="info-card">
      {labelIcon && (
        <img src={labelIcon} alt={`${label} icon`} className="card-icon" />
      )}
      <h2 className="info-card-title">{label}</h2>
      <h4 className="info-card-headline">{study.headline}</h4>
      <p className="info-card-description">{study.description}</p>
    </section>
  );
}
