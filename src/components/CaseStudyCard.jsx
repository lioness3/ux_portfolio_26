import React from "react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ mainImage, bgColor, title, description, id }) => {
  return (
    <Link
      to={`/case-study/${id}`}
      className="case-study-link"
      style={{ textDecoration: "none" }}
    >
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
    </Link>
  );
};

export default CaseStudyCard;
