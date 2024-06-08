import React, { useRef } from 'react';
import '../../styles/UploadFileStyles.css';

export const UploadFile = (props) => {

    const { toogleShowUpload } = props;
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          console.log(`Selected file: ${file.name}`);
        }
    };

    return (
        <div className="upload-modal-overlay">
            <div className="upload-file">
                <div className="row"><h2>UPLOAD NEW FILE</h2></div>
                <div className="file-name-placeholder">
                    FileName-example
                </div>
                <div className="row">
                    <button onClick={handleButtonClick}>Select file</button>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="row"><button>Upload</button></div>
                <div className="row close"><button onClick={toogleShowUpload}>Close</button></div>
            </div>
        </div>
    );
};
