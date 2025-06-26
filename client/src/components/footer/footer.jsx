import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './footer.css'; // We'll create this CSS file

const SimpleRestaurantFooter = () => {
  return (
    <footer className="restaurant-footer" id='footer'>
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Savory Bites</h3>
            <p className="footer-about-text">
              Authentic cuisine with a modern twist. Making every dining experience memorable.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/utkarsh.rai.986" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/r_utkarsh_29?igsh=NXUybWVvYzZwYWp2" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Varanasi india</span>
              </li>
              <li className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91-8467052036</span>
              </li>
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>raiutkarsh544@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="quick-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">Gallery</a></li>
              <li><a href="#" className="footer-link">Reservations</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p>&copy; {new Date().getFullYear()} Utkarsh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleRestaurantFooter;