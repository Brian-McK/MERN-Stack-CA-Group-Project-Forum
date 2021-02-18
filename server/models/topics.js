const mongoose = require("mongoose");

let commentsSchema = new mongoose.Schema({
  topicCommentAuthor: { type: String, required: true },
  topicComment: {type: String, required: true },
  topicCommentDate: {type:Date, default:Date.now}
});

let topicsSchema = new mongoose.Schema(
  {
    topicName: { type: String, required: true },
    topicDescription: { type: String, required: true },
    topicAuthor: { type: String, required: true },
    topicDate: {type: Date, default: Date.now},
    topicComments: [commentsSchema]
  },
  {
    collection: "topics",
  });

module.exports = mongoose.model("topics", topicsSchema);
