import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/Header";
import UserRows from "../common/UserRows.jsx";
import SelectUserRole from "../common/SelectUserRole.jsx";
import "../../styles/Meeting-styles.css";
import { FileRows } from "../common/FileRows.jsx";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export const Meeting = (props) => {
    const navigate = useNavigate();
    const [showSelectUserRole, setShowSelectUserRole] = useState(false);
    const [renderOption, setRenderOption] = useState('');
    const location = useLocation();
    const meetingId = location.state;
    console.log('Data desde meeting' + meetingId);

    const [meeting, setMeeting] = useState('');
    const [usersMeeting, setUsersMeeting] = useState([]);

    const fetchMeetingData = async () => {
        try {
            const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId });
            setMeeting(meeting);
            setUsersMeeting(meeting.meetingUsers)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMeetingData();
    }, []);

    const handleShowSelectUserRole = () => {
        showSelectUserRole ? setShowSelectUserRole(false) : setShowSelectUserRole(true);
    };

    const handleHideSelectUserRole = () => {
        setShowSelectUserRole(false);
    };

    const handleSetRenderOption = (option) => {
        setRenderOption(option);
    };

    const renderComponent = ({meetingData}) => {
        switch (renderOption) {
            case 'Role':
                return <FileRows data={{ option: 'role', meetingName: 'meeting' }} />;
            case 'Meeting':
                return <FileRows data={{ option: 'meeting', meetingName: 'meeting' }} />;
            default:
                return (
                    <>
                        <div className="row box__meetings-title">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <h1>Meeting: {meetingData.meetingName}</h1>
                            </div>
                        </div>
                        <div className="row meetings-select">
                            <div className="col-md-4 col-sm-12 col-xs-12 meetings-select__options">
                                <h1>Role</h1>
                                <p>View files corresponding to the role assigned to you</p>
                                <button className="meetings-select__button" onClick={() => handleSetRenderOption('Role')}>VIEW</button>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 meetings-select__options">
                                <h1>Meeting</h1>
                                <p>View all the files from the meeting</p>
                                <button className="meetings-select__button" onClick={() => handleSetRenderOption('Meeting')}>VIEW</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 box__meetings-back">
                                <button className='meetings-back__button' onClick={handleBackClick}>Back</button>
                            </div>
                        </div>
                    </>
                );
        }
    };

    const handleBackClick = () => {
        navigate('/');
    };
    return (
        <>
            <Header />
            {meeting ?
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
                                            <UserRows users={usersMeeting} meetingData={meeting.meeting} onRoleClick={handleShowSelectUserRole} updateUsersState={setUsersMeeting}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12 meeting-box">
                                <div>
                                {renderComponent({ meetingData: meeting.meeting })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <h1>Loading...</h1>
            }
            {showSelectUserRole && <SelectUserRole onAccept={handleHideSelectUserRole} onClose={handleHideSelectUserRole} meeting={meeting.meeting}/>} 
        </>
    );
};

