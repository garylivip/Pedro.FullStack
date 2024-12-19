const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors()); // a Connect/Express middleware that can be used to enable CORS 

const db = require("./models");

const postsRoutes = require("./routes/Posts");
app.use("/posts", postsRoutes);

const commentsRoutes = require("./routes/Comments");
app.use("/comments", commentsRoutes);

const usersRoutes = require("./routes/Users");
app.use("/users", usersRoutes);

const likesRoutes = require("./routes/Likes");
app.use("/likes", likesRoutes);

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server is running");
  });
});
