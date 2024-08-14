import React from 'react';
import '../contact/Contact.css';
import contactImage from '../images/bg2.jpg'; 

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-header-section">
        <h1>Our Contacts</h1>
        <p>Inside a Perfect World</p>
      </div>
      <header className="contact-header">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <div className="contact-infos">
          <h1>Have any Queries</h1><br/>
          <p>Your opinion matters!! Tell us what you think.</p><br/>
          <p>
            Our Service is Committed to helping people to make their life <br/>easier.
            If you have any questions about our services,<br/> please contact us on the phone number mentioned or send us<br/> a message here. We are here to assist you!!
          </p>
        </div>
      </header>
      <div className="contact-content-container">
        <div className="contact-info-details">
          <h2>Contact Details</h2>
          <p>FixElectric is a Door step Delivery service platform that covers all your needs at affordable price. We are here to help you out. Reach out to us for further queries.</p>
          <p><strong>Head Office:</strong> FixElectric Tech Pvt Ltd<br />#14/6 Road, ulsoor Bangalore-560008</p>
          <p><strong>Phone:</strong> <i className="fas fa-phone"></i> +91 6362014034</p>
          <p><strong>Mail:</strong> <i className="fas fa-envelope"></i> info@fixelectric.com</p>
          <p><strong>Help & Support:</strong> <a href="#"><i className="fas fa-life-ring"></i> Click Here for Help & Support</a></p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#" className='twitter-link'><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#" className='instagram-link'><i className="fab fa-instagram"></i></a>
            <a href="#" className='whatsapp-link'><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="contact-form-section">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name *" required />
            <input type="email" name="email" placeholder="Email Address *" required />
            <input type="tel" name="phone" placeholder="Mobile Number *" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
