const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    default: "",
  },
  meeting_id: {
    type: String,
    required: true,
  },
  meeting_title: {
    type: String,
  },
});

module.exports = mongoose.model("Query", QuerySchema);
