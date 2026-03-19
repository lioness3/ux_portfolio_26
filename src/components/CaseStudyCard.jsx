import React from "react";

const CaseStudyCard = ({ mainImage, bgColor, title, description }) => {
  return (
    <div
      className="case-study-card"
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundColor: bgColor,
      }}
    >
      <div style={{ background: bgColor }}>
        <div className="case-study-banner">
          <h3 className="case-study-title">{title}</h3>
          <p className="case-study-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
