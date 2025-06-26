import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import './testimonial.css'; 

const TestimonialPage = () => {
  // Enhanced fake data generator
  const generateFakeTestimonials = (count) => {
    const names = ['Alex', 'Jamie', 'Taylor', 'Morgan', 'Casey', 'Jordan', 'Riley', 'Quinn'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'Seattle', 'Boston'];
    const comments = [
      'The food was absolutely delicious! Best steak I\'ve ever had.',
      'Amazing atmosphere and excellent service. Will definitely come back.',
      'The pasta was cooked to perfection. Highly recommend this place!',
      'Great cocktails and friendly staff. Perfect for date night.',
      'Authentic flavors and generous portions. Worth every penny.',
      'The dessert menu is to die for! Try the chocolate lava cake.',
      'Consistently great food and service. Our favorite spot in town.',
      'The chef\'s special was incredible. Can\'t wait to try more dishes.'
    ];
    
    const foodItems = [
      'Steak', 'Pasta', 'Burger', 'Salad', 'Pizza', 
      'Sushi', 'Tacos', 'Risotto', 'Soup', 'Dessert'
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: names[Math.floor(Math.random() * names.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
      comment: comments[Math.floor(Math.random() * comments.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      avatar: null,
      favoriteDish: foodItems[Math.floor(Math.random() * foodItems.length)],
      visitCount: Math.floor(Math.random() * 5) + 1
    }));
  };

  const [testimonials, setTestimonials] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState([0, 0, 0, 0, 0]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 5,
    comment: '',
    favoriteDish: ''
  });
  const [activeFilter, setActiveFilter] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Generate fake data on component mount
    const fakeData = generateFakeTestimonials(12);
    setTestimonials(fakeData);
    calculateStats(fakeData);
  }, []);

  const calculateStats = (data) => {
    const totalRatings = data.reduce((sum, t) => sum + parseFloat(t.rating), 0);
    const avgRating = totalRatings / data.length;
    setOverallRating(avgRating.toFixed(1));
    setRatingCount(data.length);
    
    const distribution = [0, 0, 0, 0, 0];
    data.forEach(t => {
      const rating = Math.floor(parseFloat(t.rating));
      if (rating >= 1 && rating <= 5) {
        distribution[5 - rating]++;
      }
    });
    setRatingDistribution(distribution);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name.trim() && newTestimonial.comment.trim()) {
      setIsSubmitting(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        const testimonial = {
          id: testimonials.length + 1,
          name: newTestimonial.name,
          city: 'Your City',
          rating: newTestimonial.rating,
          comment: newTestimonial.comment,
          date: new Date().toLocaleDateString(),
          avatar: null,
          favoriteDish: newTestimonial.favoriteDish || 'Not specified',
          visitCount: 1
        };
        
        const updatedTestimonials = [testimonial, ...testimonials];
        setTestimonials(updatedTestimonials);
        calculateStats(updatedTestimonials);
        
        setNewTestimonial({
          name: '',
          rating: 5,
          comment: '',
          favoriteDish: ''
        });
        
        setIsSubmitting(false);
        
        // Scroll to the new testimonial
        document.getElementById('testimonials-list').scrollIntoView({
          behavior: 'smooth'
        });
      }, 800);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star-icon full-star" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star-icon half-star" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon empty-star" />);
      }
    }
    
    return <div className="stars-container">{stars}</div>;
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (activeFilter === 'all') return true;
    return Math.floor(testimonial.rating) === parseInt(activeFilter);
  });

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1 className="testimonials-title">Customer Reviews</h1>
        <div className="divider"></div>
      </div>
      
      {/* Overall Rating Section */}
      <div className="rating-summary-card">
        <div className="rating-overview">
          <div className="average-rating">
            <div className="rating-value">{overallRating}<span className="rating-max">/5</span></div>
            {renderStars(overallRating)}
            <div className="rating-count">{ratingCount} {ratingCount === 1 ? 'review' : 'reviews'}</div>
          </div>
          
          <div className="rating-distribution">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={star} className="distribution-row">
                <div className="star-label">{star} star</div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{ 
                      width: ratingCount > 0 ? `${(ratingDistribution[index] / ratingCount) * 100}%` : '0%'
                    }}
                  ></div>
                </div>
                <div className="percentage-value">
                  {ratingCount > 0 ? Math.round((ratingDistribution[index] / ratingCount) * 100) : 0}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="filters-container">
        <button
          onClick={() => setActiveFilter('all')}
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
        >
          All Reviews
        </button>
        {[5, 4, 3, 2, 1].map(star => (
          <button
            key={star}
            onClick={() => setActiveFilter(star.toString())}
            className={`filter-button ${activeFilter === star.toString() ? 'active' : ''}`}
          >
            {star} Star
            <span className="filter-count">
              ({ratingDistribution[5 - star]})
            </span>
          </button>
        ))}
      </div>
      
    
      
      {/* Testimonials List */}
      <div id="testimonials" className="testimonials-list">
        {filteredTestimonials.length > 0 ? (
          filteredTestimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="user-avatar">
                  <div className="avatar-circle">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} className="avatar-image" />
                    ) : (
                      <FaUser className="avatar-icon" />
                    )}
                  </div>
                </div>
                <div className="testimonial-body">
                  <div className="testimonial-header">
                    <div>
                      <h3 className="user-name">{testimonial.name}</h3>
                      <div className="user-meta">
                        {testimonial.city} • {testimonial.visitCount} {testimonial.visitCount === 1 ? 'visit' : 'visits'}
                      </div>
                    </div>
                    <div className="review-date">{testimonial.date}</div>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  {testimonial.favoriteDish && (
                    <div className="favorite-dish">
                      <span className="dish-label">Favorite dish:</span> {testimonial.favoriteDish}
                    </div>
                  )}
                  <div className="testimonial-text">
                    <FaQuoteLeft className="quote-icon" />
                    <p>{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No reviews match your selected filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialPage;