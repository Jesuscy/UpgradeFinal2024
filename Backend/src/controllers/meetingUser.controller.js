const MeetingUser = require('../models/meetingUser.model')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')

const getMeetingUsers = async (req, res) => {
    try {
        const { meetingId } = req.body;
        const meetingUsers = await MeetingUser.find({ meetingId }).populate('userId');        
        return res.status(201).json(meetingUsers)
    } catch (error) {
        return res.status(500).json({message: 'Error fetching users'})
    }
}

const getMeetingUserById = async (req, res) => {
    try {
        const { userId } = req.body
        const meetingUser = await MeetingUser.find({ userId }).populate('userId');        
        if (!meetingUser) {
            return res.status(201).json(meetingUser)
        }
        return meetingUser
    } catch (error) {
        return res.status(500).json({message: 'Error fetching user'})
    }
}
const createMeetingUser = async (meetingId,userId,roles) => {
    try {
        const newMeetingUser = new MeetingUser({ meetingId, userId, roles })
        await newMeetingUser.save()
        return newMeetingUser
    } catch (error) {
        return 'Error creating meeting user', error
    }
}

const deleteMeetingUser = async (userId) => {
    try {
        const meetingUser = await MeetingUser.findByIdAndDelete(userId)
        if (!meetingUser) {
            return 'Meeting user not found' 
        }
        return "Meeting user deleted"
    } catch (error) {
        return 'Error deleting meeting user'
    }
}

const updateMeetingUser = async (req, res) => {
    try {
        const { userId,roles } = req.body
        const meetingUser = await MeetingUser.findByIdAndUpdate(userId, { roles }, { new: true })
        if (!meetingUser) {
            return 'Meeting user not found' 
        }
        return meetingUser
    } catch (error) {
        return 'Error updating meeting user'
    }
}
  
  module.exports = {getMeetingUsers, getMeetingUserById, createMeetingUser, deleteMeetingUser, updateMeetingUser}