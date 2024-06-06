import React, { useState } from 'react';

export const NewMeeting = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    setCurrentStepIndex(prevStep => Math.min(prevStep + 1, totalSteps));
  };

  const backStep = () => {
    setCurrentStepIndex(prevStep => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="container create-meeting-form">
      <div className="row">
        <div className="col-md-12 create-meeting-step">
          {currentStepIndex === 1 && (
            <div className='step' id="step1">
              <div><label>Server Name</label></div>
              <div><input type="text" /></div>
            </div>
          )}
          {currentStepIndex === 2 && (
            <div className='step' id="step2">
              <div><label>Server Password</label></div>
              <div><input type="password" /></div>
            </div>
          )}
          {currentStepIndex === 3 && (
            <div className='step' id="step3">
              <div><label>Server Roles</label></div>
              <div><input type="text" /></div>
              <button>ADD</button>
            </div>
          )}
        </div>
        <div className="col-md-12 create-meeting-change-step">
          <button onClick={backStep} disabled={currentStepIndex === 1}>Back</button>
          <button onClick={nextStep} disabled={currentStepIndex === totalSteps}>Next</button>
        </div>
      </div>
    </div>
  );
};
