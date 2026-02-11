//top navigation bar
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav className="nav-bar">
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
    </nav>
  );
}

export default Navbar;
