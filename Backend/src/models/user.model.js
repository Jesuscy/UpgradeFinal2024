const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  /* rol: [{type:String}], el usuario no tiene rol principal, sino que va pòr meetings
   */
  meetings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Metting' }] 

});

const User = mongoose.model('User',userSchema,'users');

module.exports = User