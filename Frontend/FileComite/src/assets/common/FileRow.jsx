import React from 'react'
import '../../styles/FileRowStyles.css'


export const FileRow = (props) => {
    const file = props.data
    return (
        <div className='col-md-12 file-container'>
                <div className="col">{file.filename}</div>
                <div className="col">{file.meetingId}</div>
                <div className="col">{file.rol}</div>
                <div className="col">{file.filepath}</div>
=        </div>
    )
}
