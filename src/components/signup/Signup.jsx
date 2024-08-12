import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../signup/Signup.css';
import user_icon from '../images/person.png';
import email_icon from '../images/Email.png';
import password_icon from '../images/password.png';
import phone_icon from '../images/phone1.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Validation
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.confirmPassword.trim() === '' ||
      formData.mobile.trim() === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/add', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
      });

      console.log('User created:', response.data);
      alert("Regisered Successful");
      
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
      });
      navigate('/'); 
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong, please try again.');
    }
  };

  return (
    <div className="signup-page-background">
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-title"> SignUp </div>
          <div className="header-underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signup-inputs">
            <div className="input-field">
              <img src={user_icon} alt="user" height="30" width="30" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <img src={email_icon} alt="email" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <img src={phone_icon} alt="phone" height="30" width="30" />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <img src={password_icon} alt="confirm password" height="30" width="30" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="signup-submit-container">
            <button type="submit" className="signup-submit-button">SignUp</button>
          </div>
        </form>
      
        <p className="signup-already">
          Already have an account? <Link to="/login" className="signup-login">Login</Link>
        </p>
        <footer className="signup-footer">
          <Link to="/terms">Terms of Use</Link> 
          <span className="signup-footer-separator"> | </span> <Link to="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
