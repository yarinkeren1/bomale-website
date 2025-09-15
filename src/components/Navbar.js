import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (path) => {
    // If clicking on the current page, scroll to top
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
        } else {
          navbar.style.backgroundColor = '#FFFFFF';
          navbar.style.backdropFilter = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={() => handleNavClick('/')}>
            <h1>BOMA'LE</h1>
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/" onClick={() => handleNavClick('/')}>Home</Link></li>
          <li><Link to="/menu" onClick={() => handleNavClick('/menu')}>Menu</Link></li>
          <li><Link to="/our-story" onClick={() => handleNavClick('/our-story')}>Our Story</Link></li>
          <li><Link to="/contact" onClick={() => handleNavClick('/contact')}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
