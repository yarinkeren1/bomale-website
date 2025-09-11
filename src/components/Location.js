import React from 'react';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2>Find Us</h2>
        <div className="location-content">
          <div className="location-info">
            <h3>Current Location</h3>
            <p className="location-address">Downtown Food Truck Plaza<br />123 Main Street<br />Your City, State 12345</p>
            
            <h3>Hours</h3>
            <div className="hours">
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>11:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>12:00 PM - 6:00 PM</span>
              </div>
            </div>

            <h3>Follow Our Journey</h3>
            <p>Check our social media for real-time location updates and special events!</p>
          </div>
          <div className="location-map">
            <div className="map-placeholder">
              <p>📍 Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
