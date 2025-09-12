import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
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

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Started by Yarin, raised on Israeli flavors and fueled by a love for food and culture. BOMA'LE serves up a fresh twist on bourekas — flaky, stuffed pastries you'll crave, whether it's your first time or your fiftieth.</p>
            <p>What BOMA'LE stands for: cultural roots + Miami energy. Unique flavors for both familiar and new palates. <span className="brand-phrase">Made to share. Or not.</span></p>
          </div>
          <div className="about-image">
            <div className="boureka-illustration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
