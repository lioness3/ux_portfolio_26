import "../styles/globalMobileMenu.css";
import { Link } from "react-router-dom";
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

        <Link to="/" state={{ scrollTo: "case-studies" }}>
          Case Studies
        </Link>

        <Link to="/" state={{ scrollTo: "my-process" }}>
          My Process
        </Link>

        <a href="#resume">Resume</a>

        <Link to="/" state={{ scrollTo: "about-me" }}>
          About Me
        </Link>

        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
