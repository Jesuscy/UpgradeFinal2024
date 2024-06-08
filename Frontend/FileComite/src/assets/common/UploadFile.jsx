import React, { useRef, useState } from 'react';
import axios from 'axios'
import '../../styles/UploadFileStyles.css';

export const UploadFile = (props) => {

    const { toogleShowUpload } = props
    const fileInputRef = useRef(null)
    //UseState para guardar el archivo seleccionado.
    const [selectedFile, setSelectedFile] = useState(null)

    const handleButtonClick = () => {
        fileInputRef.current.click()
    };

    //Selecciono el archivo elegido.
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file)
        if (file) {
            console.log(file)
            console.log(`Selected file: ${file.name}`)
        }
    }

    //Hago la petición a subir el archivo.
    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert('First select a file.')
            return
        }
        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            axios.post('http://127.0.0.1:3333/file/upload', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }})

        }
        catch(error){
            
        }



    }

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
