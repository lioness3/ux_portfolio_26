import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);

  if (!study) return <div>Case study not found.</div>;

  return (
    <div className="case-study-detail">
      <h1>{study.title}</h1>
      <img
        src={study.mainImage}
        alt={study.title}
        className="case-study-detail-image"
      />
      <p>{study.description}</p>
      <InfoCard
        id="my-role"
        title={study.categories.myRole.title}
        titleIcon={study.categories.myRole.icon}
        study={study.categories.myRole}
      />
      <InfoCard
        id="problem"
        title={study.categories.problem.title}
        titleIcon={study.categories.problem.icon}
        study={study.categories.problem}
      />
      <InfoCard
        id="goal"
        title={study.categories.goal.title}
        titleIcon={study.categories.goal.icon}
        study={study.categories.goal}
      />
      <InfoCard
        id="user-research"
        title={study.categories.userResearch.title}
        titleIcon={study.categories.userResearch.icon}
        study={study.categories.userResearch}
      />
    </div>
  );
}

export default CaseStudyDetail;
