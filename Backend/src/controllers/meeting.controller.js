const Meeting = require('../models/meeting.model')
const meetingRouter = require('../routes/meeting.router')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')
const mongoose = require('mongoose')

const { createMeetingUser, deleteMeetingUser, updateMeetingUser } = require('./meetingUser.controller')
const { MeetingUser } = require('../models/meetingUser.model')
//Obtener Meeting
const getMeeting = async (req, res, next) => {
    try {
        const meetingId = req.body
        const meeting = await Meeting.findById(meetingId)
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

//Crear Meeting
const createMeeting = async (req, res, next) => {
    try {
        const { name, roles, users } = req.body
        /*   const existingMeeting = await Meeting.find({ meetingName: name })
             if (existingMeeting != null) {
            return res.status(400).json({
                status: 400,
                message: "Meeting name already registered"
            })
        } */
        const meeting = new Meeting({
            meetingName: name,
            meetingRoles: roles,
            meetingUser: users
        })
        meeting.save()
        res.status(201).json({
            status: 201,
            message: "Meeting successfully created",
            meeting: meeting
        })
    }
    catch (error) {
        next(error)
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }
}


//Borrar meeting
const deleteMeeting = async (req, res, next) => {
    try {
        const meetingId = req.body

        const deletedMeeting = await Meeting.findByIdAndDelete(meetingId);

        if (deletedMeeting) {
            res.status(200).json({
                status: 200,
                message: "Meeting successfully deleted"
            })
        } else {
            res.status(404).json({
                status: 404,
                message: "Meeting not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

//Editar Meeting
const editMeeting = async (req, res, next) => {
    try {
        const id = req.params.id
        const editMeeting = new Meeting(req.body)
        editMeeting._id = id
        const updatedMeeting = await Meeting.findByIdAndUpdate(id, editMeeting)
        if (!updatedMeeting) {
            return res.status(404).json({ message: 'Meeting id not found' })
        }
        return res.status(200).json({ updatedMeeting })
    }
    catch (error) {
        return res.status(500).json(error);

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
        const { meetingId, userId, roles } = req.body

        const meetingToMod = await Meeting.findById(meetingId)
        if (!meetingToMod) {
            return res.status(404).json({ message: 'Meeting id not found' })
        }
        const userExists = meetingToMod.meetingUsers.some(user => user.userId.toString() === userId)

        if (userExists) {
            return res.status(400).json({ message: 'User already in the meeting' })
        }
        //Creo Objeto con la estructura de meetingUser y lo sumo al array


        const newMeetingUserOrError = await createMeetingUser(meetingId, userId, roles)
        if (typeof newMeetingUserOrError === 'string') {
            return res.status(500).json({ message: newMeetingUserOrError })
        }
        // Si newMeetingUserOrError es un objeto MeetingUser, lo agregamos al array
        meetingToMod.meetingUsers.push(newMeetingUserOrError);
        console.log(meetingToMod.meetingUsers)
        await meetingToMod.save();
        return res.status(200).json({ meetingToMod })
    } catch (error) {
        return res.status(500).json({ message: 'Error adding user to meeting', error })
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
        meetingToMod.meetingUsers = meetingToMod.meetingUsers.filter(user => user.userId.toString() != userId)
        console.log(meetingToMod.meetingUsers)
        await deleteMeetingUser(meetingId, userId)
        await meetingToMod.save();

        return res.status(200).json({ meetingToMod });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting user from meeting', error });
    }
}

//Obtener users del meetings 
const getMeetingUsers = async (req, res) => {
    try {
        const { meetingId } = req.body;

        const meeting = await Meeting.findById(meetingId).populate({
            path: 'meetingUsers.userId',
            model: 'User'
        })

        const users = await MeetingUser.find({ meetingId: meetingId }).populate('userId')
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' })
        }

        res.json({
            meeting,
            meetingUsers: users
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Añadir un rol a usuario.
const addRoleToMeetingUser = async (req, res) => {
    try {
        const { meetingId, userId, rol } = req.body
        const meeting = await Meeting.findById(meetingId)
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' })
        }
        const user = meeting.meetingUsers.find(user => user.userId.toString() === userId)
        if (user) {
            const userDB = await MeetingUser.findOne({ userId, meetingId })
            const findRole = await userDB.roles.find(role => role === rol)
            if (findRole) {
                return res.status(400).json({ message: 'Role already assigned' })
            }
            if (!findRole) {
                await user.roles.push(rol)
                await meeting.save()
                await MeetingUser.findOneAndUpdate({ userId, meetingId }, { $push: { roles: rol }, new: true })
                return res.status(200).json({ message: 'Role successfully added.' })
            }
        } else {
            return res.status(404).json({ message: 'User not found in meeting' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error adding role', error })
    }
}

// Eliminar un rol de usuario.
const delRoleFromMeetingUser = async (req, res) => {
    try {
        const { meetingId, userId, rol } = req.body
        const meeting = await Meeting.findById(meetingId)
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' })
        }
        const user = meeting.meetingUsers.find(user => user.userId.toString() === userId)
        if (user) {
            user.roles = user.roles.filter(role => role !== rol)
            await meeting.save()
            return res.status(200).json({ message: 'Role successfully deleted.' })
        } else {
            return res.status(404).json({ message: 'User not found in meeting' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting role', error })
    }
}


module.exports = { getMeeting, getMeetings, createMeeting, deleteMeeting, editMeeting, getUserMeetings, getMeetingUsers, addUserMeeting, delUserMeeting, addRoleToMeetingUser, delRoleFromMeetingUser }