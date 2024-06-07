import React, { useState } from "react";
import { Header } from "../common/Header";
import UserRow from '../common/UserRow.jsx';
import SelectUserRole from '../common/SelectUserRole.jsx';
import "../../styles/Meeting-styles.css";
import { FileRows } from "../common/FileRows.jsx";

export const Meeting = (props) => {
    const [showSelectUserRole, setShowSelectUserRole] = useState(false);
    const [renderOption, setRenderOption] = useState('');

    const handleShowSelectUserRole = () => {
        setShowSelectUserRole(true);
    };

    const handleHideSelectUserRole = () => {
        setShowSelectUserRole(false);
    };

    const handleSetRenderOption = (option) => {
        setRenderOption(option);
    };

    const renderComponent = () => {
        switch (renderOption) {
            case 'Role':
                return <FileRows data={{ option: 'role', meetingName: 'meeting' }} />;
            case 'Meeting':
                return <FileRows data={{ option: 'meeting', meetingName: 'meeting'}} />;
            default:
                return (
                    <>
                        <div className="row box__meetings-title">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <h1>MEETING TITLE</h1>
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
                    </>
                );
        }
    };

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
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                        <UserRow onRoleClick={handleShowSelectUserRole} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12 meeting-box">
                           {renderComponent()}
                        </div>
                    </div>
                </div>
            </div>
            {showSelectUserRole && <SelectUserRole onClose={handleHideSelectUserRole} />} {/* Render condicional */}
        </>
    );
};