const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: {
    type: String
    },
  meetingData: {
    meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "Meeting" },
    rol: [{ type: String, required: true }],
  },
  filepath :{
    type: String

  }
});

const File = mongoose.model("File", fileSchema, "files");
module.exports = File;
