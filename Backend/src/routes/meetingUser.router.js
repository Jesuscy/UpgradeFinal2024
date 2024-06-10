const express = require("express")
const meetingUserRouter = express.Router()
const {getMeetingUsers} = require('../controllers/meetingUser.controller')

/* meetingUserRouter.post('/meetingId/users', getMeetingUsers) */



module.exports = meetingUserRouter