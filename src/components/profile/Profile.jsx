import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const { username } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isPasswordEditing, setIsPasswordEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });

    useEffect(() => {

        console.log(username);
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/email/${username}`);
                setUserDetails(response.data);
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    mobile: response.data.mobile,
                    password: response.data.password, // Leave password empty initially
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [username]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/user/email/${username}`, formData);
            setUserDetails(response.data); // Update local state with the updated user details
            setIsEditing(false); // Exit edit mode
            setIsPasswordEditing(false); // Exit password editing mode
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: userDetails.name,
            email: userDetails.email,
            mobile: userDetails.mobile,
            password: '', // Reset password field
        });
        setIsEditing(false); // Exit edit mode
        setIsPasswordEditing(false); // Exit password editing mode
    };

    if (!userDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {isEditing || isPasswordEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className="profile-detail">
                        <label>
                            <strong>Name:</strong>
                            <input
                                type="texts"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="profile-detail">
                        <label>
                            <strong>Email:</strong>
                            <input
                                type="emails" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="profile-detail">
                        <label>
                            <strong>Mobile:</strong>
                            <input
                                type="tels"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    {isPasswordEditing && (
                        <div className="profile-detail">
                            <label>
                                <strong>Password:</strong>
                                <input
                                    type="passwords"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    )}
                    <button type="submit" className="edit-button">Save Changes</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </form>
            ) : (
                <>
                    <div className="profile-detail">
                        <strong>Name:</strong> <span>{userDetails.name}</span>
                    </div>
                    <div className="profile-detail">
                        <strong>Email:</strong> <span>{userDetails.email}</span>
                    </div>
                    <div className="profile-detail">
                        <strong>Mobile:</strong> <span>{userDetails.mobile}</span>
                    </div>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
                    <button className="edit-button" onClick={() => setIsPasswordEditing(true)}>Change Password</button>
                </>
            )}
        </div>
    );
};

export default Profile;
