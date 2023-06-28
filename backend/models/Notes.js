const mongoose = require("mongoose");
//changes done
const NotesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: [true, "Enter a valid Title"],
  },
  dateTime: {
    type: String,
    required: [true, "Enter a valid DateTime"],
  },
  location: {
    type: String,
    required: [true, "Enter a valid Location"],
  },
  description: {
    type: String,
    required: [true, "Description must be at least 6 characters long"],
  },
  speakers: {
    type: String,
    required: [true, "Enter a valid Speakers list"],
  },
  registrationInfo: {
    type: String,
    required: [true, "Enter a valid Registration Info"],
  },
  contactInfo: {
    type: String,
    required: [true, "Enter a valid Contact Info"],
  },
  additionalResources: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Notes", NotesSchema);

// title
// dateTime
// location
// description
// speakers
// registrationInfo
// contactInfo
// additionalResources
// image
