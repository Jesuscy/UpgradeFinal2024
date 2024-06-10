import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SearchMeeting = (props) => {
  const [userMeetings, setUserMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserMeetings = async ()=>{
    const response = axios.post
  }

  useEffect(() => {
    

  }, []);

  if (loading) return <div>Cargando reuniones...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="meeting-content">

    </div>
  );
};
