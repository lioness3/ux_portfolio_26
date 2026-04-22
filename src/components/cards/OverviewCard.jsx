import "../../styles/cards/overviewCard.css";
import Button from "../Button";
import { FaGithub } from "react-icons/fa";

export default function OverviewCard({
  role,
  timeline,
  tools,
  catchPhrase,
  summary,
  image,
  sourceCode,
}) {
  return (
    <div>
      <div className="overview-details">
        <span>Role: {role}</span>
        <span> | </span>
        <span>Timeline: {timeline}</span>
        <span> | </span>
        <span>Tools: {tools}</span>
      </div>
      <h4 className="info-card-headline">{catchPhrase}</h4>
      <p className="info-card-description">{summary}</p>
      <img
        src={image}
        alt="Overview"
        className="info-card-image"
      />

      {sourceCode && (
        <Button
          classN="sourcecode_btn"
          icon={<FaGithub />}
          btnText="View the Source Code"
          primary={false}
          link={sourceCode}
        />
      )}
    </div>
  );
}
