import React from 'react'
import '../../styles/FileRowStyles.css'
import download from '/img/download-file-icon.png'

export const FileRow = (props) => {
    const file = props.data
    return (
        <div className='row file-container'>
    
                <div className="col file-spec">{file.filename}</div>
                <div className="col file-spec">{file.rol}</div>
                <div className="col file-spec">{file.filepath}</div>
                <div className="col file-spec file-actions">
                    <button><img src={download}/></button>
                </div>
      </div>
    )
}
