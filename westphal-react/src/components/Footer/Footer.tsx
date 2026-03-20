import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const fn = (window as any).scrollToTopSmooth;
      if (typeof fn === "function") {
        fn();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="footer">
      <p>© {currentYear} Westphal Audio Works</p>
      <p>
        <a href="/" className="footer-link" onClick={handleBackHome}>
          Back to Home
        </a>
      </p>
    </footer>
  );
};

export default Footer;
