export default function GlobalMobileMenu({ open, setOpen }) {
  return (
    <>
      <button className="hamburger-btn" onClick={() => setOpen(true)}>
        <span />
        <span />
        <span />
      </button>

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
            <a href="/case-studies">Case Studies</a>
          </li>
          <li>
            <a href="/process">My Process</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
