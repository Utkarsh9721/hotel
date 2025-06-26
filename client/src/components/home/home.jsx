import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    
  const handleBookTable = () => {
    navigate('/bookTable'); // This should match your route path
  };


  return (
    <div className='home-container'>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Experience the Soul of India at Doon Valley</h1>
          <p className="tagline">A Culinary Journey Through the Himalayas</p>
          <div className="hero-divider"></div>
          <p className="hero-description">
            Nestled in the heart of Kraków, Doon Valley brings you authentic Indian flavors 
            crafted with generations-old recipes and the freshest ingredients. Our chefs, 
            trained in traditional Himalayan cooking techniques, create dishes that tell 
            a story with every bite.
          </p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🍛</div>
          <h3>Authentic Recipes</h3>
          <p>Time-honored dishes prepared exactly as they've been made for centuries in the Himalayan foothills</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🌿</div>
          <h3>Fresh Ingredients</h3>
          <p>Daily deliveries of the finest spices and produce to ensure peak flavor in every dish</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">👨‍👩‍👧‍👦</div>
          <h3>Family Tradition</h3>
          <p>A warm, welcoming atmosphere where every guest becomes part of our extended family</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready for a Taste Adventure?</h2>
        <p className="cta-text">
          Whether you're craving the complex spices of a traditional curry or the 
          comforting warmth of freshly baked naan, our doors are open to transport 
          your senses to the mountains of India.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta">Explore Our Menu</button>
          <button className="secondary-cta" onClick={handleBookTable}>Book a Table</button>
        </div>
      </div>
    </div>
  );
};

export default Home;