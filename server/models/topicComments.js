const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicCommentsSchema = new Schema(
    {
      topicRef: {type: mongoose.Schema.Types.ObjectId, ref: "topics" },
      topicCommentAuthor: { type: String, default: "Test" },
      topicComment: { type: String },
      topicCommentDate: { type: Date, default: Date.now },
    },
    {
      collection: "topicComments",
    }
  );
  
  module.exports = mongoose.model("topicComments", topicCommentsSchema);

// {
//     "topicCommentAuthor": "Johnny",
//     "topicComment": "Hey this is Johnny"
// }