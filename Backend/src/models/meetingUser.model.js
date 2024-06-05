const mongoose = require("mongoose");

const meetingUserSchema = new mongoose.Schema({

  meetingId: {type: mongoose.Schema.Types.ObjectId, ref: 'Meeting'},
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  roles:[{type: String}]
  
})

const MeetingUser = mongoose.model('MeetingUser',meetingUserSchema,'meetingUsers');

module.exports = {meetingUserSchema,MeetingUser}
