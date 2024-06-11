import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/Auth";




export const Header = () => {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return (
        <>
            <div className="row header">
                <div className='col-md-3 mini-menu'>

                    <div className="col-md-6">
                        <Link to="/" style={{ textDecoration: 'none' }}>

                            <img width="32" height="32" src="https://img.icons8.com/windows/32/home.png" alt="home" />

                        </Link>
                    </div>
                    <div className="col-md-6">
                        <h3>FileComite</h3>
                    </div>

                </div>
                <div className="col-md-6 share-files">
                    SHARE FILES
                </div>
                <div className='col-md-3 mini-menu'>
                    {/* Show Login and Register only if there is no token */}
                    {!token && (
                        <>
                            <div className="col-md-6">
                                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                    <h3>Login</h3>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                                    <h3>Register</h3>
                                </Link>
                            </div>
                        </>
                    )}
                    {/* Show Logout only if there is a token */}
                    {token && (
                        <div className="col-md-12">
                            <button onClick={handleLogout} style={{ textDecoration: 'none', color: 'black', backgroundColor: '#9EE489'}}>
                                <h3>Logout</h3>
                            </button>
                        </div>
                    )}
                </div>





            </div>
        </>
    );
};


