import "../styles/globalMobileMenu.css";
// used for the hamburger button instead of top nav on smaller screens
export default function GlobalMobileMenu({ open, setOpen }) {
  // look into this and why not using prev +> !prev
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

        <ul className="global-mobile-menu-list">
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
