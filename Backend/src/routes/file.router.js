const express = require("express");
const fileRouter = express.Router();
const {getFilesByMeeting, createFile} = require('../controllers/file.controller')
const {upload} = require('../middleware/upload.file');

fileRouter.post("/files", getFilesByMeeting);
fileRouter.post("/upload",createFile);


module.exports = fileRouter;
