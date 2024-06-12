import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Auth';
import axios from 'axios';

export const NewMeeting = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [meetingName, setMeetingName] = useState('');
  const [meetingPassword, setMeetingPassword] = useState('');
  const [meetingRoles, setMeetingRoles] = useState('');
  const [rolesList, setRolesList] = useState([]);
  const { userId, token } = useContext(AuthContext); // Combine userId and token
  var meetingId = null;
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStepIndex === totalSteps) {
      createMeeting();
    } else {
      setCurrentStepIndex(prevStep => Math.min(prevStep + 1, totalSteps));
    }
  };

  const backStep = () => {
    setCurrentStepIndex(prevStep => Math.max(prevStep - 1, 1));
  };

  const addRole = () => {
    if (meetingRoles.trim() !== '') {
      setRolesList(prevRoles => [...prevRoles, meetingRoles]);
      setMeetingRoles('');
    }
  };

  const joinMeeting = async () => {
    console.log(meetingId, userId)
    try {
      const response = await axios.post('http://127.0.0.1:3333/meeting/add/user', {
        meetingId: meetingId,
        userId: userId,
        roles: []  
      });
    } catch (error) {
      console.error('Error joining meeting', error);
    }
  }

  const createMeeting = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3333/meeting/create', {
        name: meetingName,
        roles: rolesList,
        users: []  
      });
      if (response.status === 201) {
        alert('Meeting successfully created');
        const meeting = (response.data.meeting)
        meetingId= meeting._id;
        await joinMeeting()
      } else {
        alert('Error creating meeting: ' + response.data.message);
      }
    } catch (error) {
      console.error('There was an error creating the meeting!', error);
      alert('Internal server error');
    }
  };

  if (!token) {
    return    <div className='create-meeting-step' style={{ textAlign: "center" }}>Please first log in to create a meeting.</div>;     }

  return (
    <div className="container create-meeting-form">
      <div className="row">
        <div className="col-md-12 create-meeting-step">
          {currentStepIndex === 1 && (
            <div className='step' id="step1">
              <div><label>Server Name</label></div>
              <div><input type="text" value={meetingName} onChange={(e) => setMeetingName(e.target.value)} /></div>
            </div>
          )}
          {currentStepIndex === 2 && (
            <div className='step' id="step2">
              <div><label>Server Description</label></div>
              <div><input type="password" value={meetingPassword} onChange={(e) => setMeetingPassword(e.target.value)} /></div>
            </div>
          )}
          {currentStepIndex === 3 && (
            <div className='step' id="step3">
              <div><label>Server Roles</label></div>
              <div>
                <input 
                  type="text" 
                  value={meetingRoles} 
                  onChange={(e) => setMeetingRoles(e.target.value)} 
                />
                <button onClick={addRole}>ADD</button>
              </div>
              <div>
                <ul>
                  {rolesList.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-12 create-meeting-change-step">
          <button onClick={backStep} disabled={currentStepIndex === 1}>Back</button>
          <button onClick={nextStep}>
            {currentStepIndex === totalSteps ? 'Create' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};
