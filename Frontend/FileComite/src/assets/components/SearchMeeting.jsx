import React,{useContext} from "react";
import { MeetingRows } from "../common/MeetingRows";
import { AuthContext } from '../components/Auth';

export const SearchMeeting = () => {
  const { token } = useContext(AuthContext); // Combine userId and token

  if (!token) {
    return    <div className='create-meeting-step' style={{ textAlign: "center" }}>Please first log in to create a meeting.</div>;   
  }
  return (
    <div className="container create-meeting-form">
      <MeetingRows/>
    </div>
  );
};
