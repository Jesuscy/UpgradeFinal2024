import { Button } from "bootstrap";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "../common/Header";
import { } from "../../styles/Meeting-styles.css";
import UserRow from '../common/UserRow.jsx';

export const Meeting = (props) => {
    return (
        <>
            <Header />

            <div className="container meeting-container">
                <div className="meeting-content">


                    <div className="row meetings__users-content">



                        <div className="col-md-3 col-sm-12 col-xs-12 meetings-users">
                            <div className="row meetings__user-list">
                                <div className="col-md-12 col-sm-12 col-xs-12 user-title">
                                    <h1>USERS</h1>
                                </div>
                                <div className="user-overflow">
                                    <div className="col-md-12 col-sm-12 col-xs-12 user-rows">                                    
                                        <UserRow />
                                        <UserRow />
                                        <UserRow />     
                                        <UserRow />
                                        <UserRow />
                                        <UserRow />
                                        <UserRow />
                                        <UserRow />
                                        <UserRow />                
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-12 col-xs-12 meeting-box">

                            <div className="row box__meetings-title">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <h1>MEETING TITLE</h1>
                                </div>
                            </div>
                            
                            <div className="row meetings-select">
                                <div className="col-md-4 col-sm-12 col-xs-12 meetings-select__options">
                                    <h1>
                                        Roll
                                    </h1>
                                    <p>
                                        View files corresponding to the role assigned to you
                                    </p>
                                    <button className="meetings-select__button">
                                        VIEW
                                    </button>                                    
                                </div>

                                <div className="col-md-4 col-sm-12 col-xs-12 meetings-select__options">
                                    <h1>Meeting</h1>
                                    <p>
                                        View all the files from the meeting
                                    </p>
                                    <button className="meetings-select__button">
                                        VIEW
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};