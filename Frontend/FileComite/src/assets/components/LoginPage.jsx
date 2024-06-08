import React, { useState } from 'react';
import { Header } from '../common/Header';
import '../../styles/LoginStyles.css'



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };
    return (
        
        <>
        <Header />

        <div className='general-login'>

        <div className="col-md-12 col-sm-12 col-xs-12 container-login">
            <h1>Login</h1>
            
            <div className="container create-meeting-form">
        <div className='border-login'>
        
        <div className="container-login">
            <h2>Ingresa tu correo y password:</h2>
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