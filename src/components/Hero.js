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
        <h1 className="main-logo">BOMALÉ</h1>
        <p className="tagline">Bourekas. Ful-FILLING Food.</p>
        <p className="pitch">Traditional Israeli street food, with a twist—coming to Miami.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="/menu">Explore the Menu</a>
          <a className="btn btn-secondary" href="/find">Find the Truck</a>
          <a className="btn btn-primary" href="/book">Book Us for an Event</a>
        </div>
        <p className="hero-phrase">Flaky. Golden. Addictive.</p>
      </div>
    </section>
  );
};

export default Hero;
