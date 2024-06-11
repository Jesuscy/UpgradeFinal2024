const express = require("express")
const meetingUserRouter = express.Router()
const {getMeetingUsers, getUserMeetings, getMeetingUserById, getUserRoles} = require('../controllers/meetingUser.controller')

meetingUserRouter.post('meetingUser/id', getMeetingUserById)
meetingUserRouter.post('/meetingId/users', getMeetingUsers)
meetingUserRouter.post('/userId/meetings',getUserMeetings)
meetingUserRouter.post('/userId/roles',getUserRoles)



module.exports = meetingUserRouter