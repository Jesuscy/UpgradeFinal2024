import UserRow from './UserRow';
import '../../styles/UserRow-styles.css';

const UserRows = (props) => {
    return (
        props.users.length === 0 ? <div className='no-users'>No users</div> :
        <div className='user'>
        {props.users.map((user, index) => (
            <UserRow
                key={index}
                user={user}
                meetingData={props.meetingData}
                onRoleClick={props.onRoleClick}
                onUserClick = {props.onUserClick}
                confirmDeleteUser={props.confirmDeleteUser}
            />
        ))}
        </div>
    );
}

export default UserRows;