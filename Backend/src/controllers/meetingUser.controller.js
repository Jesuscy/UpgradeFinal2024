const {MeetingUser} = require('../models/meetingUser.model')
const User = require('../models/user.model')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')
const mongoose = require('mongoose')


const getMeetingUsers = async (req, res) => {
  try {
      const { meetingId } = req.body;
      const meetingUsers = await MeetingUser.find({ meetingId: meetingId })
      return res.status(200).json(meetingUsers);
  } catch (error) {
      return res.status(500).json({ message: 'Error fetching users' });
  }
}
const getUserMeetings = async (req, res) => {
  try {
    const { userId } = req.body
    const userMeetings = await MeetingUser.find({ userId: userId }).populate('meetingId').populate('userId');
    return res.status(200).json(userMeetings)
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching meetings' })
  }

}

const getMeetingUserById = async (req, res) => {
  try {
    const { userId } = req.body
    const meetingUser = await MeetingUser.findOne({ userId }).populate('userId')
    if (!meetingUser) {
      return res.status(404).json({ message: 'Meeting user not found' })
    }
    return res.status(200).json(meetingUser)
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching user' })
  }
}

const createMeetingUser = async (meetingId, userId, roles) => {
  try {
    const newMeetingUser = new MeetingUser({ meetingId, userId, roles })
    await newMeetingUser.save()
    return newMeetingUser
  } catch (error) {
    return { message: 'Error creating meeting user', error }
  }
}

const deleteMeetingUser = async (meetingId, userId) => {
  try {
    const meetingUser = await MeetingUser.findOneAndDelete({ userId: userId, meetingId : meetingId})
    console.log(meetingUser)
    if (meetingUser.length === 0) {
      return { message: 'Meeting user not found' }
    }
    return { message: 'Meeting user deleted' }
  } catch (error) {
    return { message: 'Error deleting meeting user' }

  }
}

const updateMeetingUser = async (req, res) => {
  try {
    const { userId, roles } = req.body
    const meetingUser = await MeetingUser.findOneAndUpdate({ userId }, { roles }, { new: true })
    if (!meetingUser) {
      return res.status(404).json({ message: 'Meeting user not found' })
    }
    return res.status(200).json(meetingUser)
  } catch (error) {
    return res.status(500).json({ message: 'Error updating meeting user' })
  }
}

module.exports = { getMeetingUsers, getUserMeetings, getMeetingUserById, createMeetingUser, deleteMeetingUser, updateMeetingUser }