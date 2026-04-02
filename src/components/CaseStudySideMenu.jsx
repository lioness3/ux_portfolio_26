import "../styles/caseStudyDetailPage.css";
export default function CaseStudySideMenu({ categories }) {
  const menuItems = Object.entries(categories);

  return (
    <nav className="side-menu">
      <ul className="side-menu-list">
        {menuItems.map(([key, category], idx) => {
          return (
            <li key={idx} className="side-menu-item">
              <a href={`#${key}`} className="side-menu-link">
                {category.icon && (
                  <img src={category.icon} alt="" className="side-menu-icon" />
                )}
                <span className="side-menu-text">{category.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
