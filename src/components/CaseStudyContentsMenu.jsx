import "../styles/caseStudyContentsMenu.css";
export default function CaseStudyContentsMenu({ categories, open, setOpen }) {
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

        <ul>
          {Object.entries(categories).map(([key, category]) => (
            <li key={key}>
              <a href={`#${key}`} onClick={() => setOpen(false)}>
                {category.icon && <img src={category.icon} alt="" />}
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
