import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>BOMALÉ</h3>
          </div>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#find">Find the Truck</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer-social">
            <a href="https://instagram.com/bomalebourekas" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <p>&copy; 2025 BOMALÉ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
