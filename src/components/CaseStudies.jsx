import React from "react";
import "../styles/caseStudies.css";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = ({ studies }) => {
  return (
    <section id="case-studies">
      <div className="case-studies-list">
        {studies.map((study, idx) => (
          <CaseStudyCard key={idx} id={idx} {...study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
