import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Technologies", path: "/technologies" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <NavLink to="/" className="brand-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Code6 Technologies"
          />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink to="/contact" className="nav-button">
          <span>Let's Talk</span>
          <strong>↗</strong>
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <div className="mobile-menu-inner">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mobile-cta"
          >
            <span>Let's Talk</span>
            <strong>↗</strong>
          </NavLink>

        </div>

      </div>
    </header>
  );
}