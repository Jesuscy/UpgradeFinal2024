import React, { useState } from 'react';
import { Header } from '../common/Header';
import { Link } from 'react-router-dom';
import { NewMeeting } from '../common/NewMeeting';
import { FileRows } from '../common/FileRows';
import { UploadFile } from '../common/UploadFile';
import { SearchMeeting } from '../components/SearchMeeting'; // Asumiendo que tienes este componente
import { InfoAndTutorials } from '../components/InfoAndTutorials'; // Asumiendo que tienes este componente

export const Home = () => {
  const [selectedServer, selectServer] = useState();
  const [showMeetingsInfo, setShowMeetingInfo] = useState(true);
  const [activeComponent, setActiveComponent] = useState(''); // Agregado useState para activeComponent

  const toggleMeetingsInfo = () => {
    setShowMeetingInfo(!showMeetingsInfo);
  };

  const listMeetings = () => {
    return (
      <div className="row meeting-row">
        <div className="col-md-9 col-sm-12 col-xs-12 meeting-specs-name">
          {/* Nombre Reunion */}
          <Link to="/meeting" style={{ textDecoration: 'none', color: 'black' }}>
            <strong>FileCommite</strong>
          </Link>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12 meeting-specs-button">
          {/* Botones Conectar / Desconectar */}
          <strong>X</strong>
        </div>
      </div>
    );
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'NewMeeting':
        return <NewMeeting />;
      case 'SearchMeeting':
        return <SearchMeeting />;
      case 'InfoAndTutorials':
        return <InfoAndTutorials />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="meetings-section">
      <div className="row">
        {/* Start Meetings Info Section */}
        {showMeetingsInfo && (
          <div className="col-md-3 col-sm-12 col-xs-12 meetings-info">
            <div className="row recent-meetings">
              <div className="col-md-12">
                <p>Recent Meetings</p>
                {listMeetings()}
              </div>
              <div className="col-md-12">
                <p>Recent Messages</p>
                {listMeetings()}
                {listMeetings()}
                {listMeetings()}
              </div>
            </div>
          </div>
        )}
        {/* End Meetings Info Section */}

        <div className={`col-md-${showMeetingsInfo ? '9' : '12'} col-sm-12 col-xs-12`}>
          <div className="container">
            <div className="row meetings-creator">
              <div className="col-md-3 col-sm-12 col-xs-12 meetings-options">
                <div className="row">
                  <div className="col-md-12">
                    <div className="meeting-option" onClick={() => setActiveComponent('NewMeeting')}>
                      Create a new Meeting
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="meeting-option" onClick={() => setActiveComponent('SearchMeeting')}>
                      Search Meeting
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="meeting-option" onClick={() => setActiveComponent('InfoAndTutorials')}>
                      Info and tutorials
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="meeting-option">
                      <div onClick={toggleMeetingsInfo}>
                        {showMeetingsInfo ? 'Hide Meetings Info' : 'Show Meetings Info'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12">
                {renderComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
