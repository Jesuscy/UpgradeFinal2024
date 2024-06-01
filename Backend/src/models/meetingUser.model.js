const mongoose = require("mongoose");

const meetingUserSchema = new mongoose.Schema({

  meetingId: {type: mongoose.Schema.Types.ObjectId, ref: 'Meeting'},
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  roles:[{type: String}]
  
})


module.exports = meetingUserSchema