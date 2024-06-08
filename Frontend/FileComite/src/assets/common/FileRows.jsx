import React, { useState } from 'react';
import '../../styles/FileRowStyles.css';
import { FileRow } from './FileRow';
import { UploadFile } from './UploadFile';

const fileExample = [
    {
        filename: "prueba",
        meetingData: {
            meetingId: "12345",
            rol: ["rol1", "rol2"]
        },
        filepath: "/path/to/file"
    },
    {
        filename: "prueba",
        meetingData: {
            meetingId: "12345",
            rol: ["rol1", "rol2"]
        },
        filepath: "/path/to/file"
    },
    {
        filename: "prueba",
        meetingData: {
            meetingId: "12345",
            rol: ["rol1", "rol2"]
        },
        filepath: "/path/to/file"
    },
    {
        filename: "prueba",
        meetingData: {
            meetingId: "12345",
            rol: ["rol1", "rol2"]
        },
        filepath: "/path/to/file"
    }
];

export const FileRows = () => {
    const [showUpload, setShowUpload] = useState(false)

    const toogleShowUpload = () => {
        setShowUpload(!showUpload)
    }

    return (
        <div className='file'>
            <div className="files-header">
                MEETING TITLE
            </div>
            {showUpload && <UploadFile toogleShowUpload={toogleShowUpload}/>}
            <div className="files-container">
                {fileExample.map((file, index) => (
                    <FileRow
                        key={index}
                        data={{
                            filename: file.filename,
                            meetingId: file.meetingData.meetingId,
                            rol: file.meetingData.rol,
                            filepath: file.filepath
                        }}
                    />
                ))}
            </div>
            <div className="upload-file-container">
                <div className="row">
                    <div className="files-new-file" onClick={toogleShowUpload}>
                        UPLOAD FILE
                    </div>
                </div>
            </div>
        </div>
    )
}
