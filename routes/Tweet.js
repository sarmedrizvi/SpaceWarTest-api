const express = require("express");

const { check, validationResult } = require("express-validator");
const config = require("config");
const router = express.Router();

const Tweet = require("../model/tweet");

router.post(
  "/addTweet",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("comment", "Tweet is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const { name, comment } = req.body;
      const tweet = new Tweet({
        name,
        comment,
        date: Date.now(),
      });
      //   console.log(name, comment);
      await tweet.save();
      res.status(200).json(tweet);
      // const allTweets = await Tweet.create;
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  }
);

router.get("/getTweets", async (req, res) => {
  try {
    const tweet = await Tweet.find({}).sort({ date: -1 });
    res.json(tweet);
    // const allTweets = await Tweet.create;
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
