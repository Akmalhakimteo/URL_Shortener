const express = require("express");
const router = express.Router();
const config = require("config");
const helper = require("../utils/helper");
const { Short } = require("../models/short");

// @route  POST   /api/url/shorten
// @desc   This will create a short URL
router.post("/shorten", async (req, res) => {
  const { longURL: actualURL } = req.body;
  const baseUrl = config.get("baseUrl");

  //check url validity
  if (helper.isBadURL(actualURL)) {
    return res.status(401).json({ message: "Invalid base url" });
  }

  const urlCode = await helper.generateUniqueShortID(); //checks against MySQL table to ensure that it is unique

  // Check if url is already in database
  try {
    let url = await Short.findOne({ where: { actualURL: actualURL } });
    if (url) {
      const newurl = config.baseUrl + "/" + url.shortURL;
      console.log(url)
      console.log("--------------------------")
      url.shortURL = newurl
      console.log(url)
      res.json(url);
    } else {
      const shortURL = baseUrl + "/" + urlCode;
      const shortToReturn = {
        shortURL: shortURL,
        actualURL: actualURL,
      };

      const shortToSave = {
        shortURL: urlCode,
        actualURL: actualURL,
      };

      await Short.create(shortToSave);

      res.json(shortToReturn);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
