import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import CaseStudySideMenu from "../components/CaseStudySideMenu";
import { categoryDefinitions } from "../data/categoryDefinitions";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);

  if (!study) return <div>Case study not found.</div>;

  const categories = study.categories;
  const entries = Object.entries(categories);

  return (
    <div className="case-study-detail-layout">
      {/* LEFT SIDE MENU */}
      <CaseStudySideMenu categories={categories} />

      {/* RIGHT CONTENT */}
      <div className="case-study-detail">
        <h1>{study.title}</h1>

        <img
          src={study.mainImage}
          alt={study.title}
          className="case-study-detail-image"
        />

        <p>{study.description}</p>

        {entries.map(([key, content], idx) => {
          const def = categoryDefinitions[key];
          const sectionId = key.toLowerCase();

          return (
            <InfoCard
              key={idx}
              id={sectionId}
              title={def.title}
              titleIcon={def.icon}
              study={content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CaseStudyDetail;
