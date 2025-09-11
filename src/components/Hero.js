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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="main-logo">BOMALÉ</h1>
        <p className="tagline">Bourekas. Ful-FILLING Food.</p>
        <p className="pitch">Traditional Israeli street food, with a twist—coming to Miami.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('menu')}>Explore the Menu</button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('find')}>Find the Truck</button>
          <button className="btn btn-primary" onClick={() => scrollToSection('catering')}>Book Us for an Event</button>
        </div>
        <p className="hero-phrase">Flaky. Golden. Addictive.</p>
      </div>
    </section>
  );
};

export default Hero;
