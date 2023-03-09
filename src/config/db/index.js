const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/daika");
    console.log("Successfully");
  } catch (error) {
    console.log("Failure");
  }
}
module.exports = { connect };
