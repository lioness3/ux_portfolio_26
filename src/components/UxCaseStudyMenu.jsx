import "../styles/uxCaseStudyMenu.css";
import { Link } from "react-router-dom";
// Populates the UX menu for the contents drop down and the side menu
export default function UxCaseStudyMenu({ categories, onClose }) {
  return (
    <div className="ux-case-study-menu-container">
      <ul className="ux-case-study-menu-list">
        {Object.entries(categories).map(([key, category]) => (
          <li key={key} className="ux-case-study-menu-item">
            <a
              className="ux-case-study-menu-link"
              href={`#${key}`}
              onClick={onClose} //MENU CLOSES when link is clicked
            >
              {category.icon && (
                <img
                  className="ux-case-study-menu-icon"
                  src={category.icon}
                  alt={`${category.title} icon`}
                />
              )}
              {category.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Brings user back to the home page and scrolls to the case studies section */}
      <Link
        to="/"
        state={{ scrollTo: "case-studies" }}
        className="ux-case-study-menu-back"
      >
        ← Back to Case Studies
      </Link>
    </div>
  );
}
