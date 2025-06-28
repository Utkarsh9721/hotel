import React, { useState } from 'react';
import './order.css'
const RestaurantOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    notes: '',
    items: {}
  });

  const menuItems = {
    'TANDOORI SPECIALS': [
      { name: 'Chicken Tikka', price: 38.00 },
      { name: 'Fish Tikka', price: 41.00 },
      { name: 'Tandoori Chicken', price: 45.00 },
      { name: 'Masala Papadam', price: 15.00 },
      { name: 'Chicken Malai Tikka', price: 39.00 },
      { name: 'Chicken Haryali Tikka', price: 37.00 },
      { name: 'Lamb Seekh Kebab', price: 40.00 },
      { name: 'Tandoori Prawns', price: 45.00 },
      { name: 'Malai Paneer Tikka', price: 32.00 },
      { name: 'Paneer Tikka', price: 31.00 },
      { name: 'Tandoori Broccoli', price: 32.00 },
      { name: 'Roasted Papadam', price: 12.00 },
      { name: 'Garlic Chicken Tikka', price: null },
    ],
    'INDO-CHINESE STARTERS': [
      { name: 'Chilli Chicken', price: 32.00 },
      { name: 'Chicken Sweet & Sour', price: 25.00 },
      { name: 'Chicken Lollipop', price: 35.00 },
      { name: 'Lamb Chilli', price: 35.00 },
      { name: 'Prawn Chilli', price: 40.00 },
      { name: 'Chilli Paneer (Dry/Sauce)', price: 30.00 },
      { name: 'Vegetable Manchurian (Dry/Sauce)', price: 28.00 },
      { name: 'Paneer Manchurian (Dry/Sauce)', price: 31.00 },
    ],
    'NOODLES & FRIED RICE': [
      { name: 'Chicken Noodles', price: 25.00 },
      { name: 'Vegetable Noodles', price: 25.00 },
      { name: 'Egg Fried Rice', price: 23.00 },
      { name: 'Veg Fried Rice', price: 22.00 },
      { name: 'Chicken Fried Rice', price: 32.00 },
    ],
    'APPETIZERS & SNACKS': [
      { name: 'Chicken Pakora', price: 28.00 },
      { name: 'Prawn Pakora', price: 31.00 },
      { name: 'Fish Pakora', price: 32.00 },
      { name: 'Chicken Samosas', price: 20.00 },
      { name: 'Vegetable Samosas', price: 18.00 },
      { name: 'Puri Bhaji', price: 22.00 },
      { name: 'Chole Bhature', price: 23.00 },
      { name: 'Vegetable Pakoras', price: 20.00 },
      { name: 'Onion Bhajia', price: 20.00 },
    ],
    'SOUPS & LENTILS': [
      { name: 'Tomato Soup', price: 18.00 },
      { name: 'Vegetable Manchow Soup', price: 22.00 },
      { name: 'Daal Soup', price: 20.00 },
      { name: 'Chicken Manchow Soup', price: 25.00 },
      { name: 'Chicken Clear Soup', price: 23.00 },
      { name: 'Daal Makhani', price: 32.00 },
      { name: 'Yellow Daal Tarka', price: 30.00 },
      { name: 'Daal Spinach (Palak)', price: 33.00 },
    ],
    'VEGETARIAN MAIN COURSE': [
      { name: 'Palak Paneer', price: 32.00 },
      { name: 'Kadhai Paneer', price: 35.00 },
      { name: 'Butter Paneer', price: 37.00 },
      { name: 'Paneer Qorma', price: 35.00 },
      { name: 'Mushroom Masala', price: 33.00 },
      { name: 'Mix Vegetables', price: 28.00 },
      { name: 'Paneer Jalfrezi', price: 35.00 },
      { name: 'Paneer Vindaloo', price: 32.00 },
      { name: 'Paneer Bhurji', price: 35.00 },
      { name: 'Aloo Gobi', price: 28.00 },
      { name: 'Zeera Aalo', price: 28.00 },
      { name: 'Paneer Do Pyaza', price: 32.00 },
      { name: 'Bhaingan Bharta', price: 28.00 },
    ],
    'CHICKEN MAIN COURSE': [
      { name: 'Chicken Tikka Masala', price: 39.00 },
      { name: 'Chicken Do Pyaza', price: 39.00 },
      { name: 'Chicken Vindaloo', price: 40.00 },
      { name: 'Chicken Mango', price: 45.00 },
      { name: 'Chicken Kadahi', price: 40.00 },
      { name: 'Chicken Korma', price: 37.00 },
      { name: 'Palak Chicken', price: 40.00 },
      { name: 'Doon Valley\'s Chicken', price: 45.00 },
      { name: 'Chicken Methi Malai', price: 36.00 },
      { name: 'Chicken Jalfrezi', price: 38.00 },
      { name: 'Butter Chicken', price: 40.00 },
      { name: 'Chicken Rogan Josh', price: 40.00 },
    ],
    'LAMB & SEAFOOD MAIN COURSE': [
      { name: 'Lamb Madras', price: 37.00 },
      { name: 'Butter Lamb', price: 43.00 },
      { name: 'Lamb Qorma', price: 35.00 },
      { name: 'Lamb Do Pyaza', price: 42.00 },
      { name: 'Lamb Roghan Josh', price: 42.00 },
      { name: 'Lamb Kadahi', price: 35.00 },
      { name: 'Lamb Jalfrezi', price: 38.00 },
      { name: 'Fish Korma', price: 42.00 },
      { name: 'Prawns Korma', price: 43.00 },
      { name: 'Butter Prawns', price: 40.00 },
      { name: 'Prawns Kadahi', price: 40.00 },
    ],
    'BIRYANI, RICE & PULAO': [
      { name: 'Chicken Biryani', price: 40.00 },
      { name: 'Lamb Biryani', price: 43.00 },
      { name: 'Paneer Biryani', price: 40.00 },
      { name: 'Fish Biryani', price: 45.00 },
      { name: 'Doon\'s Special Biryani', price: 47.00 },
      { name: 'Prawn Biryani', price: 45.00 },
      { name: 'Vegetable Pulao', price: 15.00 },
      { name: 'Mutter Pulao', price: 15.00 },
      { name: 'Kashmiri Pulao', price: 20.00 },
      { name: 'Zeera Rice', price: 15.00 },
      { name: 'Steam Rice', price: 13.00 },
      { name: 'Lemon Rice', price: 17.00 },
    ],
    'BREADS & PARATHAS': [
      { name: 'Plain Naan', price: 13.00 },
      { name: 'Butter Naan', price: 14.00 },
      { name: 'Garlic Naan', price: 15.00 },
      { name: 'Moti Naan (sesame)', price: 14.00 },
      { name: 'Cheese Naan', price: 18.00 },
      { name: 'Paneer Naan', price: 17.00 },
      { name: 'Kashmiri Naan', price: 16.00 },
      { name: 'Masala Kulcha', price: 16.00 },
      { name: 'Lacha Paratha', price: 16.00 },
      { name: 'Poodina Paratha', price: 17.00 },
      { name: 'Methi Roti', price: 12.00 },
      { name: 'Tandoori Roti', price: null },
      { name: 'Romali Roti', price: 12.00 },
    ],
    'SALADS & RAITAS': [
      { name: 'Onion Salad', price: 14.00 },
      { name: 'Green Salad', price: 16.00 },
      { name: 'Mixed Raita', price: 12.00 },
      { name: 'Plain Yogurt', price: 8.00 },
      { name: 'Chicken Tikka Salad', price: 25.00 },
      { name: 'Prawns Salad', price: 30.00 },
    ],
    'DESSERTS & TEAS': [
      { name: 'Mango Lassi', price: 15.00 },
      { name: 'Lassi (Salt/Sweet)', price: 12.00 },
      { name: 'Indian Masala Tea', price: 10.00 },
      { name: 'Indian Coffee', price: 12.00 },
      { name: 'Gulab Jamun (2 pcs)', price: 14.00 },
      { name: 'Ice Cream (Vanilla/Mango/Pistachio)', price: 12.00 },
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (itemName, quantity) => {
    setFormData(prev => {
      const newItems = { ...prev.items };
      if (quantity > 0) {
        newItems[itemName] = quantity;
      } else {
        delete newItems[itemName];
      }
      return { ...prev, items: newItems };
    });
  };

  const calculateTotal = () => {
    return Object.entries(formData.items).reduce((total, [itemName, quantity]) => {
      const price = Object.values(menuItems)
        .flat()
        .find(item => item.name === itemName)?.price || 0;
      return total + (price * quantity);
    }, 0).toFixed(2);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.mobile || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    if (Object.keys(formData.items).length === 0) {
      alert('Please select at least one item');
      return;
    }

    try {
      // Prepare order items for submission
      const orderItems = Object.entries(formData.items).map(([itemName, quantity]) => {
        const item = Object.values(menuItems)
          .flat()
          .find(item => item.name === itemName);
        return {
          name: itemName,
          quantity,
          price: item.price,
          total: (item.price * quantity).toFixed(2)
        };
      });

      // Send order to backend
      const response = await fetch('https://hotel-1-dwls.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            address: formData.address,
            notes: formData.notes
          },
          items: orderItems,
          total: calculateTotal()
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Order submitted successfully!');
        // Reset form but keep menu items
        setFormData({
          name: '',
          email: '',
          mobile: '',
          address: '',
          notes: '',
          items: {}
        });
      } else {
        throw new Error(result.message || 'Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert(error.message || 'There was an error submitting your order. Please try again.');
    }
  };

  return (
    <div className="restaurant-order-form" id='order'>
      <h1>Restaurant Order Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="customer-info">
          <h2>Customer Information</h2>
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Delivery Address:</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Special Instructions:</label>
            <textarea 
              name="notes" 
              value={formData.notes} 
              onChange={handleInputChange} 
            />
          </div>
        </div>

        <div className="menu-items">
          <h2>Menu Items</h2>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="menu-category">
              <h3>{category}</h3>
              <div className="items-grid">
                {items.map(item => (
                  <div key={item.name} className="menu-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">
                        {item.price !== null ? `${item.price.toFixed(2)} ZŁ` : 'Price not listed'}
                      </span>
                    </div>
                    <div className="item-quantity">
                      <button 
                        type="button" 
                        onClick={() => handleItemChange(item.name, (formData.items[item.name] || 0) - 1)}
                        disabled={!formData.items[item.name]}
                      >
                        -
                      </button>
                      <span>{formData.items[item.name] || 0}</span>
                      <button 
                        type="button" 
                        onClick={() => handleItemChange(item.name, (formData.items[item.name] || 0) + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {Object.keys(formData.items).length > 0 ? (
            <div>
              <ul>
                {Object.entries(formData.items).map(([itemName, quantity]) => {
                  const item = Object.values(menuItems)
                    .flat()
                    .find(item => item.name === itemName);
                  return (
                    <li key={itemName}>
                      {itemName} x {quantity} = {(item.price * quantity).toFixed(2)} ZŁ
                    </li>
                  );
                })}
              </ul>
              <div className="total">
                <strong>Total: {calculateTotal()} ZŁ</strong>
              </div>
            </div>
          ) : (
            <p>No items selected</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default RestaurantOrderForm;
