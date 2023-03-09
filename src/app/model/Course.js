const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "" },
  disc: { type: String, default: "" },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);
