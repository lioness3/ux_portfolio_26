import "../../styles/navigation/globalMobileMenu.css";
import { Link } from "react-router-dom";
// used for the hamburger button instead of top nav on smaller screens
export default function GlobalMobileMenu({ open, setOpen }) {
  // look into this and why not using prev +> !prev
  const rootStyles = getComputedStyle(document.documentElement);
  const navHeight = parseInt(rootStyles.getPropertyValue("--nav-height"), 10); // turn the nav height css variable into a number

  const scrollToBottom = document.body.scrollHeight - navHeight;
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
              top: scrollToBottom,
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
