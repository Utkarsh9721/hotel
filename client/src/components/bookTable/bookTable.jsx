import React, { useState } from 'react';
import './bookTable.css'; // We'll create this CSS file next

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    specialRequests: '',
    tablePreference: 'none',
  });

  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // If date changes, update available times (mock implementation)
    if (name === 'date') {
      // In a real app, you would fetch available times from an API
      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
      setAvailableTimes(mockTimes);
    }
  };

  // Update the handleSubmit function in your BookingForm component
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Booking failed');
    }

    if (data.success) {
      setBookingSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          occasion: '',
          specialRequests: '',
          tablePreference: 'none',
        });
        setBookingSuccess(false);
      }, 3000);
    } else {
      throw new Error(data.message || 'Booking failed');
    }
  }catch (error) {
    console.error('Error:', error);
    alert(error.message || 'An error occurred. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
  
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="booking-container">
      <h1>Table Reservation</h1>
      <p className="subtitle">Book your table at our restaurant</p>
      
      {bookingSuccess ? (
        <div className="success-message">
          <h2>Booking Confirmed!</h2>
          <p>Your table has been reserved. We look forward to serving you.</p>
          <div className="confirmation-details">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+48 123 456 789"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date*</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                max={maxDateStr}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time*</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests*</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                ))}
                <option value="9+">9+ people (contact us)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion (optional)</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="date">Romantic Date</option>
                <option value="family">Family Gathering</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tablePreference">Table Preference</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="tablePreference"
                  value="window"
                  checked={formData.tablePreference === 'window'}
                  onChange={handleChange}
                />
                <span>Window</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tablePreference"
                  value="outdoor"
                  checked={formData.tablePreference === 'outdoor'}
                  onChange={handleChange}
                />
                <span>Outdoor</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tablePreference"
                  value="private"
                  checked={formData.tablePreference === 'private'}
                  onChange={handleChange}
                />
                <span>Private Booth</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tablePreference"
                  value="none"
                  checked={formData.tablePreference === 'none'}
                  onChange={handleChange}
                />
                <span>No Preference</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests (optional)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Allergies, accessibility needs, etc."
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Reserving...' : 'Reserve Table'}
          </button>

          <p className="form-note">
            * Required fields. We'll contact you to confirm your reservation.
          </p>
        </form>
      )}
    </div>
  );
};

export default BookingForm;