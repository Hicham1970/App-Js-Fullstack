const express = require("express");
const router = express.Router();

//to get response

router.get("/", (req, res) => {
  res.json({ message: "Here the data" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Here the data for the id: " + req.params.id });
});

// to get requests
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message + " " + req.body.author });
});

// to make updates:

router.put("/:id", (req, res) => {
  res.json({
    messageId: req.params.id,
    message: req.body.message + " " + req.body.author,
  });
});

// to delete:
router.delete("/:id", (req, res) => {
  res.json({
    messageId: req.params.id,
    message: "the post " + " " + req.params.id + " was deleted",
  });
});

// to know how many likes a post:
router.patch("/like-post/:id", (req, res) => {
  res.json({
    message: "the post " + " " + req.params.id + " has been liked ",
  });
});


/*fOqEuCtvky2g3NRF*/
/**hgaroum */


// to know how many dislikes:
router.patch("/dislike-post/:id", (req, res) => {
  res.json({
    message: " the post " + " " + req.params.id + " has been disliked ",
  });
});

module.exports = router;
