//top navigation bar
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/images/logo-joanncarter.png";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Case Studies</a>
          </li>
          <li>
            <a href="/MyProcess">My Process</a>
          </li>
          <li>
            <a href="/Resume">Resume</a>
          </li>
          <li>
            <a href="/AboutMe">About Me</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
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
