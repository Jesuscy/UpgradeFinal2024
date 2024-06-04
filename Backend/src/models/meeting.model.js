const mongoose = require("mongoose");
const {meetingUserSchema} = require('./meetingUser.model')
  const meetingSchema = new mongoose.Schema({
    meetingName: {
      type: String,
      require: true,
      unique: true,
    },
    meetingPath: {
      type: String,
      require: true,
      unique: true,
    },
    meetingRoles: [{ type: String }],
    meetingUsers: [meetingUserSchema]
  });


  const Meeting = mongoose.model('Meeting',meetingSchema,'meetings');

  

meetingSchema.methods.addRoleToUser = async (userId, rol) =>{
  const user = await meetingUserSchema.find(meetingUser => meetingUser.userId.toString() === userId.toString())
  if (user) {
      if (!user.roles.inclundes(rol)) {
          user.roles.push(rol)
          await user.save()
      }
      else {
        throw new Error('User already have this rol');
      }
  } else {
    throw new Error('User not found');

  }
}

meetingSchema.methods.removeRoleFormUser = async (userId, rol) =>{
  const user = await meetingUserSchema.find(meetingUser => meetingUser.userId.toString() === userId.toString())
  if (user) {
      const roleIndex = user.roles.indexOf(rol)
      if (roleIndex > -1) {
        user.roles.splice(roleIndex, 1)
        await this.save()
      }
      else {
        throw new Error('User not using this rol');
      }
  } else {
    throw new Error('User not found');

  }

}

  module.exports = Meeting