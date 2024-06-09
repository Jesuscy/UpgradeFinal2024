import React from 'react';
import UserRow from './UserRow';
import '../../styles/UserRow-styles.css';

const userExample = [
    {
        "username": "john_doe",
        "password": "password123",
        "rol": ["admin"],
        "meetings": []
    },
    {
        "username": "jane_smith",
        "password": "password123",
        "rol": ["user"],
        "meetings": []
    },
    {
        "username": "mike_brown",
        "password": "password123",
        "rol": ["user"],
        "meetings": []
    }
];

const UserRows = ({ onRoleClick }) => {
    return (
        <div className='user'>
            {userExample.map((user, index) => (
                <UserRow
                    key={index}
                    user={user}
                    onRoleClick={onRoleClick}
                />
            ))}
        </div>
    );
}

export default UserRows;
