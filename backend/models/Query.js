const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuerySchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
});
const query = mongoose.model("query", QuerySchema);
module.exports = query;
