import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaTools, FaRupeeSign, FaLock } from 'react-icons/fa';
import '../Assets/ServiceProviderForm.css';
import services from '../Assets/services.jpg'
const ServiceProviderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    companyName: '',
    category: '',
    experience: '',
    price: '',
    location: '',
    pin: ''
  });

  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Alert message
    alert("Registration successful! Welcome aboard.");
  };

  return (
    <div className="contain">
      
      

      <div className="form-container">
        <form className="service-provider-form" onSubmit={handleSubmit}>
          <h2>Register <span>Now</span></h2>
          {[
            { name: 'name', type: 'text', placeholder: 'Your Name', icon: <FaUser /> },
            { name: 'mobile', type: 'text', placeholder: '10 Digit Mobile Number', icon: <FaPhone /> },
            { name: 'email', type: 'email', placeholder: 'Email Id', icon: <FaEnvelope /> },
            { name: 'address', type: 'text', placeholder: 'Full Address with pincode', icon: <FaMapMarkerAlt /> },
            { name: 'companyName', type: 'text', placeholder: 'Service / Company Name', icon: <FaBuilding /> },
            { name: 'experience', type: 'text', placeholder: 'Experience', icon: <FaTools /> },
            { name: 'price', type: 'text', placeholder: 'Starting price & Price List of Services', icon: <FaRupeeSign /> },
            { name: 'location', type: 'text', placeholder: 'Your preferred Business Lead Location', icon: null },
            { name: 'pin', type: 'password', placeholder: 'Create Login 6 Digit PIN', icon: <FaLock /> }
          ].map(({ name, type, placeholder, icon }) => (
            <div className="form-group" key={name}>
              {icon && <span className="icon">{icon}</span>}
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          
          <div className="form-group">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose Category</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
            </select>
          </div>

          <button type="submit" className="submit-button">JOIN NOW</button>
        </form>
      </div>
      <div className="how-it-works-container">
        <h2>How it Works ?</h2>
        <div className="steps">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`step ${activeStep === step ? 'active' : ''}`}
              onClick={() => toggleStep(step)}
            >
              <span>{step}. {step === 1 ? 'Register Online' : step === 2 ? 'Activate your ID' : step === 3 ? 'Start Getting Orders' : 'Start Earning Money'}</span>
              <img src={`https://cdn-icons-png.flaticon.com/128/${step === 1 ? '9428/9428917' : step === 2 ? '1584/1584911' : step === 3 ? '686/686308' : '10217/10217199'}.png`} alt={`Step ${step}`} />
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default ServiceProviderForm;
