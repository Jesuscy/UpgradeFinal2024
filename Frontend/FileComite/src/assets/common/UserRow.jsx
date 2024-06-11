import axios from 'axios';
import "../../styles/UserRow-styles.css";

const UserRow = (props) => {
    const handleDeleteUser = async () => {
        try {
            const meetingId = props.meetingData._id            ;
            const userId = props.user.userId._id;
            // Realiza una solicitud al servidor para eliminar al usuario
            await axios.post('http://localhost:3333/meeting/delete/user', { meetingId, userId });
            // Llama a la función de manejo de eliminación pasada como prop
            const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId });
            props.onDeleteUser(meeting.meetingUsers)
        } catch (error) {
            console.error('Error deleting user from meeting:', error);
        }
    };

    return (
        <div className="row user-row">
            <div className="col-md-12 col-sm-12 col-xs-12 user-profile">
                <img className="col-md-3 col-sm-12 col-xs-12" src='https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png' alt='user' />
                <strong className="col-md-9 col-sm-12 col-xs-12">{props.user.userId.username}</strong>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 currentRole">
                <strong>Role: {props.user.roles.join(', ')}</strong>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button selectRole" onClick={() => {props.onUserClick(props.user); props.onRoleClick()}}>
                <strong>Select Role</strong>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button delete" onClick={handleDeleteUser}>
                <strong>X</strong>
            </div>
        </div>
    );
}

export default UserRow;