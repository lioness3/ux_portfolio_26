//top navigation bar
import { useState } from "react";
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/images/logo-joanncarter.png";
import GlobalMobileMenu from "./GlobalMobileMenu";
import HamburgerIcon from "../assets/icons/hamburger.svg";
function Navbar() {
  const [globalOpen, setGlobalOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <button
        className="hamburger-btn"
        onClick={() => setGlobalOpen((prev) => !prev)}
      >
        <img src={HamburgerIcon} alt="Hamburger Icon" />
      </button>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <GlobalMobileMenu open={globalOpen} setOpen={setGlobalOpen} />
      <div className="nav-bar-menu-items">
        <a href="#case-studies">Case Studies</a>

        <a href="#my-process">My Process</a>

        <a href="#resume">Resume</a>

        <a href="#about-me">About Me</a>

        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
