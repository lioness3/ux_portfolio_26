import React from "react";
import "../../styles/sections/caseStudies.css";
import CaseStudyCard from "../cards/CaseStudyCard";
// props come from portfolio page
const CaseStudies = ({ studies }) => {
  return (
    <section className="case-wrapper" id="case-studies">
      <div className="case-studies-list">
        {studies.map((study, idx) => (
          <CaseStudyCard key={idx} id={idx} {...study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
