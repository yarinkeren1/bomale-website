import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heroContent.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 200);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <div className="logo-with-pronunciation">
            <h1 className="main-logo">BOMALÉ</h1>
            <p className="pronunciation">(boh-MAH-leh)</p>
          </div>
          <div className="logo-with-pronunciation">
            <h2 className="sub-logo">BOUREKAS</h2>
            <p className="pronunciation">(boo-REH-kahs)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
