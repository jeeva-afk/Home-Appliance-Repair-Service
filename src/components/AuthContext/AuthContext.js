// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

// Create an AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); // State for the username

    const login = (user) => {
        setLoggedIn(true);
        setUsername(user); // Set the username when logging in
    };

    const logout = () => {
        setLoggedIn(false);
        setUsername(''); // Clear the username on logout
    };

    return (
        <AuthContext.Provider value={{ loggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
