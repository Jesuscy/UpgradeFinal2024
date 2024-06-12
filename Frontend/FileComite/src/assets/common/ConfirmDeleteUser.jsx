import axios from "axios";

const ConfirmDeleteUser = (props) => {
  const handleDeleteUser = async () => {
    try {
        const meetingId = props.meeting.meeting._id            ;
        const userId = props.user.userId._id;
        // Realiza una solicitud al servidor para eliminar al usuario
        await axios.post('http://localhost:3333/meeting/delete/user', { meetingId, userId });
        // Llama a la función de manejo de eliminación pasada como prop
        const { data: meeting } = await axios.post('http://localhost:3333/meeting/meetingId/users', { meetingId });
        props.setUsersMeeting(meeting.meetingUsers)
        props.onClose()
    } catch (error) {
        console.error('Error deleting user from meeting:', error);
    }
  };

  return (
      <div className="modal-overlay">
          <div className='role-selector'>
              <div className="row"><h2>Confirm Delete</h2></div>
              <div className='row select-option'>
                  <p>Are you sure you want to remove the user from the meeting?</p>
              </div>
              <div className='col-md-12 col-sm-12 col-xs-12 role-selector-buttons'>
                  <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={() => { handleDeleteUser()}}>Ok</button> {/* cambiar metodo onClose por metodo onAccept */}
                  <button className='col-md-4 col-sm-4 col-xs-12 role-selector-button' onClick={props.onClose} >Cancel</button>
              </div>
          </div>
      </div>
  )
}

export default ConfirmDeleteUser;