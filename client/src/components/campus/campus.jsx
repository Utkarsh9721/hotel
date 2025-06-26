import React, { useState, useEffect, useCallback } from 'react';
import './campus.css';

const RestaurantLodge = () => {
  // Optimized image data with lower resolution placeholders
  const restaurantImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      placeholder: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=20',
      alt: 'Restaurant interior',
      caption: 'Elegant Dining Space'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      placeholder: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.1.0&auto=format&fit=crop&w=200&q=20',
      alt: 'Chef preparing food',
      caption: 'Our Expert Chefs'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      placeholder: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=20',
      alt: 'Delicious dishes',
      caption: 'Signature Dishes'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      placeholder: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=20',
      alt: 'Table setting',
      caption: 'Fine Dining Experience'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [slideInterval] = useState(5000); // Removed state to prevent unnecessary re-renders
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images
  useEffect(() => {
    restaurantImages.forEach(image => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [image.id]: true }));
      };
    });
  }, []);

  // Memoized slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % restaurantImages.length);
  }, [restaurantImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + restaurantImages.length) % restaurantImages.length);
  }, [restaurantImages.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play with cleanup
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(nextSlide, slideInterval);
    }
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide, slideInterval]);

  return (
    <div className="lodge-container" id='campus'>
      <header className="lodge-header">
        <h1 className="lodge-title">Welcome to Our Restaurant Lodge</h1>
        <p className="lodge-subtitle">Experience culinary excellence in an inviting atmosphere</p>
      </header>
      
      {/* Optimized Slideshow */}
      <div className="slideshow">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {restaurantImages.map((image, index) => (
            <div key={image.id} className="slide">
              <picture>
                {loadedImages[image.id] ? (
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="slide-image loaded"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img 
                    src={image.placeholder} 
                    alt={image.alt} 
                    className="slide-image placeholder"
                    loading="eager"
                  />
                )}
              </picture>
              <div className="caption bottom">
                <h3>{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous slide">
          <span>&#10094;</span>
        </button>
        <button className="nav-arrow next" onClick={nextSlide} aria-label="Next slide">
          <span>&#10095;</span>
        </button>
        
        <div className="indicators">
          {restaurantImages.map((_, index) => (
            <button
              key={index} 
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Restaurant information */}
      <div className="restaurant-info">
        <h2 className="info-title">About Our Lodge</h2>
        <p className="info-description">
          Our restaurant lodge combines rustic charm with modern culinary artistry. 
          Enjoy seasonal menus crafted from locally-sourced ingredients in a 
          warm, inviting atmosphere that feels like home.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🕒</div>
            <h3 className="feature-title">Opening Hours</h3>
            <p className="feature-text">Monday - Friday: 10am - 10pm</p>
            <p className="feature-text">Saturday - Sunday: 9am - 11pm</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3 className="feature-title">Location</h3>
            <p className="feature-text">Zwierzyniecka 15, 31-103 Kraków, Poland</p>
            <p className="feature-text">Reservations: +48 732 880 202</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RestaurantLodge);