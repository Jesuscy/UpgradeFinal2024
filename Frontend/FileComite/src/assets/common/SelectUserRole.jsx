import axios from "axios";
import "../../styles/SelectUserRole-styles.css";

const SelectUserRole = (props) => {
    const onAccept = async () => {
        const select = document.querySelector('.form-select');
        const selectedRole = select.options[select.selectedIndex].text;
        
        await axios.post('http://localhost:3333/meeting/add/rol', { meetingId: props.user.meetingId, userId: props.user.userId._id, rol: selectedRole })
        const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId: props.user.meetingId });
        props.setMeeting(meeting);
        props.setUsersMeeting(meeting.meetingUsers)
        props.onClose();
    }  

    const onDelete = async () => {
        const select = document.querySelector('.form-select');
        const selectedRole = select.options[select.selectedIndex].text;
        await axios.post('http://localhost:3333/meeting/delete/rol', { meetingId: props.user.meetingId, userId: props.user.userId._id, rol: selectedRole })
        const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId: props.user.meetingId });
        props.setMeeting(meeting);
        props.setUsersMeeting(meeting.meetingUsers)
        props.onClose();
    }  

    return (
        props.roles && props.roles.length > 0 ? 
        <div className="modal-overlay">
            <div className='role-selector'>
                <div className="row"><h2>Select Role</h2></div>
                    <div className='row select-option'>                    
                        <select className="form-select" size="4" aria-label="Size 4 select example">
                            {
                                props.roles.map((role, index) => (
                                    <option value={index} key={index}>{role}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xs-12 role-selector-buttons'>
                    <button className='col-md-3.5 col-sm-3.5 col-xs-12 role-selector-button' onClick={onAccept}>Accept</button> {/* cambiar metodo onClose por metodo onAccept */}
                    <button className='col-md-3.5 col-sm-3.5 col-xs-12 role-selector-button' onClick={onDelete}>Delete</button> {/* cambiar metodo onClose por metodo onAccept */}
                    <button className='col-md-3.5 col-sm-3.5 col-xs-12 role-selector-button' onClick={props.onClose}>Close</button>
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