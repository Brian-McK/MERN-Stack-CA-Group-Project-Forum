const router = require("express").Router();

const topicsModel = require("../models/topics");
const topicCommentsModel = require("../models/topicComments");

// push a comment to an array in a specific topic, and create a new comment in the comments table
router.post("/topics/topic/:id/comments", (req, res) => {
  // get topic id
  const topicId = req.params.id;
  // create a comment
  const newComment = new topicCommentsModel({
    topicRef: topicId,
    topicCommentAuthor: req.body.topicCommentAuthor,
    topicComment: req.body.topicComment,
  });
  // save the comment to the topicComments collection
  newComment.save();
  // find topic by the id and push the comments into the topicComments array
  topicsModel.findByIdAndUpdate(
    topicId,
    { $push: { topicComments: newComment } },
    (error, data) => {
      res.json(data);
    }
  );
});

// // find topic and update author
// router.put("/topics/topic/:id/", (req, res) => {
//   // get topic id
//   const topicId = req.params.id;
//   topicsModel.findByIdAndUpdate(
//     topicId,
//     { $set:{topicAuthor: "David"}},
//     (error, data) => {
//     res.json(data);
//     });
// });

// Read one record
// router.get("/topics/topic/:id/comments", (req, res) => {
//   topicsModel.findById(req.params.id, (error, data) => {
//     res.json(data);
//   });
// });

// read all comments for a topic
router.get("/topics/topic/:id/comments", (req, res) => {
  topicCommentsModel.find({ topicRef: req.params.id }, (error, data) => {
    res.json(data);
  });
});

// read all records
router.get("/topics/", (req, res) => {
  topicsModel.find((error, data) => {
    res.json(data);
  });
});

// Read one record
router.get("/topics/topic/:id", (req, res) => {
  topicsModel.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

// Add new topic
router.post("/topics/", (req, res) => {
  topicsModel.create(req.body, (error, data) => {
    res.json(data);
  });
});

// Update one topic
router.put("/topics/:id", (req, res) => {
  topicsModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      res.json(data);
    }
  );
});

// Delete one topic
router.delete(`/topics/:id`, (req, res) => {
  topicsModel.findByIdAndRemove(req.params.id, (error, data) => {
    res.json(data);
  });
});

module.exports = router;
