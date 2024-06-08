import React from 'react';
import "../../styles/SelectUserRole-styles.css";

const SelectUserRole = ({ roles, onAccept, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className='role-selector'>
                <div className="row"><h2>Select Role</h2></div>
                <div className='row select-option'>                    
                    <select class="form-select" size="4" aria-label="Size 4 select example">
                        <option value="Role 1">Role 1</option>
                        <option value="Role 2">Role 2</option>
                        <option value="Role 3">Role 3</option>
                        <option value="Role 4">Role 4</option>
                        <option value="Role 5">Role 5</option>
                        <option value="Role 5">Role 6</option>
                    </select>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12 role-selector-buttons'>
                    <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={onAccept}>Accept</button> {/* cambiar metodo onClose por metodo onAccept */}
                    <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default SelectUserRole;