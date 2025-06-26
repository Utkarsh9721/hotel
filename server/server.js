require('dotenv').config(); // Load environment variables at the very top

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Data storage (in-memory for this example)
let bookings = [];
let orders = [];

// API endpoint to handle booking submissions
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    
    bookings.push(bookingData);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'doonvalley.krakow@gmail.com',
      subject: `New Booking: ${bookingData.name} - ${bookingData.date} at ${bookingData.time}`,
      html: `
        <h1>New Table Booking Received</h1>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Date:</strong> ${bookingData.date}</p>
        <p><strong>Time:</strong> ${bookingData.time}</p>
        <p><strong>Guests:</strong> ${bookingData.guests}</p>
        <p><strong>Occasion:</strong> ${bookingData.occasion || 'None'}</p>
        <p><strong>Table Preference:</strong> ${bookingData.tablePreference}</p>
        <p><strong>Special Requests:</strong> ${bookingData.specialRequests || 'None'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: 'Booking submitted successfully' 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your booking' 
    });
  }
});

// API endpoint to handle food order submissions
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    
    orders.push(orderData);
    
    const itemsHtml = orderData.items.map(item => 
      `<li>${item.name} x ${item.quantity} = ${item.price * item.quantity} ZŁ</li>`
    ).join('');

    const total = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'doonvalley.krakow@gmail.com',
      subject: `New Food Order from ${orderData.customer.name}`,
      html: `
        <h1>New Food Order Received</h1>
        <h2>Customer Details:</h2>
        <p><strong>Name:</strong> ${orderData.customer.name}</p>
        <p><strong>Email:</strong> ${orderData.customer.email}</p>
        <p><strong>Phone:</strong> ${orderData.customer.mobile}</p>
        <p><strong>Address:</strong> ${orderData.customer.address}</p>
        <p><strong>Special Instructions:</strong> ${orderData.customer.notes || 'None'}</p>
        
        <h2>Order Items:</h2>
        <ul>${itemsHtml}</ul>
        
        <h2>Total: ${total.toFixed(2)} ZŁ</h2>
        
        <p>Order received at: ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: 'Order submitted successfully',
      total: total
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your order' 
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});