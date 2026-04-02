//top navigation bar
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/images/logo-joanncarter.png";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <a href="/">Case Studies</a>

      <a href="/MyProcess">My Process</a>

      <a href="/Resume">Resume</a>

      <a href="/AboutMe">About Me</a>

      <a href="/Contact">Contact</a>

      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
