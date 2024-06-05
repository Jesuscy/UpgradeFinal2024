import React from 'react'
import '../../styles/FileRowStyles.css'
import { FileRow } from './FileRow'

const fileExample = [{
    filename: "prueba",
    meetingData: {
        meetingId: "12345",
        rol: ["rol1","rol2"]
    },
    filepath: "/path/to/file"
},
{
    filename: "prueba",
    meetingData: {
        meetingId: "12345",
        rol: ["rol1","rol2"]
    },
    filepath: "/path/to/file"
}]


export const FileRows = () => {
  return (
    <div>
        <div className="files-container">
            {fileExample.map((file) =>(
            <FileRow data={{
                filename: file.filename,
                meetingId: file.meetingData.meetingId,
                rol: file.meetingData.rol,
                filepath: file.filepath
            }
            }/>

            ))}
        </div>
        
    </div>
  )
}
