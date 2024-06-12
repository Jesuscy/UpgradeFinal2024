import React, { useEffect, useState } from 'react';
import '../../styles/FileRowStyles.css';
import { FileRow } from './FileRow';
import { useNavigate } from "react-router-dom";
import { UploadFile } from './UploadFile';
import axios, { all } from 'axios';

const getFileExtension = (url) => {
    const match = url.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
    if (match) {
        return match[1];
    }
    return null;
};

export const FileRows = (props) => {
    const data = props.data;
    const title = data.title;
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [showUpload, setShowUpload] = useState(false);
    const meetingId = data.meetingId;
    const meetingRoles = data.meetingRoles;
    const userRoles = data.userRoles;

    const getFiles = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:3333/file/files', { meetingId });

            if (meetingRoles) {
                console.log(meetingRoles)
                const allFiles = response.data.files;
                console.log(allFiles)
                const filteredFiles = allFiles.filter(file => {
                    return userRoles.some(role => file.meetingData.rol.includes(role));
                });
                setFiles(filteredFiles);
                console.log(filteredFiles)
            } else {
                setFiles(response.data.files);
            }
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    useEffect(() => {
        getFiles();
    }, [userRoles]);

    const toggleShowUpload = () => {
        setShowUpload(!showUpload);
        getFiles();
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className='file'>
            <div className="files-header">
                {title}
            </div>
            {showUpload && <UploadFile data={{ meetingId, userRoles }} toggleShowUpload={toggleShowUpload} />}
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
                    <div className="files-new-file" onClick={toggleShowUpload}>
                        UPLOAD FILE
                    </div>
                </div>
            </div>
            <div className="box__meetings-back">
                <button className='meetings-back__button' onClick={handleBackClick}>BACK</button>
            </div>
        </div>
    );
};
