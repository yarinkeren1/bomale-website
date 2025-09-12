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

    // Animation for about section
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const aboutElements = document.querySelectorAll('.about-text, .about-image');
    aboutElements.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
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
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <h1 className="main-logo">BOMALÉ</h1>
            <h2 className="sub-logo">BOUREKAS</h2>
          </div>
          <div className="hero-definitions">
            <div className="definition definition-1">
              <div className="definition-word">Bo (v.; prep.)</div>
              <div className="definition-pronunciation">Pronunciation: /bo/</div>
              <div className="definition-text">(verb) To come; to approach; to arrive at a place.<br/>(preposition) Inside; within; denoting the interior of something.</div>
            </div>
            <div className="definition definition-2">
              <div className="definition-word">Malé (adj.; adv.)</div>
              <div className="definition-pronunciation">Pronunciation: /maˈle/</div>
              <div className="definition-text">(adjective) Abundant; full of; replete with a given quality or substance.<br/>(adverb) To a great extent; in large measure; plentifully.</div>
            </div>
            <div className="definition definition-3">
              <div className="definition-word">Bourekas (n., pl.)</div>
              <div className="definition-pronunciation">Pronunciation: /buˈre.kas/</div>
              <div className="definition-text">(noun) A baked pastry made of thinly layered or puff pastry dough, traditionally filled with cheese, potato, spinach, eggplant, or other savory or sweet mixtures; a popular item in Middle Eastern and Sephardic Jewish cuisines.<br/>(plural form) Refers collectively to pastries of this type, often served as snacks, street food, or part of a meal.</div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="what-is-bomale" className="what-is-bomale">
        <div className="container">
          <div className="what-is-content">
            <h2>What is BOMALÉ?</h2>
            <p>BOMALÉ is a modern take on Israeli bourekas. Traditionally, bourekas is a flaky, golden pastry filled with savory ingredients that's been a staple of Middle Eastern cuisine for ages.</p>
            <p>Our bourekas are handcrafted daily using honed in techniques, from dough to filling, all of our products are made with precision. Each bite delivers the perfect balance of crispy, buttery pastry and flavorful fillings that celebrate both tradition and innovation.</p>
            <p>Whether you're discovering bourekas for the first time or grew up with them, BOMALÉ brings you an authentic taste experience that's <span className="brand-phrase">made to share. Or not.</span></p>
          </div>
        </div>
      </section>
      
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Started by Yarin, raised on Israeli flavors and fueled by a love for food and culture. BOMALÉ serves up a fresh twist on bourekas — flaky, stuffed pastries you'll crave, whether it's your first time or your fiftieth.</p>
              <p>What BOMALÉ stands for: cultural roots + Miami energy. Unique flavors for both familiar and new palates. <span className="brand-phrase">Made to share. Or not.</span></p>
            </div>
            <div className="about-image">
              <div className="boureka-illustration"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="locations">
        <div className="container">
          <h2>Where You Can Find Us</h2>
          <div className="locations-grid">
            <div className="location-item">
              <h3>Wynwood Arts District</h3>
              <p>2550 NW 2nd Ave<br/>Miami, FL 33127</p>
              <p className="hours">Mon-Sat: 8AM-6PM<br/>Sun: 9AM-4PM</p>
            </div>
            <div className="location-item">
              <h3>Brickell City Centre</h3>
              <p>701 S Miami Ave<br/>Miami, FL 33131</p>
              <p className="hours">Mon-Fri: 7AM-8PM<br/>Sat-Sun: 8AM-7PM</p>
            </div>
            <div className="location-item">
              <h3>South Beach</h3>
              <p>1200 Ocean Dr<br/>Miami Beach, FL 33139</p>
              <p className="hours">Daily: 8AM-10PM</p>
            </div>
            <div className="location-item">
              <h3>Coral Gables</h3>
              <p>2501 Ponce de Leon Blvd<br/>Coral Gables, FL 33134</p>
              <p className="hours">Mon-Sat: 7AM-7PM<br/>Sun: 8AM-5PM</p>
            </div>
            <div className="location-item">
              <h3>Order Online</h3>
              <p>Uber Eats • DoorDash<br/>Grubhub • Postmates</p>
              <p className="hours">Available on all major delivery platforms<br/>Check your local area for availability</p>
            </div>
          </div>
          <div className="locations-note">
            <p>More locations coming soon! We're expanding across Miami to bring you fresh bourekas wherever you are.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
