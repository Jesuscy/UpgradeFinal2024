const express = require("express")
const meetingRouter = express.Router()
const {getMeeting, getMeetings } = require('../controllers/meeting.controller')

meetingRouter.get('/meeting',getMeeting)
meetingRouter.get('/meetings',getMeetings)




module.exports = meetingRouter