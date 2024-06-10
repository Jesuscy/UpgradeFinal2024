const File = require("../models/file.model");
const HTTPSTATUSCODE = require('../utils/httpStatusCode');
const mongoose = require("mongoose");
const cloudinary = require("../middleware/upload.file")



 const getFilesByMeeting = async (req, res) => {
    try {
        const {meetingId} = req.body

        const objectId = new mongoose.Types.ObjectId(meetingId)

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


const createFile = async (req, res, next) => {
    try {
        const { filename, meetingId, rol, file } = req.body.data;
        


        const result = await cloudinary.uploader.upload(file, {
            folder: 'Files', 
            resource_type: 'auto'
        });

        const newFile = new File({
            filename: filename,
            meetingData: {
                meetingId: meetingId,
                rol: rol
            },
            filepath: result.secure_url
        });

        newFile.save()
        return res.status(201).json(newFile);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating file' });
    }
};
module.exports = { getFilesByMeeting, createFile }