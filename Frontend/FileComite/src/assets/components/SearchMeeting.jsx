import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SearchMeeting = (props) => {
  const navigate = useNavigate();
  const [userMeetings, setUserMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserMeetings = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3333/meeting/meetings/userId"
        );
        console.log(response.data, "MEETING CONSOLA");
        setUserMeetings(response.data);
      } catch (error) {
        setError("Error al obtener los meetings de los usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUserMeetings();
  }, []);

  if (loading) return <div>Cargando reuniones...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="meeting-content">
      <div className="col-md-12">
        {userMeetings.length === 0 ? (
          <div>No hay reuniones disponibles.</div>
        ) : (
          userMeetings.map((user) => (
            <div key={user._id} className="user-meetings">
              <h2>{user.name}</h2>
              {user.meetings.map((meeting) => (
                <div key={meeting._id} className="meeting">
                  <h3>{meeting.title}</h3>
                  <p>ID: {meeting._id}</p>
                  <p>Descripción: {meeting.description}</p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
