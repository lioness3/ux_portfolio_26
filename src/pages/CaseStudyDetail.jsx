import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import CaseStudySideMenu from "../components/CaseStudySideMenu";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);

  if (!study) return <div>Case study not found.</div>;

  const categories = study.categories;
  const caseStudyInfo = Object.entries(categories);

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

        {caseStudyInfo.map(([key, category]) => {
          return <InfoCard key={key} id={key} category={category} />;
        })}
      </div>
    </div>
  );
}

export default CaseStudyDetail;
