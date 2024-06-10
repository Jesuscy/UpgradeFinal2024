import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <>
            <div className="row header">
            <div className='col-md-3 mini-menu'>

            <div className="col-md-6">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        
                    <img width="32" height="32" src="https://img.icons8.com/windows/32/home.png" alt="home"/>
                        
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

                
                </div>
                

                
                
                
                
            </div>
        </>
    );
};   


/*GPT

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header">
            <div className="col-md-3 text-center">
                <h2>FileComite</h2>
            </div>
            <div className="col-md-6 text-center">
                <h3>SHARE FILES</h3>
            </div>
            <div className="col-md-3 mini-menu">
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <h3>Login</h3>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                    <h3>Register</h3>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/228BE6/home.png" alt="home" />
                </Link>
            </div>
        </div>
    );
};

*/ 
/* GPT v2 */


/*v1*/

/* import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../../../Backend/src/controllers/user.controller';


export const Header = () => {
    return (
        <>
            <div className="row header">
                <div className="col-md-3">
                    <h2>FileComite</h2>
                </div>
                <div className="col-md-6 share-files">
                    SHARE FILES
                </div>
                


                <div className="col-md-3">
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    Login
                </Link>
                </div>
               <div className="col-md-2">
                    <button>Logout</button> 
                </div> 

            </div>
        </>
    );
}; */