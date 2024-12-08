const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", (req, res) => {
 
  Posts.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      res.status(500).send("Error retrieving posts: " + error.message);
    });
});

router.post("/", (req, res) => {
  const post = req.body;
  Posts.create(post)
    .then(() => {
      res.json(post); //   res.status(201).send("Post created successfully");
    })
    .catch((error) => {
      res.status(500).send("Error creating post: " + error.message);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Posts.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(200).send("Post deleted successfully");
    })
    .catch((error) => {
      res.status(500).send("Error deleting post: " + error.message);
    });
});

module.exports = router;
