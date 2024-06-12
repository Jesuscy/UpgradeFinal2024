import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/Header";
import UserRows from "../common/UserRows.jsx";
import SelectUserRole from "../common/SelectUserRole.jsx";
import "../../styles/Meeting-styles.css";
import { FileRows } from "../common/FileRows.jsx";
import { useLocation } from 'react-router-dom';
import { AuthContext } from './Auth.jsx';
import axios from "axios";
import AddUserMeeting from "../common/AddUserMeeting"; // Importa el componente
import ConfirmDeleteUser from "../common/ConfirmDeleteUser"; // Importa el componente

export const Meeting = (props) => {
    const navigate = useNavigate();
    const [showSelectUserRole, setShowSelectUserRole] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [renderOption, setRenderOption] = useState('');
    const [userRoles, setUserRoles] = useState([])
    const location = useLocation();
    const {meetingId} = location.state;
    const {meetingRoles} = location.state
    const { token } = useContext(AuthContext);
    const [userMeeting, setUserMeeting] = useState();
    const [usersMeeting, setUsersMeeting] = useState([]);
    const [meeting, setMeeting] = useState('');
    const [showAddUserMeeting, setShowAddUserMeeting] = useState(false); // Estado para controlar la visualización de AddUserMeeting

    const { userId } = useContext(AuthContext);

    
    if (!token) {
        navigate('/login');
        alert('First Log In');
    }

    const fetchMeetingData = async () => {
        try {
            const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId });
            setMeeting(meeting);
            setUsersMeeting(meeting.meetingUsers);
        } catch (error) {
            console.error(error);
        }
    };

    const getUserRolInMeeting = async () =>{

        try {
            const response = await axios.post('http://127.0.0.1:3333/meetingUser/userId/roles',{ userId, meetingId })
            setUserRoles(response.data.roles)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMeetingData();
        getUserRolInMeeting();

    }, []);


    const handleShowSelectUserRole = () => {
        setShowSelectUserRole(!showSelectUserRole);
    };

    const handleConfirmDelete = () => {
        setShowDeleteUser(!showDeleteUser);
    };

    const handleHideSelectUserRole = () => {
        setShowSelectUserRole(false);
    };

    const handleUserClick = (user) => {
        setUserMeeting(user);
    };

    const handleSetRenderOption = (option) => {
        setRenderOption(option);
    };

    const handleAddUsersClick = () => {
        setShowAddUserMeeting(true); // Muestra el componente AddUserMeeting
    };

    const handleCloseAddUserMeeting = () => {
        setShowAddUserMeeting(false); // Oculta el componente AddUserMeeting
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const renderComponent = ({ meetingData }) => {
        switch (renderOption) {
            case 'Role':
                return <FileRows data={{ option: 'role', meetingName: 'meeting', meetingId: meetingId, meetingRoles: meetingRoles, userRoles: userRoles , title:meetingData.meetingName}} />;
            case 'Meeting':
                return <FileRows data={{ option: 'meeting', meetingName: 'meeting', meetingId: meetingId, title:meetingData.meetingName}} />;
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
                                    <div className="col-md-12 col-sm-12 col-xs-12 add-users">
                                        <button className="col-md-12 col-sm-12 col-xs-12" onClick={handleAddUsersClick}>Add Users</button>
                                    </div>
                                    <div className="user-overflow">
                                        <div className="col-md-12 col-sm-12 col-xs-12 user-rows">
                                            <UserRows users={usersMeeting} meetingData={meeting.meeting} onUserClick={handleUserClick} onRoleClick={handleShowSelectUserRole} confirmDeleteUser={handleConfirmDelete} />
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
            {showSelectUserRole && <SelectUserRole user={userMeeting} onClose={handleHideSelectUserRole} roles={meeting.meeting.meetingRoles} setMeeting={setMeeting} setUsersMeeting={setUsersMeeting} />}
            {showAddUserMeeting && <AddUserMeeting data={{meetingId,userId}} setUsersMeeting={setUsersMeeting} onClose={handleCloseAddUserMeeting} />} {/* Renderiza el componente AddUserMeeting si showAddUserMeeting es verdadero */}
            {showDeleteUser && <ConfirmDeleteUser onClose={handleConfirmDelete} meeting={meeting} user={userMeeting} setUsersMeeting={setUsersMeeting}/>} {/* Renderiza el componente AddUserMeeting si showAddUserMeeting es verdadero */}
        </>
    );
};
