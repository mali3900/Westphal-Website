import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // eslint-disable-next-line
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  // eslint-disable-next-line
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (location.pathname === path) {
      const fn = (window as any).scrollToTopSmooth;
      if (typeof fn === "function") fn();
      else window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    } else {
      closeMenu();
      navigate(path);
    }
  };

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-top">
        <div className="header-brand">
          <Link 
            to="/"
            className="header-brand"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <h1>
            Westphal Audio Works
            </h1>
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/")}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === "/about" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/about")}
        >
          About
        </Link>
        <Link 
          to="/music" 
          className={location.pathname === "/music" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/music")}
        >
          Music
        </Link>
        <Link 
          to="/gallery" 
          className={location.pathname === "/gallery" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/gallery")}
        >
          Gallery
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/contact")}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
