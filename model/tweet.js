const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = Tweet = mongoose.model("tweet", tweetSchema);
