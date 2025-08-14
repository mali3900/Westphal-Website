import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-brand">Westphal Audio Works</div>
      <nav className="header-nav">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
        >
          About
        </Link>
        <Link 
          to="/music" 
          className={location.pathname === '/music' ? 'active' : ''}
        >
          Music
        </Link>
        <Link 
          to="/gallery" 
          className={location.pathname === '/gallery' ? 'active' : ''}
        >
          Gallery
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
