import React, { useEffect, useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CheckAuth = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const [authError, setAuthError] = useState(false);

    const navigate = useNavigate();

   /*  const history = useHistory();
 */

       /*  const checkToken = () */
    useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem('token');
            console.log(token);
            if (!token) {
                setAuthError(true);
                return;
                
            }

            try {
                const response = await axios.post('http://127.0.0.1:3333/user/userIsAuth', { token });
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
    }, );

    if (authError) {
        return (
            <div>
                <p>Error: You are not authenticated. Please <a href="/login">Login</a> or <a href="/register">Register</a>.</p>
            </div>
        );
    }

    if (!authChecked) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            
            <h1>Bienvenido!</h1>
        </div>
    );
};

export default CheckAuth;