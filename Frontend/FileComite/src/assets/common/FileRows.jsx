import React, { useEffect, useState } from 'react';
import '../../styles/FileRowStyles.css';
import { FileRow } from './FileRow';
import { Link } from 'react-router-dom';
import { UploadFile } from './UploadFile';
import axios from 'axios'

const getFileExtension = (url) => {
    const match = url.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
    if (match) {
        return match[1];
    }
    return null;
}

export const FileRows = (props) => {
const data = props.data
const title = data.title
const [files, setFiles] = useState([])
const [showUpload, setShowUpload] = useState(false)
const meetingId = data.meetingId
const meetingRoles = data.meetingRoles
const userRoles = data.userRoles

const getFiles = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:3333/file/files', { meetingId })
        
        if (meetingRoles) {
            const allFiles = response.data.files
            const filteredFiles = allFiles.filter(file => {
                return userRoles.some(role => file.meetingData.rol.includes(role));
            })
            setFiles(filteredFiles);
        } else {
            setFiles(response.data.files);
        }
    } catch(error) {
        console.error('Error fetching files:', error)
    }
}

useEffect(()=>{
    getFiles()
},[userRoles])

const toogleShowUpload = () => {
    setShowUpload(!showUpload)
    getFiles()
}

    return (
        <div className='file'>
            <div className="files-header">
                {title}
            </div>
            {showUpload && <UploadFile data={{meetingId, userRoles}} toogleShowUpload={toogleShowUpload}/>}
            <div className="files-container">
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
            <div className="upload-file-container">
                <div className="row">
                    <div className="files-new-file" onClick={toogleShowUpload}>
                        UPLOAD FILE
                    </div>
                    
               </div>
               <div className="box__meetings-back" onClick={toogleShowUpload}>
                    <button className='meetings-back__button'>BACK</button>
                </div>
            </div>
        </div>
    )
}
