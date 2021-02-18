const router = require("express").Router();

const bulletinsModal = require("../models/bulletins");

// read all records
router.get("/bulletins/", (req, res) => {
  bulletinsModal.find((error, data) => {
    res.json(data);
  });
});

// Read one record
router.get("/bulletins/:id", (req, res) => {
  bulletinsModal.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

// Add new record
router.post("/bulletins/", (req, res) => {
  bulletinsModal.create(req.body, (error, data) => {
    res.json(data);
  });
});

// Update one record
router.put("/bulletins/:id", (req, res) => {
  bulletinsModal.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      res.json(data);
    }
  );
});

// Delete one record
router.delete(`/bulletins/:id`, (req, res) => {
  bulletinsModal.findByIdAndRemove(req.params.id, (error, data) => {
    res.json(data);
  });
});

module.exports = router;