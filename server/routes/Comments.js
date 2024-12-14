const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const verifyToken = require("../middlewares/AuthMiddleware");

router.post("/", verifyToken, (req, res) => {
  const comment = req.body;
  Comments.create(comment)
    .then(() => {
      res.status(201).send("Comment created successfully");
    })
    .catch((error) => {
      res.status(500).send("Error creating post: " + error.message);
    });
});

router.get("/:postId", (req, res) => {
  const postId = req.params.postId;
  Comments.findAll({ where: { PostId: postId } })
    .then((comments) => {
      res.json(comments);
    })
    .catch((error) => {
      res.status(500).send("Error retrieving comments: " + error.message);
    });
});

module.exports = router;
