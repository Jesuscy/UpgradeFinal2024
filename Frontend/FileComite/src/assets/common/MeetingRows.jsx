import React, { useEffect, useState } from 'react'
import '../../styles/MeetingRowStyles.css'
import { MeetingRow } from './MeetingRow'
import axios from 'axios'

export const MeetingRows = () => {
    const [userMeetings, setUserMeetings] = useState([])

    const userId = '664e1bd2aedc946ee763402f'

    const getUserMeetings = async ()=>{
      const response = await axios.post('http://127.0.0.1:3333/meetingUser/userId/meetings', {userId})
      setUserMeetings(response.data)
    
    }
    
    useEffect(() => {
      getUserMeetings()
  
    }, []);

  return (
    <div className='meeting'>
    <div className="meetings-header">
        MEETING TITLE
    </div>
    <div className="meetings-container">
     {userMeetings.map((meeting, index) => (
                    <MeetingRow
                        key={index}
                        data={{
                            meetingId: meeting.meetingId._id,
                            meetingName: meeting.meetingId.meetingName,
                            meetingRoles: meeting.meetingId.meetingRoles,
                            meetingUsers: meeting.meetingId.meetingUsers,
                            meeting:meeting
                        }} 
                    />
                ))}   </div>
   
</div>  )
}
