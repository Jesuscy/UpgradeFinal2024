import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddUserMeeting = ({ onClose }) => {

    const [appUser, setAppUsers] = useState([]);

    const getAppUser = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3333/user/users');
            const users = response.data.users;
            setAppUsers(users)
            console.log(users)
            console.log('appUser:', appUser); // Hacer algo con los usuarios, como mostrarlos en la consola
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    /* getAppUser(); */
    useEffect(() => {
        getAppUser();

    }, []);

    return (
        <div className="modal-overlay">
            <div className='role-selector'>
                <div className="row"><h2>Add Users</h2></div>
                <div className='row select-option'>
                    <select className="form-select" size="4" aria-label="Size 4 select example">

                    </select>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12 role-selector-buttons'>
                    <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button'>Accept</button>
                    <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AddUserMeeting;
