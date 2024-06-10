import React from 'react'
import '../../styles/FileRowStyles.css'
import download from '/img/download-file-icon.png'

export const FileRow = (props) => {
    const file = props.data

    const downloadFile = () => {
        const anchor = document.createElement('a')
        anchor.href = file.filepath
        anchor.download = file.filename
        anchor.click()
    };
    return (
        <div className='row file-container'>
    
                <div className="col file-spec">{file.filename}</div>
                <div className="col file-spec">{file.rol}</div>
                <div className="col file-spec">{file.extension}</div>
                <div className="col file-spec file-actions">
                    <button onClick={downloadFile}>
                        <img src={download} alt="Download File"/>
                    </button>
                </div>
      </div>
    )
}
