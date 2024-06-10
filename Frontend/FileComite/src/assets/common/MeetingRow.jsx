import React from 'react'
import '../../styles/MeetingRowStyles.css'
import download from '/img/download-file-icon.png'

export const MeetingRow = () => {
  return (
    <div className='row meeting-container'>
    
    <div className="col meeting-spec">{'das'}</div>
    <div className="col meeting-spec">{'dasd'}</div>
    <div className="col meeting-spec">{'asd'}</div>
    <div className="col meeting-spec meeting-actions">
        <button>
            <img src={download} alt="Download File"/>
        </button>
    </div>
</div>  )
}
