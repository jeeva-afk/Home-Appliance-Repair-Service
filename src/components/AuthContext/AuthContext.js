// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); // State for the username

    const login = (user) => {
        setLoggedIn(true);
        setUsername(user);
    };

    const logout = () => {
        setLoggedIn(false);
        setUsername(''); 
    };

    return (
        <AuthContext.Provider value={{ loggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
