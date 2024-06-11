import React from 'react'
import '../../styles/MeetingRowStyles.css'
import enter from '/img/enter-meeting-icon.png'
import { Link } from 'react-router-dom';

export const MeetingRow = (props) => {
    const meeting = props.data
    const meetingId = meeting.meetingId
    const meetingRoles = meeting.meetingRoles
    
  return (
    <div className='row meeting-container'>
    
    <div className="col-md-3 meeting-spec">{"Name: " + meeting.meetingName}</div>
    <div className="col-md-3  meeting-long-spec"><p>{meeting.meetingRoles+'.'}</p></div>
    <div className="col-md-3  meeting-spec">{"Users: " +meeting.meetingUsers.length}</div>
    <div className="col-md-3  meeting-spec meeting-actions">
        <button>
        <Link to="/meeting" state={{meetingId, meetingRoles}} style={{ textDecoration: 'none', color: 'black' }}>

            <img src={enter} alt="Go to meeting"/>
        </Link>
        </button>
    </div>
</div>  )
}
