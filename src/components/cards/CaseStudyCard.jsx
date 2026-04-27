import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sections/caseStudies.css";
import Tooltip from "../Tooltip";
import featuredStar from "../../assets/images/star.png";
const CaseStudyCard = ({
  mainImage,
  bgColor,
  title,
  description,
  id,
  featured,
}) => {
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
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* 
       Display a star on one case study card that is featured */}
        {featured && (
          <div className="featured-container">
            <Tooltip label="Featured Item" position="left">
              <img className="featured-star" src={featuredStar} alt="star" />
            </Tooltip>
          </div>
        )}
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
