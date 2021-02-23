const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicsSchema = new Schema(
  {
    topicName: { type: String, required: true },
    topicDescription: { type: String, required: true },
    topicAuthor: { type: String, default: "Admin" },
    topicDate: { type: Date, default: Date.now },
    topicComments: [{type: mongoose.Schema.Types.ObjectId, ref: 'topicComments'}]
  },
  {
    collection: "topics",
  }
);

module.exports = mongoose.model("topics", topicsSchema);

// {
//   "topicName":"I LOVE FOOTBALL",
//   "topicDescription":"FOR THE FOOTBALL LOVERS",
// }