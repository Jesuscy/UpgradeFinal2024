import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../components/Auth";



export const Header = () => {
    const { logout } = useContext(AuthContext);

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

                    <div className="col-md-4">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>Login</h3>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>Register</h3>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <button onClick={logout} style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>Logout</h3>
                        </button>

                    </div>


                </div>






            </div>
        </>
    );
};


