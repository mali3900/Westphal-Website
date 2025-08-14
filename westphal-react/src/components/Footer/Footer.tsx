import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Westphal Audio Works</p>
      <p>
        <Link to="/" className="footer-link">
          Back to Home
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
