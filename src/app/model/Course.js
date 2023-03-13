const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, default: "" },
    disc: { type: String, default: "" },
    img: { type: String, default: "" },
    videoId: { type: String, default: "" },
    slugId: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("Course", Course);
