const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MogoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB conected"))
  .catch(err => console.log(err));

app.get("/", (req, res) =>
  res.send("hello world, this is krish and its automated")
);

//USe routes

app.use("/api/users/", users);
app.use("/api/profiles/", profiles);
app.use("/api/posts/", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
