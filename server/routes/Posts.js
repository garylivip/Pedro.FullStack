const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  await Posts.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      res.status(500).send("Error retrieving posts: " + error.message);
    });
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post)
    .then(() => {
      res.json(post); //   res.status(201).send("Post created successfully");
    })
    .catch((error) => {
      res.status(500).send("Error creating post: " + error.message);
    });
});

module.exports = router;
