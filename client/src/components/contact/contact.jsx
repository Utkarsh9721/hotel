import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container" id='contact'>
      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you</p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h2 className="contact-card-title">Address</h2>
            <p className="contact-card-text">
              Zwierzyniecka 15<br />
              31-103 Kraków, Poland
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h2 className="contact-card-title">Phone</h2>
            <p className="contact-card-text">
              <a href="tel:+48732880202">+48 732 880 202</a>
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <h2 className="contact-card-title">Opening Hours</h2>
            <p className="contact-card-text">
              Monday - Friday: 10am - 10pm<br />
              Saturday - Sunday: 9am - 11pm
            </p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.308057951341!2d19.93272031571537!3d50.06146697942425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1aa3e418c3%3A0x61caab5b1033da73!2sZwierzyniecka%2015%2C%2031-103%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1620000000000!5m2!1sen!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-form-container">
        <h2 className="form-title">Send us a message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;