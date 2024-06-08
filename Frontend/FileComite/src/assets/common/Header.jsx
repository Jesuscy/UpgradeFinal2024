import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
/* import { logoutUser } from '../../../../../Backend/src/controllers/user.controller';
 */

export const Header = () => {
    return (
        <>
            <div className="row header">
                <div className="col-md-3">
                    <h2>FileComite</h2>
                </div>
                <div className="col-md-5 share-files">
                    SHARE FILES
                </div>
                <div className="col-md-2">
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <h2>Login</h2>
                </Link>
                </div>
                
                {/* <div className="col-md-2">
                    <button>Logout</button>
                </div> */}
                
            </div>
        </>
    );
};