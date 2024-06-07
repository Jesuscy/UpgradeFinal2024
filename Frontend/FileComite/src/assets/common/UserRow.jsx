import React from 'react';
import "../../styles/UserRow-styles.css";

const UserRow = ({ onRoleClick }) => {
    return (
        <div className="row user-row">
            <div className="col-md-12 col-sm-12 col-xs-12 user-profile">
                <img className="col-md-3 col-sm-12 col-xs-12" src='https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png' alt='user'/>
                <strong className="col-md-9 col-sm-12 col-xs-12">user.name</strong>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button role" onClick={onRoleClick}>
                <strong>Role</strong>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button delete">
                <strong>X</strong>
            </div>
        </div>
    );
}

export default UserRow;



