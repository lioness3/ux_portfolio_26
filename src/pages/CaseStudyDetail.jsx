import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FaGithub } from "react-icons/fa";
import Button from "../components/Button";
import Tooltip from "../components/Tooltip";
import InfoCard from "../components/cards/InfoCard";
import CaseStudySideMenu from "../components/navigation/CaseStudySideMenu";
import CaseStudyContentsMenu from "../components/navigation/CaseStudyContentsMenu";
import "../styles/caseStudyDetailPage.css";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);
  const [contentsOpen, setContentsOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(true);

  const categories = study.categories;
  const caseStudyInfo = Object.entries(categories);
  // color palette of the case study used for block coloring on some info cards
  const colorPalette = study.palette;

  const role = categories.myRole.headline;
  const timeline = study.timeline;
  const tools = study.tools;
  const catchPhrase = study.catchPhrase;
  const summary = study.summary;
  const sourceCode = study.sourceCode;
  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);
  const headerRef = useRef(null);

  const scrollRef = useRef(null);

  // RESETS THE SCROLL POSITION WHEN THE CASE STUDY CHANGES
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [id]);

  //  DYNAMIC HEADER HEIGHT TO DETERMINE THE REQUESTED CARD POSITION
  useEffect(() => {
    if (headerRef.current) {
      const h = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--dynamic-header-height",
        `${h}px`,
      );
    }
  }, [headerOpen]);
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
      <CaseStudySideMenu categories={categories} activeId={activeId} />
      {/* RIGHT CONTENT */}
      <div className="case-study-right-col">
        {/* header */}

        <div className="case-study-header" ref={headerRef}>
          {/* left column in header */}
          <div className="case-study-header-col1">
            {/* HIDES AND SHOWS THE HEADER DETAILS */}
            <div className="header-title-row">
              <h1 className="case-study-header-title">{study.title}</h1>
              <button
                className="header-toggle-btn"
                onClick={() => setHeaderOpen((prev) => !prev)}
              >
                {/* uses tooltip to instruct user to hide or show the extra header details */}
                {headerOpen ? (
                  <Tooltip label="See Less" position="right">
                    ▲
                  </Tooltip>
                ) : (
                  <Tooltip label="See More" position="right">
                    ▼
                  </Tooltip>
                )}
              </button>
            </div>

            <span className="case-study-header-type">{study.type}</span>
            {headerOpen && (
              <div>
                <h2 className="case-study-header-catchPhrase">{catchPhrase}</h2>
                <p className="case-study-header-summary">{summary}</p>
              </div>
            )}
          </div>
          {/* right content in header- image */}
          {headerOpen && (
            <div className="case-study-header-col2">
              <img
                src={study.caseStudyHeaderImage}
                alt={study.title}
                className="case-study-header-image"
              />
            </div>
          )}
          {/* bottom details in header */}
          {headerOpen && (
            <div className="case-study-header-bottom">
              {sourceCode && (
                <Button
                  classN="sourcecode_btn"
                  icon={<FaGithub />}
                  btnText="View the Source Code"
                  primary={false}
                  link={sourceCode}
                />
              )}
              <span>Role: </span>
              {role}
              <span> | </span>
              <span>Timeline: </span>
              {timeline}
              <span> | </span>
              <span>Tools: </span>
              {tools}
            </div>
          )}
          {/* Mobile-only Contents button */}
          <button
            className="contents-btn"
            onClick={() => setContentsOpen((prev) => !prev)}
          >
            Contents ▾
          </button>

          {/* Mobile Contents Drawer */}
          <CaseStudyContentsMenu
            categories={study.categories}
            open={contentsOpen}
            setOpen={setContentsOpen}
          />
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
