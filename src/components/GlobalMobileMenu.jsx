import "../styles/globalMobileMenu.css";
export default function GlobalMobileMenu({ open, setOpen }) {
  return (
    <>
      <div
        className={`global-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`global-mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ×
        </button>

        <ul>
          <li>
            <a href="#case-studies">Case Studies</a>
          </li>
          <li>
            <a href="#my-process">My Process</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
