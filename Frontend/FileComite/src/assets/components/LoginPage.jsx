import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Header } from '../common/Header';
import { AuthContext } from './Auth.jsx';
import '../../styles/LoginStyles.css';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', { email, password });

        try {
            const response = await axios.post('http://127.0.0.1:3333/user/log', {
                mail: email,
                password: password,

            });
            console.log('Server response:', response);

            if (response.status === 201) {
                setSuccess('Usuario logeado exitosamente.');
                setError('');
                const { token } = response.data;

                // Almacena el token en sessionStorage
                sessionStorage.setItem('token', token);
                login(token)
                // Verificar el token (opcional, dependiendo de la lógica de tu aplicación)
                verifyToken(token);
            } else {
                setError('Error en la autenticación.');
                setSuccess('');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('Error en el servidor.');
            }
            setSuccess('');
        }
    };


    

    const verifyToken = async (token) => {
        try {
            const response = await axios.post('http://127.0.0.1:3333/user/verify', {
                token: token
            });
            console.log('Token verification response:', response);

            if (response.status === 200) {
                setSuccess('Token válido y usuario autenticado.');
                setError('');
                // Redirigir o actualizar el estado de la aplicación según sea necesario
                // window.location.href = '/dashboard'; // Ejemplo de redirección
            } else {
                setError('Token inválido.');
                setSuccess('');
                sessionStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Token verification error:', error);
            setError('Error al verificar el token.');
            setSuccess('');
            sessionStorage.removeItem('token');
        }
    };

    return (
        <>
            <Header />
            <div className='general-login'>
                <div className="col-md-12 col-sm-12 col-xs-12 container-login">
                    <div className="container create-meeting-form">
                        <div className='border-login'>
                            <div className="container-login">
                                <h2>Ingresa tu correo y password:</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                {success && <div className="alert alert-success">{success}</div>}
                                <form onSubmit={handleSubmit} className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;