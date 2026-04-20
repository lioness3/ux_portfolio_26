import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import InfoCard from "../components/cards/InfoCard";
import CaseStudySideMenu from "../components/navigation/CaseStudySideMenu";
import "../styles/caseStudyDetailPage.css";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);

  const categories = study.categories;
  const allCategories = {
    overview: {
      type: "overview",
      title: "Overview",
      catchPhrase: study.catchPhrase,
      summary: study.summary,
      image: study.caseStudyHeaderImage,
      role: categories.myRole.headline,
      timeline: study.timeline,
      tools: study.tools,
      sourceCode: study.sourceCode,
    },
    ...categories,
  };
  const caseStudyInfo = Object.entries(allCategories);
  // color palette of the case study used for block coloring on some info cards
  const colorPalette = study.palette;

  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);
  const scrollRef = useRef(null);

  // RESETS THE SCROLL POSITION WHEN THE CASE STUDY CHANGES
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [id]);

  // FIGURES OUT THE POSITION OF THE CARD IN VIEW WHILE SCROLLING
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".info-card");
    sections.forEach((sec) => observer.current.observe(sec));

    return () => observer.current.disconnect();
  }, []);

  // Error handling for lost case study data
  if (!study) return <div>Case study not found.</div>;

  return (
    <div className="case-study-detail-layout">
      {/* LEFT SIDE MENU */}
      <CaseStudySideMenu categories={allCategories} activeId={activeId} />
      {/* RIGHT CONTENT */}
      <div className="case-study-right-col">
        {/* Simple Header */}
        <div className="case-study-simple-header">
          <h1 className="simple-header-title">{study.title}</h1>
          <span className="simple-header-type">{study.type}</span>
        </div>
        <div className="case-study-scrolling-container" ref={scrollRef}>
          {/* Loops through the caseStudies.js data file and displays the info on cards  */}
          {caseStudyInfo.map(([key, category]) => {
            return (
              <InfoCard
                key={key}
                id={key}
                category={category}
                colorPalette={colorPalette}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
