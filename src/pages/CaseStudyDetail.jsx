import { useParams } from "react-router-dom";
import { useState } from "react";
import InfoCard from "../components/InfoCard";
import CaseStudySideMenu from "../components/CaseStudySideMenu";
import CaseStudyContentsMenu from "../components/CaseStudyContentsMenu";
import "../styles/caseStudyDetailPage.css";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);
  const [contentsOpen, setContentsOpen] = useState(false);
  if (!study) return <div>Case study not found.</div>;

  const categories = study.categories;
  const caseStudyInfo = Object.entries(categories);
  // color palette of the case study used for block coloring on some info cards
  const colorPalette = study.palette;

  const role = categories.myRole.headline;
  const timeline = study.timeline;
  const tools = study.tools;
  const catchPhrase = study.catchPhrase;
  const summary = study.summary;

  return (
    <div className="case-study-detail-layout">
      {/* LEFT SIDE MENU */}
      <CaseStudySideMenu categories={categories} />

      {/* RIGHT CONTENT */}
      {/* header */}
      <div className="case-study-header">
        {/* left column in header */}
        <div className="case-study-header-col1">
          <h1 className="case-study-header-title">{study.title}</h1>

          <span className="case-study-header-type">{study.type}</span>
          <h2 className="case-study-header-catchPhrase">{catchPhrase}</h2>
          <p className="case-study-header-summary">{summary}</p>
        </div>
        {/* right content in header- image */}
        <div className="case-study-header-col2">
          <img
            src={study.caseStudyHeaderImage}
            alt={study.title}
            className="case-study-header-image"
          />
        </div>
        {/* bottom details in header */}
        <div className="case-study-header-bottom">
          <span>Role: </span>
          {role}
          <span> | </span>
          <span>Timeline: </span>
          {timeline}
          <span> | </span>
          <span>Tools: </span>
          {tools}
        </div>
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
  );
}

export default CaseStudyDetail;
