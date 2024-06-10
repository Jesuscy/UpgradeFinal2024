import React from 'react'
import '../../styles/MeetingRowStyles.css'

export const MeetingRows = () => {
    return (
        <div className='meeting'>
            <div className="meetings-header">
                MEETING TITLE
            </div>
            <div className="meetings-container">
                {files.map((file, index) => (
                    <FileRow
                        key={index}
                        data={{
                            filename: file.filename,
                            meetingId: file.meetingData.meetingId,
                            rol: file.meetingData.rol,
                            filepath: file.filepath,
                            extension: getFileExtension(file.filepath)
                        }}
                    />
                ))}
            </div>

        </div>
    )
}
