import React from 'react';
import '../about/About.css';
import about from '../images/about.jpg'

const About = () => {
    return (
        <div className="body-container">
            <div className="home-first">
                <div className="body-div">
                    <img className="hotel" src="https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=" alt="Home Service Banner" />
                    <div className="transparent-layer"></div>
                    <div className="text-overlay">
                        <h1><b>Why our Service is a good option to choose?</b></h1>
                        <p>Providing reliable Electrical services and low rate guarantees.</p>
                    </div>
                 
                </div>
            </div>

           

            <div className="service-container">
                <div className="service-intro">
                    <h3>Our Services</h3>
                    <p>We provide a wide range of electrical services to meet your needs.</p>
                </div>
                <div className="service-items">
                    <div className="service-item">
                        <div className="service-title">Residential Services</div>
                        <div className="service-description">High-quality electrical services for your home.</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">Commercial Services</div>
                        <div className="service-description">Reliable electrical solutions for businesses.</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">Emergency Services</div>
                        <div className="service-description">24/7 emergency electrical support.</div>
                    </div>
                </div>
            </div>

            <div className="home-second">
                <div className="row">
                    <div className="column">
                        <img src="https://media.istockphoto.com/id/1337630371/photo/man-testing-electricity-with-multimeter.jpg?s=612x612&w=0&k=20&c=n5tm3ra1rcx4i_Lh1t3zXvHdLxqLimunHo_ENFyiuq4=" alt="Company Logo" />
                    </div>
                    <div className="column">
                        <h1>About Us</h1>
                        <h2>Committed to Excellence</h2>
                        <p>
                            Our company has been providing top-notch electrical services for over 20 years. We pride ourselves on delivering quality and reliable services to all our customers. Our team of skilled electricians is dedicated to ensuring the safety and satisfaction of our clients.
                        </p>
                        <div className="point-list">
                            <div className="point-item">
                                <div className="point-icon">✓</div>
                                <div className="point-text">Experienced and licensed electricians.</div>
                            </div>
                            <div className="point-item">
                                <div className="point-icon">✓</div>
                                <div className="point-text">Comprehensive electrical services.</div>
                            </div>
                            <div className="point-item">
                                <div className="point-icon">✓</div>
                                <div className="point-text">Customer satisfaction guaranteed.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
