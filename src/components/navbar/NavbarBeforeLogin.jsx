// src/components/navbar/NavbarBeforeLogin.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

const NavbarBeforeLogin = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <img src="https://static.theprint.in/wp-content/uploads/2022/10/ANI-20221021045819.jpg" alt="Logo" />
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/service" className="nav-link">Service</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact us</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarBeforeLogin;
