const express = require("express");
const app = express();

app.use(express.json());
const db = require("./models");

const postsRoutes = require("./routes/Posts");
// app.use("/posts", postsRoutes);
app.use("/", postsRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
