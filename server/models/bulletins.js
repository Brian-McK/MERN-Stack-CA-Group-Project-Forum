const mongoose = require("mongoose");

let bulletinsSchema = new mongoose.Schema(
  {
    bulletinName: { type: String, required: true },
    bulletinDescription: { type: String, required: true },
    bulletinAuthor: { type: String, required: true },
    bulletinDate: {type: Date, default: Date.now}
  },
  {
    collection: "bulletins",
  });

module.exports = mongoose.model("bulletins", bulletinsSchema);