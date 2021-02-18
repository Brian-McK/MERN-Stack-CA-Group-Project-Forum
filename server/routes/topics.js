const router = require("express").Router();

const topicsModel = require("../models/topics");

// read all records
router.get("/topics/", (req, res) => {
  topicsModel.find((error, data) => {
    res.json(data);
  });
});

// Read one record
router.get("/topics/get_topic/:id", (req, res) => {
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
