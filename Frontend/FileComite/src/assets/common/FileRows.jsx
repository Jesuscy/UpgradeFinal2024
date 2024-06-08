import React from 'react'
import '../../styles/FileRowStyles.css'
import { FileRow } from './FileRow'

const fileExample = [{
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
}]


export const FileRows = () => {
    return (
        <div className='file'>
            <div className="file-header">
                MEETING TITLE
            </div>
            <div className="files-container">
                {fileExample.map((file) => (
                    <FileRow data={{
                        filename: file.filename,
                        meetingId: file.meetingData.meetingId,
                        rol: file.meetingData.rol,
                        filepath: file.filepath
                    }
                    } />

                ))}


            </div>
            <div className="upload-file-container">
                <div className="row">
                    <div className="files-new-file">
                        UPLOAD FILE
                    </div>
 
                </div>
            </div>
        </div>
    )
}
