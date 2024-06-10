import React from "react";
import "../../styles/AllMeetingsStyle.css";

export const AllMeeting = (props) => {
  const file = props.data;
  return (
    <div className="row file-container">
      <div className="col file-spec">{file.filename}</div>
      <div className="col file-spec">{file.rol}</div>
      <div className="col file-spec">{file.filepath}</div>
      <div className="col file-spec file-actions"></div>
    </div>
  );
};
