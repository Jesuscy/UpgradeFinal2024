import React, { useState } from 'react';
import axios from 'axios';
import { Header } from '../common/Header';
import '../../styles/LoginStyles.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:3333/user/create', {
                mail: email,
                password: password,
                /* rol: ['']  usuario nunca puede determinar rol... darle vuelta a esto */
            });

            if (response.status === 201) {
                setSuccess('Usuario registrado exitosamente.');
                setError('');
                // Limpia los campos del formulario
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('Error en el servidor.');
            }
            setSuccess('');
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
                                <h2>Ingresa tu correo y crea una contraseña:</h2>
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
                                    <div className="form-group mb-3">
                                        <label>Confirmar Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
