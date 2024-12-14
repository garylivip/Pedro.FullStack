const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        res.status(500).send("Error: " + error);
      });
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  console.log(username, password, user);

  if (!user) return res.status(404).json({ error: "User not found" }); // user not found
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) return res.status(401).json({ error: "Incorrect password" }); // password does not match

    const token = jwt.sign(
      { username: user.username, id: user.id },
      "secretissecret"
    );
    res.status(200).json( token ); // password matches
  });
});

module.exports = router;
