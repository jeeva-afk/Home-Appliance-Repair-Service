import React, { useState } from 'react';
import '../Assets/BookingForm.css';

const services = [
  { id: 1, name: 'Electrician' },
  { id: 2, name: 'Plumber' },
  { id: 3, name: 'Carpenter' },
  { id: 4, name: 'Tv Repair' },
];

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [startTime, setStartTime] = useState(''); // State for preferred start time
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log({
      selectedService,
      customerName,
      contactNumber,
      address,
      date,
    });
    setMessage('Booking submitted successfully!');
  };

  return (
    <div className="booking-container">
      <h1>Book a Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">--Select a Service--</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-time">Preferred Start Time</label>
          <input
            type="time"
            id="start-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-time">Preferred End Time</label>
          <input
            type="time"
            id="end-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
