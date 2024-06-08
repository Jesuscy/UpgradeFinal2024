import React from 'react'
import '../../styles/UploadFileStyles.css'
export const UploadFile = ({toogleShowUpload}) => {

    const selectFileToUpload = () => {

    }

    const uploadNewFile = () =>{

    }


    return (
        <div className="upload-modal-overlay">
        <div className='upload-file'>
            <div className="row"><h2>UPLOAD NEW FILE</h2></div>
            <div className="file-name-placeholder">
                FileName-example
            </div>
            <div className='row'>
                <button>select file</button>
               {  <input
                    type="file"
                    style={{ display: 'none' }}  
                    onChange={uploadNewFile()}
                /> 
                }
            </div>
            <div className='row'><button>upload</button></div>
            <div className='row close'><button onClick={()=>toogleShowUpload}>close</button></div>


        </div>
        </div>
    )
}
