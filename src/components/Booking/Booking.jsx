import axios from 'axios';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Booking/Booking.css';
import image from '../images/diy-home-improvement-projects_861346-40513.avif'

const Booking = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedDate = query.get('date');
  const selectedTime = query.get('time');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    pincode: '',
    serviceType: '',
    preferredDateTime: `${selectedDate}T${selectedTime}`,
    date: selectedDate,
    time: selectedTime,
    description: '',
  });

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      date: selectedDate,
      time: selectedTime,
      preferredDateTime: selectedDate && selectedTime ? `${selectedDate}T${selectedTime}` : ''
    }));
  }, [selectedDate, selectedTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };

    if (name === 'date' || name === 'time') {
      newFormData.preferredDateTime = `${newFormData.date}T${newFormData.time}`;
    }

    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData); 
  
    try {
      const response = await axios.post('http://localhost:8080/api/service-requests/book', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response: ', response); 
  
      if (response.status === 200) {
        alert('Service booked successfully!');
      } else {
        alert('Failed to book service: ' + (response.data.message || response.statusText));
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert('Failed to book service: ' + (error.response.data.message || error.response.statusText));
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('Failed to book service: No response from server.');
      } else {
        console.error('Error message:', error.message);
        alert('Failed to book service: ' + error.message);
      }
    }
  };

  return (
    <div className="body-container">
      <div className='home-first'>
        <div className="body-div">
          <img 
            className="hotel" 
            src={image}
            alt="Home Service Banner" 
          />
          <div className="transparent-layer"></div>  
          <div className="text-overlay">
            <h1><b>Make an Appointment</b></h1>
            <p>The PatchWork Service team will be glad to help you.</p>
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              <span className="phone-number">+91 72000 47856</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Book a Service</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phoneNumber" placeholder="Phone Number *" value={formData.phoneNumber} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address *" value={formData.address} onChange={handleChange} required />
              <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required />
              <input type="text" name="pincode" placeholder="Pincode *" value={formData.pincode} onChange={handleChange} required />
              <input type="text" name="serviceType" placeholder="Service *" value={formData.serviceType} onChange={handleChange} required />
              <div className="date-time-container">
                <input 
                  type="date" 
                  name="date" 
                  placeholder="Preferred Date *" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="time" 
                  name="time" 
                  placeholder="Preferred Time *" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <textarea name="description" placeholder="Brief Description of appliance problem" value={formData.description} onChange={handleChange} required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.709608841657!2d80.16199154057746!3d13.040292950970146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526130ee5d7a2b%3A0x2e22e53ce9c67720!2sValasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1722227275717!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Booking;
