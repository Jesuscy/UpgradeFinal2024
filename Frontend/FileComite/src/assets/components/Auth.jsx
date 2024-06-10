import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CheckAuth = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const [authError, setAuthError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                setAuthError(true);
                return;
            }

            try {
                const response = await axios.post('/userIsAuth', { token });
                if (response.data.isAuthenticated) {
                    setAuthChecked(true);
                } else {
                    setAuthError(true);
                }
            } catch (error) {
                setAuthError(true);
            }
        };

        checkAuth();
    }, []);

    if (authError) {
        return (
            <div>
                <p>Error: You are not authenticated. Please <a href="/login">Login</a> or <a href="/register">Register</a>.</p>
            </div>
        );
    }

    if (!authChecked) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {/* Render your protected content here */}
            <h1>Welcome to the protected page!</h1>
        </div>
    );
};

export default CheckAuth;