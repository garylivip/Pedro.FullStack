const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.post("/", (req, res) => {
  const comment = req.body;
  Comments.create(comment)
    .then(() => {
      res.status(201).send("Post created successfully");
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
