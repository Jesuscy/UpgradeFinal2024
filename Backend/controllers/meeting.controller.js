const Meeting = require('../models/meeting.model')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')

//Obtener Meeting
const getMeeting = async (req, res, next) => {
    try {
        const meetingName = req.body
        const meeting = await Meeting.findOne({ meetingName: meetingName })
        if (meeting) {
            res.status(200).json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                meeting: meeting
            })
        }
    }
    catch (error) {
        next(error)
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

    //Obtener todos los meetings
    const getMeetings = async (req, res, next) => {
        try {
            const meetings = await Meeting.find()
            if (meetings) {
                res.status(200).json({
                    status: 200,
                    message: HTTPSTATUSCODE[200],
                    meeting: meetings
                })
            }
        }
        catch (error) {
            next(error)
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message
            })
        }
    }

        //Obtener meetings del user
    const getUserMeetings = async (req, res, next) => {
        try {
            const userId = req.body
            const meetings = await Meeting.find({ meetingUsers: userId })
            if (meetings) {
                res.status(200).json({
                    status: 200,
                    message: "User Meetings",
                    meetings: meetings
                })
            }
        }
        catch (error) {
            next(error)
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message
            })
        }
    }

    //Añadir user al meeting.
    const addUserMeeting = async (req, res, next) => {
        try {
            const { meetingId, userId, roles } = req.body;
    
            const meetingToMod = await Meeting.findById(meetingId);
            if (!meetingToMod) {
                return res.status(404).json({ message: 'Meeting id not found' });
            }
    
            const userExists = meetingToMod.meetingUsers.some(user => user.userId.toString() === userId);
            if (!userExists) {
                meetingToMod.meetingUsers.push({userId,roles});
            }
    
            await meetingToMod.save();
    
            return res.status(200).json({ meetingToMod });
        } catch (error) {
            return res.status(500).json({ message: 'Error adding user to meeting', error });
        }
    }

    //Eliminar user de meeting.
    const delUserMeeting = async (req, res, next) => {
        try {
            const { meetingId, userId } = req.body;
    
            const meetingToMod = await Meeting.findById(meetingId);
            if (!meetingToMod) {
                return res.status(404).json({ message: 'Meeting id not found' });
            }
    
            meetingToMod.meetingUsers = meetingToMod.meetingUsers.filter(user =>{user.userId.toString() != userId})
    
            await meetingToMod.save();
    
            return res.status(200).json({ meetingToMod });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting user from meeting', error });
        }
    }

    //Obtener users del meetings 
    const getMeetingUsers = async (req, res, next) => {
        try {
            const meetingId = req.params.meetingId;
            const meeting = await Meeting.findById(meetingId);
            if (meeting) {
                res.status(200).json({
                    status: 200,
                    message: "Meeting Users",
                    users: meeting.meetingUsers
                });
            } else {
                res.status(404).json({
                    status: 404,
                    message: "Meeting not found"
                });
            }
        } catch (error) {
            next(error);
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message
            });
        }
    }

    module.exports = {getMeeting, getMeetings, getUserMeetings, getMeetingUsers, addUserMeeting , delUserMeeting }
