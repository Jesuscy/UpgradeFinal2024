import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/MeetingRowStyles.css'
import { useNavigate } from "react-router-dom";

export const SearchMeeting = (props) => {
  const [userMeetings, setUserMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = '664e1bd2aedc946ee763402f'

  const getUserMeetings = async ()=>{
    const response = await axios.post('http://127.0.0.1:3333/meetingUser/userId/meetings', {userId})
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
    <div className="meeting-container">
    {/*     {files.map((file, index) => (
            <FileRow
                key={index}
                data={{
                    filename: file.filename,
                    meetingId: file.meetingData.meetingId,
                    rol: file.meetingData.rol,
                    filepath: file.filepath,
                    extension: getFileExtension(file.filepath)
                }}
            />
        ))} */}
    </div>

</div>
  );
};
