import React from 'react'
import '../../styles/FileRowStyles.css'
export const UploadFile = () => {
    return (
        <div className='upload-file'>
            <div className="row"><h2>UPLOAD NEW FILE</h2></div>
                <div className="file-name-placeholder">
                    FileName-example
                </div>
            <div className='row'><button>select file</button></div>
            <div className='row'><button>upload</button></div>


        </div>
    )
}
