import axios from 'axios';
import "../../styles/UserRow-styles.css";

const UserRow = (props) => {
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
            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button delete" onClick={() => {props.onUserClick(props.user); props.confirmDeleteUser()}}>
                <strong>X</strong>
            </div>
        </div>
    );
}

export default UserRow;