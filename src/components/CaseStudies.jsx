import React from "react";
import "../styles/caseStudies.css";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = ({ studies }) => {
  return (
    <div className="case-studies-list">
      {studies.map((study, idx) => (
        <CaseStudyCard key={idx} {...study} />
      ))}
    </div>
  );
};

export default CaseStudies;
