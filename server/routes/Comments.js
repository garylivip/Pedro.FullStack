const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const verifyToken = require("../middlewares/AuthMiddleware");
const { route } = require("./Users");

router.post("/", verifyToken, (req, res) => {
  const comment = req.body;
  comment.username = req.user.username;
  Comments.create(comment)
    .then((result) => {
      res.status(201).send(result);
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

router.delete("/:commentId", verifyToken, (req, res) => { 
  const commentId = req.params.commentId;
  Comments.findByPk(commentId)
    .then((comment) => {
      if (!comment) {
        res.status(404).send("Comment not found");
      } else if (comment.username !== req.user.username) {
        res.status(403).send("You can only delete your own comments");
      } else {
        comment.destroy();
        res.status(200).send("Comment deleted");
      }
    })
    .catch((error) => {
      res.status(500).send("Error deleting comment: " + error.message);
    });
});

module.exports = router;
