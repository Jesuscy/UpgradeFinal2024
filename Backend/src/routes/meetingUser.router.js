const express = require("express")
const meetingUserRouter = express.Router()
const {getMeetingUsers , getUserMeetings} = require('../controllers/meetingUser.controller')

meetingUserRouter.post('/meetingId/users', getMeetingUsers)
meetingUserRouter.post('/userId/meetings', getUserMeetings)



module.exports = meetingUserRouter