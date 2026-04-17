import { useParams } from "react-router-dom";
import { useState } from "react";
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

  // Error handling for lost case study data
  if (!study) return <div>Case study not found.</div>;

  return (
    <div className="case-study-detail-layout">
      {/* LEFT SIDE MENU */}
      <CaseStudySideMenu categories={categories} />
      {/* RIGHT CONTENT */}
      <div className="case-study-right-col">
        {/* header */}

        <div className="case-study-header">
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
        <div className="case-study-scrolling-container">
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
