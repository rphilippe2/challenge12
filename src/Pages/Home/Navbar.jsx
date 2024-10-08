import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className="navbar--content"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              to="/portfolio"
              duration={500}
              className="navbar--content"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/about"
              className="navbar--content"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/testimonial"
              className="navbar--content"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/skills"
              className="navbar--content"
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/contact_us"
        className="btn btn-outline-primary"
      >
        Contact Me
      </NavLink>
    </nav>
  );
}

export default Navbar;
