import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/SelectUserRole-styles.css";

const SelectUserRole = (props) => {
    return (
        props.meeting.meetingRoles && props.meeting.meetingRoles.length > 0 ? 
        <div className="modal-overlay">
            <div className='role-selector'>
                <div className="row"><h2>Select Role</h2></div>
                    <div className='row select-option'>                    
                        <select className="form-select" size="4" aria-label="Size 4 select example">
                            {
                                props.meeting.meetingRoles.map((role, index) => (
                                    <option value={index}>{role}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xs-12 role-selector-buttons'>
                        <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={props.onAccept}>Accept</button> {/* cambiar metodo onClose por metodo onAccept */}
                        <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
            : 
            <div className="modal-overlay">
                <div className='role-selector'>
                    <div className="row"><h2>Not Roles Found</h2></div>
                </div>
            </div>
    );
}

export default SelectUserRole;