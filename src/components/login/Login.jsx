import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../login/Login.css';
import email_icon from '../images/Email.png';
import password_icon from '../images/password.png';
import { AuthContext } from '../AuthContext/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.email.trim()) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        formIsValid = false;
        errors.email = 'Please enter a valid email';
      }
    }

    if (!formData.password.trim()) {
      formIsValid = false;
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', {
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200) {
          alert('Login successful');
          setFormData({
            email: '',
            password: '',
          });
          login(formData.email); // Call the login function with the user's email
          navigate('/'); // Redirect to home or another page after successful login
        }
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        setFormErrors({ ...formErrors, general: error.response?.data || error.message });
      }
    }
  };

  return (
    <div className="login-back">
      <div className="container">
        <div className="header">
          <div className="texty">Login</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="email" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="input">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>
          </div>
          {formErrors.general && <span className="error">{formErrors.general}</span>}
          <div className="forgot-password">
            <span>Forgot Password?</span>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">Login</button>
          </div>
        </form>
        <p className="login-prompt">
          Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
        </p>
        <footer className="login-footer">
          <Link to="/terms" className="login-footer-link">Terms of Use</Link>
          <span className="login-footer-separator"> | </span>
          <Link to="/privacy" className="login-footer-link">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
