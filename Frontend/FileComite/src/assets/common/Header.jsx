import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
/* import { logoutUser } from '../../../../../Backend/src/controllers/user.controller';
 */

export const Header = () => {
    return (
        <>
            <div className="row header">
                <div className="col-md-2">
                    <h2>FileComite</h2>
                </div>
                <div className="col-md-6 share-files">
                    SHARE FILES
                </div>
                <div className='col-md-3'>
                <div className='row'>
                <div className="col-md-4">
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <h2>Login</h2>
                </Link>
                </div>
                <div className="col-md-4">
                <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                    <h2>Register</h2>
                </Link>
                </div>

                <div className="col-md-4">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-primary">Volver a la página principal</button>
                    </Link>
                </div>
                </div>
                </div>

                
                
                {/* <div className="col-md-2">
                    <button>Logout</button>
                </div> */}
                
            </div>
        </>
    );
};