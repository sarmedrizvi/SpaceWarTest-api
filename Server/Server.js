const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("../config/mongodb");
const app = express();
app.use(require("body-parser").json());
app.use(cors());

connectDB();
app.get("/", (req, res) => {
  res.json("This is spacewar app testing");
});

app.use("/api", require("../routes/Tweet"));

app.listen(3000, () => {
  console.log("server is running at 3000");
});
