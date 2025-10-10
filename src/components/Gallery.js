import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/food/baklava-1.JPG', alt: 'Baklava Boureka', category: 'Baklava' },
    { src: '/images/food/baklava-2.JPG', alt: 'Baklava Boureka', category: 'Baklava' },
    { src: '/images/food/cheese-1.JPG', alt: 'Cheese Boureka', category: 'Cheese' },
    { src: '/images/food/cheese-2.JPG', alt: 'Cheese Boureka', category: 'Cheese' },
    { src: '/images/food/chocolate-1.JPG', alt: 'Chocolate Boureka', category: 'Chocolate' },
    { src: '/images/food/chocolate-2.JPG', alt: 'Chocolate Boureka', category: 'Chocolate' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Gallery</h2>
        <p className="gallery-subtitle">Explore our delicious bourekas and fresh sides</p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p className="lightbox-caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

