import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          <a href="/" onClick={closeMenu}>
            <h1>BOMALÉ</h1>
          </a>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/menu" onClick={closeMenu}>Explore the Menu</a></li>
          <li><a href="/find" onClick={closeMenu}>Find the Truck</a></li>
          <li><a href="/book" onClick={closeMenu}>Book Us for an Event</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
