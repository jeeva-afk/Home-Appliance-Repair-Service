import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import '../navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavbarAfterLogin = () => {
    const { logout, username } = useContext(AuthContext); // Use AuthContext
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    const handleLogout = () => {
        logout(); // Call the logout function from the context
        navigate('/'); // Navigate to the home page after logout
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the dropdown
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    <div className="profile-icon" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    </div>
                    {dropdownOpen && (
                        <div className="dropdown-menu" ref={dropdownRef}>
                            <div className="user-email">{username}</div>
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarAfterLogin;
