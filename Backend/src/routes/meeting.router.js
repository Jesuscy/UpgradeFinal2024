const express = require("express")
const meetingRouter = express.Router()
const {getMeeting, getMeetings, createMeeting, addUserMeeting, deleteMeeting, getUserMeetings, getMeetingUsers, editMeeting, delUserMeeting, addRoleToMeetingUser, delRoleFromMeetingUser} = require('../controllers/meeting.controller')

meetingRouter.get('/meeting',getMeeting)
meetingRouter.get('/meetings',getMeetings)
meetingRouter.get('/meetings/userId', getUserMeetings)
meetingRouter.get('/meetingId/users', getMeetingUsers)
meetingRouter.post('/create', createMeeting)
meetingRouter.post('/add/user', addUserMeeting)
meetingRouter.post('/delete/user',delUserMeeting)
meetingRouter.post('/add/rol', addRoleToMeetingUser)
meetingRouter.post('/delete/rol',delRoleFromMeetingUser)
meetingRouter.post('/delete', deleteMeeting)
meetingRouter.put('/edit',editMeeting)




module.exports = meetingRouter