import { useParams } from "react-router-dom";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);

  if (!study) return <div>Case study not found.</div>;

  return (
    <div className="case-study-detail">
      <h1>{study.title}</h1>
      <img src={study.mainImage} alt={study.title} className="case-study-detail-image" />
      <p>{study.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CaseStudyDetail;
