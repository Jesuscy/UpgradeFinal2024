import React, { useContext,useEffect, useState } from 'react'
import '../../styles/MeetingRowStyles.css'
import { MeetingRow } from './MeetingRow'
import { AuthContext } from '../components/Auth';
import axios from 'axios'


export const MeetingRows = () => {
    const [userMeetings, setUserMeetings] = useState([])
    const { userId } = useContext(AuthContext);

    const getUserMeetings = async ()=>{
      const response = await axios.post('http://127.0.0.1:3333/meetingUser/userId/meetings', {userId})
      setUserMeetings(response.data)
      console.log(response)
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
          {userMeetings.slice(1).map((meeting, index) => ( // Aquí usamos slice(1) para omitir el primer elemento
            <MeetingRow
              key={index}
              data={{
                meetingId: meeting.meetingId?._id || '', 
                meetingName: meeting.meetingId?.meetingName || 'N/A',
                meetingRoles: meeting.meetingId?.meetingRoles || [],
                meetingUsers: meeting.meetingId?.meetingUsers || [],
                meeting: meeting
              }} 
            />
          ))}
        </div>
      </div>
    )
}
