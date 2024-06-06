import React from 'react';
import { } from "../../styles/UserRow-styles.css";

const UserRow = () => {
    return (
        <>
        <div className="row user-row">

            <div className="col-md-12 col-sm-12 col-xs-12 user-profile">{/*Nombre Reunion */}            
                    <img className="col-md-3 col-sm-12 col-xs-12" src='https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png' alt='user'/>
                    <strong className="col-md-9 col-sm-12 col-xs-12">user.name</strong>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button roll">{/*Botones Cambiar UserRoll */}
                <strong>Roll</strong>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 user-specs-button delete">{/*Botones Quitar User del Meeting */}
                <strong>X</strong>
            </div>
        </div>
        </>
    )
}

export default UserRow
