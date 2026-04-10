import "../styles/caseStudyContentsMenu.css";
import UxCaseStudyMenu from "./UxCaseStudyMenu";

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
        <button
          className="contents-menu-close-btn"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <UxCaseStudyMenu
          categories={categories}
          onClose={() => setOpen(false)}
        />
      </nav>
    </>
  );
}
