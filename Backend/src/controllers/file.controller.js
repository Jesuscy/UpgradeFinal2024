const File = require("../models/file.model");
const HTTPSTATUSCODE = require('../utils/httpStatusCode');
const mongoose = require("mongoose");


const getFilesByMeeting = async (req, res) => {
    try {
        const meetingId = req.body
        const objectId = mongoose.Types.ObjectId(meetingId)

        const files = await File.find({ 'meetingData.meetingId': objectId })
        if (files.length === 0) {
            return res.status(404).json({ message: 'No files found for this meeting' });
        }

        return res.status(200).json({ files });

    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving files' })
    }
}

/* const createFile = async (req, res, next) => {
    const {filename, meetingId, rol} = req.body
    console.log(filename, meetingId, rol)
    try {
        const {filename, meetingId, rol} = req.body
        const file = new File(
            {
                filename: filename,
                meetingData: {
                    meetingId: meetingId,
                    rol:rol
                } 

            }
        )
        if(req.file){
            file.filepath = req.file.path
        }


      
        file.save()
        return res.status(201).json(file)
    }
    catch (error) {
        return res.status(500).json({ message: 'Error creating file' })

    }
} */
    const createFile = async (req, res, next) => {
        try {
            // Verificar si se cargó un archivo
            if (!req.file) {
                return res.status(400).json({ message: 'No se proporcionó un archivo' });
            }
    
            // Obtener la URL del archivo en Cloudinary desde req.file.path
            const filePath = req.file.path;
    
            // Crear una nueva entrada en la base de datos para el archivo
            const newFile = new File({
                filename: req.body.filename,
                meetingData: {
                    meetingId: req.body.meetingId,
                    rol: JSON.parse(req.body.rol)
                },
                filepath: filePath // URL del archivo en Cloudinary proporcionada por multer
            });
    
            // Guardar la nueva entrada en la base de datos
            await newFile.save();
    
            // Devolver una respuesta al cliente
            return res.status(201).json(newFile);
        } catch (error) {
            // Manejar cualquier error
            console.error('Error creando archivo:', error);
            return res.status(500).json({ message: 'Error creando archivo' });
        }
    };

module.exports = { getFilesByMeeting, createFile }