import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('token') || '');
    const [userId, setUserId] = useState('')

    useEffect(() => {
        sessionStorage.setItem('token', token);
    }, [token]);

    const login = (newToken,userId) => {
        setToken(newToken);
        setUserId(userId)
    };

    const logout = () => {
        setToken('');
        setUserId('')
        sessionStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ userId ,token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };