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
