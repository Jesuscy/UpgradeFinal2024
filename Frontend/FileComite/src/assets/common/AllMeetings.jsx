import React from "react";
import "../../styles/AllMeetingsStyle.css";
import{ AllMeeting } from "../common/AllMeeting.jsx";


export const AllMeetings = () => {
  return (
    <div className="file">
      <div className="files-header">ALL MEETINGS</div>
      
      <div className="files-container">
        {fileExample.map((file, index) => (
          <AllMeeting
            key={index}
            data={{
              filename: file.filename,
              meetingId: file.meetingData.meetingId,
              rol: file.meetingData.rol,
              filepath: file.filepath,
            }}
          />
        ))}
      </div>
      <div className="upload-file-container">
        <div className="files-new-file2">
            ENTRAR
        </div>
      </div>
    </div>
  );
};

export default AllMeetings;
