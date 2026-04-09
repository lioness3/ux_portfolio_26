import "../styles/caseStudyContentsMenu.css";
// used for the contents menu that shows on the left of the bigger screens in the case study details page
export default function CaseStudyContentsMenu({ categories, open, setOpen }) {
  // look into this and why not using prev +> !prev
  return (
    <>
      <div
        className={`contents-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`contents-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ×
        </button>

        <ul className="contents-menu-list">
          {Object.entries(categories).map(([key, category]) => (
            <li key={key}>
              <a
                className="contents-menu-link"
                href={`#${key}`}
                onClick={() => setOpen(false)}
              >
                {category.icon && (
                  <img
                    className="contents-menu-icon"
                    src={category.icon}
                    alt={`${category.title} icon`}
                  />
                )}
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
