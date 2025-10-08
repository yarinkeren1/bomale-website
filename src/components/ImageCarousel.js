import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [imageLoadStates, setImageLoadStates] = useState({});
  
  // Image data - staggered by type to avoid grouping
  const images = [
    {
      src: '/images/food/israeli-salad.jpg',
      alt: 'Fresh Israeli salad with tomatoes, cucumbers, and herbs',
      title: 'Israeli Salad'
    },
    {
      src: '/images/food/baklava-1.JPG',
      alt: 'Golden baklava pastries drizzled with syrup and topped with pistachios',
      title: 'Traditional Baklava'
    },
    {
      src: '/images/food/cheese-2.JPG',
      alt: 'Golden cheese bourekas with sesame seeds',
      title: 'Cheese Bourekas'
    },
    {
      src: '/images/food/chocolate-1.JPG',
      alt: 'Chocolate pastry with hazelnuts and chocolate drizzle',
      title: 'Chocolate Pastry'
    },
    {
      src: '/images/food/eggplant.jpeg',
      alt: 'Savory eggplant bourekas with creamy sauce and sesame seeds',
      title: 'Eggplant Bourekas'
    },
    {
      src: '/images/food/baklava-2.JPG',
      alt: 'Syrupy baklava pieces with chopped pistachios',
      title: 'Pistachio Baklava'
    },
    {
      src: '/images/food/cheese-bourekas-egg.JPG',
      alt: 'Cheese bourekas served with hard-boiled eggs and sauces',
      title: 'Cheese Bourekas Plate'
    },
    {
      src: '/images/food/chocolate-2.JPG',
      alt: 'Chocolate pastry with whipped cream and nuts',
      title: 'Chocolate Dessert'
    },
    {
      src: '/images/food/chocolate-baklava.jpeg',
      alt: 'Golden baklava pastries with pistachios and chocolate drizzle',
      title: 'Chocolate Baklava'
    },
    {
      src: '/images/food/sauces-salad.HEIC',
      alt: 'Fresh salads and sauces with herbs and vegetables',
      title: 'Sauces & Salads'
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

  // Initialize image load states
  useEffect(() => {
    const initialStates = {};
    repeatedImages.forEach((_, index) => {
      initialStates[index] = 'loading';
    });
    setImageLoadStates(initialStates);
  }, []);

  // Error handler for images
  const handleImageError = (e, index) => {
    try {
      console.warn(`Image failed to load: ${e.target.src}`);
      setImageLoadStates(prev => ({
        ...prev,
        [index]: 'error'
      }));
    } catch (error) {
      console.error('Error handling image load failure:', error);
    }
  };

  // Error handler for image load
  const handleImageLoad = (e, index) => {
    try {
      setImageLoadStates(prev => ({
        ...prev,
        [index]: 'loaded'
      }));
    } catch (error) {
      console.error('Error handling image load success:', error);
    }
  };

  try {
    return (
      <div className="image-carousel">
        <div className="carousel-container">
          <div className="carousel-track">
            {repeatedImages.map((image, index) => {
              const loadState = imageLoadStates[index];
              const showPlaceholder = loadState === 'error' || loadState === undefined;
              
              return (
                <div key={`${image.src}-${index}`} className="carousel-slide">
                  {!showPlaceholder && (
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="carousel-image"
                      onError={(e) => handleImageError(e, index)}
                      onLoad={(e) => handleImageLoad(e, index)}
                      loading="lazy"
                    />
                  )}
                  {showPlaceholder && (
                    <div className="carousel-image-placeholder">
                      <div className="placeholder-content">
                        <h3>{image.title}</h3>
                        <p>{loadState === 'error' ? 'Image unavailable' : 'Image loading...'}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
