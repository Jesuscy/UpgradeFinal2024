import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddUserMeeting = (props) => {
    const { data, onClose } = props;
    const setUsersMeeting = props.setUsersMeeting
    const meetingId = data.meetingId;
    const [appUsers, setAppUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const roles = []; // Asume que los roles están predefinidos o se asignarán más tarde

    const getAppUsers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3333/user/users');
            const users = response.data.users;
            setAppUsers(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const addUserToMeeting = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:3333/meeting/add/user', { meetingId, userId: selectedUserId, roles });
            const meetingToMod = response.data.meetingToMod
            await setUsersMeeting(meetingToMod.meetingUsers)
            onClose(); // Cierra el modal después de añadir el usuario
        } catch (error) {
            console.error('Error adding user to meeting:', error);
        }
    };

    useEffect(() => {
        getAppUsers();
    }, []);

    return (
        <div className="modal-overlay">
            <div className="role-selector">
                <div className="row">
                    <h2>Add Users</h2>
                </div>
                <div className="row select-option">
                    <select
                        className="form-select"
                        size="4"
                        aria-label="Size 4 select example"
                        onChange={(e) => setSelectedUserId(e.target.value)}
                    >
                        {appUsers.map(user => (
                            <option key={user._id} value={user._id}>{user.username}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 role-selector-buttons">
                    <button
                        className="col-md-4 col-sm-4 col-xs-12 role-selector-button"
                        onClick={addUserToMeeting}
                    >
                        Accept
                    </button>
                    <button
                        className="col-md-4 col-sm-4 col-xs-12 role-selector-button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserMeeting;