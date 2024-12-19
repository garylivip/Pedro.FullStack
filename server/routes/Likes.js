const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const verifyToken = require("../middlewares/AuthMiddleware");

router.get("/", (req, res) => {
  Likes.findAll()
    .then((likes) => {
      res.status(200).send(likes);
    })
    .catch((error) => {
      res.status(500).send("Error: " + error.message);
    });
});

router.post("/", verifyToken, (req, res) => {
  const like = req.body; // { PostId: 1 }
  like.UserId = req.user.id;

  Likes.create(like)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      res.status(500).send("Error creating like: " + error.message);
    });
});

module.exports = router;
