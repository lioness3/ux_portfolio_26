import "../../styles/caseStudyDetailPage.css";
import { Link } from "react-router-dom";
// used to show the sections/ contents of the case studies detail page. displayed on the left side of the bigger screens
export default function CaseStudySideMenu({ categories }) {
  const menuItems = Object.entries(categories);

  return (
    <nav>
      <div className="side-menu">
        <ul className="side-menu-list">
          {menuItems.map(([key, category], idx) => {
            return (
              <li key={idx} className="side-menu-item">
                <a href={`#${key}`} className="side-menu-link">
                  {category.icon && (
                    <img
                      src={category.icon}
                      alt={`${category.title} icon`}
                      className="side-menu-icon"
                    />
                  )}
                  <span className="side-menu-text">{category.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <Link
          to="/"
          state={{ scrollTo: "case-studies" }}
          className="side-menu-back"
        >
          ← Back to Case Studies
        </Link>
      </div>
    </nav>
  );
}
