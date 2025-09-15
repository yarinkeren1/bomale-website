import React, { useEffect } from 'react';

const OurStory = () => {
  useEffect(() => {
    try {
      // Check if IntersectionObserver is available
      if (!window.IntersectionObserver) {
        // Fallback: just show elements immediately
        const storyElements = document.querySelectorAll('.our-story-content');
        storyElements.forEach(item => {
          if (item) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }
        });
        return;
      }

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

      const storyElements = document.querySelectorAll('.our-story-content');
      storyElements.forEach(item => {
        if (item) {
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';
          item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(item);
        }
      });

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting observer:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up OurStory animations:', error);
    }
  }, []);

  return (
    <section id="our-story" className="our-story">
      <div className="container">
        <div className="our-story-content">
          <h2>Our Story</h2>
          <p>I moved from Israel to Miami when I was 8 years old, and ever since, food has been my strongest connection to home. For me, food isn't just about taste, it carries memories, emotions, and moments with the people I love. Certain flavors instantly bring me back to my childhood friends, times spent with family, holidays in Israel and to the feeling of belonging. Among all those foods, bourekas stands out. They were simple yet deeply satisfying, a flaky pastry, traditionally filled with cheese or potato.</p>
          <p>When I first came to Miami, I found myself missing that comfort and realized there was nothing that truly brought me back, here. Miami has a very beautiful and strong connection to south and central American culture and I feel like my roots are missing some representation in the Miami cuisine. That's when the idea for BOMA'LE was born: a way to bring a piece of Israel to my new home. My vision is to make bourekas both familiar and surprising. To honor the classics like cheese and potato while also creating new flavors that even Israelis have never tried.</p>
          <p>To me, BOMA'LE is more than just a food truck. It's about introducing Miami to an underappreciated part of Israeli culture, making people feel welcome, and giving them something both authentic and approachable. Whether it's a late-night snack after going out, a quick bite in the middle of the day, or simply a chance to try something new, BOMA'LE is here to share food that's full of flavor, full of culture, and full of love.</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
