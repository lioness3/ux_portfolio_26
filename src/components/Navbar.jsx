//top navigation bar
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div className="logo">My Name</div>

        <ul className="nav-links">
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
