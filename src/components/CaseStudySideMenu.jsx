import { categoryDefinitions } from "../data/categoryDefinitions";
import "../styles/CaseStudySideMenu.css";
export default function CaseStudySideMenu({ categories }) {
  const entries = Object.entries(categories);

  return (
    <nav className="side-menu">
      <ul className="side-menu-list">
        {entries.map(([key], idx) => {
          const def = categoryDefinitions[key];
          const id = key.toLowerCase();

          return (
            <li key={idx} className="side-menu-item">
              <a href={`#${id}`} className="side-menu-link">
                {def.icon && (
                  <img src={def.icon} alt="" className="side-menu-icon" />
                )}
                <span className="side-menu-text">{def.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
