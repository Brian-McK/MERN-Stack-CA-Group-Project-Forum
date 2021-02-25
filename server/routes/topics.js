const router = require("express").Router();

const topicsModel = require("../models/topics");
const topicCommentsModel = require("../models/topicComments");

router.post("/topics/topic/:id/comments", async (req, res) => {
  // find out which topic you are commenting
  const topicId = req.params.id;
  // get the comment text and topic reference
  const comment = new topicCommentsModel({
    topicCommentAuthor: req.body.topicCommentAuthor, 
    topicComment: req.body.topicComment,
    topicRef: topicId,
  });
  // save comment
  await comment.save();
  // get this particular topic
  const topic = await topicsModel.findById(topicId);
  // push the comment into the topicComments array
  topic.topicComments.push(comment);
  // save and redirect...
  await topic.save(function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

// Read one record
// router.get("/topics/topic/:id/comments", (req, res) => {
//   topicsModel.findById(req.params.id, (error, data) => {
//     res.json(data);
//   });
// });


// read all comments for a topic
router.get("/topics/topic/:id/comments", (req, res) => {
  topicCommentsModel.find({topicRef :req.params.id}, (error, data) => {
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

// Add new record
router.post("/topics/", (req, res) => {
  topicsModel.create(req.body, (error, data) => {
    res.json(data);
  });
});

// Update one record
router.put("/topics/:id", (req, res) => {
  topicsModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      res.json(data);
    }
  );
});

// Delete one record
router.delete(`/topics/:id`, (req, res) => {
  topicsModel.findByIdAndRemove(req.params.id, (error, data) => {
    res.json(data);
  });
});

module.exports = router;
