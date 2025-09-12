import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.backdropFilter = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <h1>BOMA'LE</h1>
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
