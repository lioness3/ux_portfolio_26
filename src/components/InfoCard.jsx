// StudyCard.jsx
import React from "react";
import "../styles/infoCard.css";
import BlockCard from "./BlockCard";
//uses the category definitions data for the card title, icon and typeto determine what type of info card to display.
// Gets the data to display from the case studies data
export default function InfoCard({ id, category }) {
  console.log("Rendering InfoCard with type:", category);
  return (
    <section className="info-card" id={id}>
      <div className="info-card-col1">
        {category.icon && (
          <img
            src={category.icon}
            alt={`${category.title} icon`}
            className="card-icon"
          />
        )}
      </div>

      <div className="info-card-col2">
        <h2 className="info-card-title">{category.title}</h2>
        {category.type === "text" && (
          <div>
            <h4 className="info-card-headline">{category.headline}</h4>
            <p className="info-card-description">{category.description}</p>
          </div>
        )}
        {/* {typeToDisplay === "block" && (
          <BlockCard items={study} bgColor={study.palette[0]} />
        )} */}
      </div>
    </section>
  );
}
