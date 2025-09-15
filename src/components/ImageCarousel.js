import React from 'react';

const ImageCarousel = () => {
  // Image data - using your actual food images
  const images = [
    {
      src: '/images/food/israeli-salad.jpg',
      alt: 'Fresh Israeli salad with tomatoes, cucumbers, and herbs',
      title: 'Israeli Salad'
    },
    {
      src: '/images/food/chocolate-baklava.jpeg',
      alt: 'Golden baklava pastries with pistachios and chocolate drizzle',
      title: 'Chocolate Baklava'
    },
    {
      src: '/images/food/eggplant.jpeg',
      alt: 'Savory eggplant bourekas with creamy sauce and sesame seeds',
      title: 'Eggplant Bourekas'
    }
  ];

  // Safety check
  if (!images || images.length === 0) {
    return (
      <div className="carousel-error-fallback">
        <p>No images available</p>
      </div>
    );
  }

  // Create 123 123 123 123 123 123 pattern
  const repeatedImages = [
    ...images, // 123
    ...images, // 123
    ...images, // 123
    ...images, // 123
    ...images, // 123
    ...images  // 123
  ];

  // Error handler for images
  const handleImageError = (e, index) => {
    try {
      console.warn(`Image failed to load: ${e.target.src}`);
      e.target.style.display = 'none';
      const placeholder = e.target.nextSibling;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    } catch (error) {
      console.error('Error handling image load failure:', error);
    }
  };

  // Error handler for image load
  const handleImageLoad = (e) => {
    try {
      e.target.style.display = 'block';
      const placeholder = e.target.nextSibling;
      if (placeholder) {
        placeholder.style.display = 'none';
      }
    } catch (error) {
      console.error('Error handling image load success:', error);
    }
  };

  try {
    return (
      <div className="image-carousel">
        <div className="carousel-container">
          <div className="carousel-track">
            {repeatedImages.map((image, index) => (
              <div key={`${image.src}-${index}`} className="carousel-slide">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="carousel-image"
                  onError={(e) => handleImageError(e, index)}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
                <div className="carousel-image-placeholder" style={{display: 'none'}}>
                  <div className="placeholder-content">
                    <h3>{image.title}</h3>
                    <p>Image loading...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering ImageCarousel:', error);
    return (
      <div className="carousel-error-fallback">
        <p>Error loading carousel</p>
      </div>
    );
  }
};

export default ImageCarousel;
