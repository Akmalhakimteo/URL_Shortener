const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");
const helper = require("../utils/helper");
const db = require("../models");
const Short = db.shorts;

// @route  POST   /api/url/shorten
// @desc   This will create a short URL
router.post("/shorten", async (req, res) => {
  const { longURL: actualURL } = req.body;
  const baseUrl = config.get("baseUrl");

  //check base url
  if (!validUrl.isUri(actualURL)) {
    return res.status(401).json({ message: "Invalid base url" });
  }

  // Create URL code  TODO: make sure it is a UNIQUE Id
  // const urlCode = shortid.generate();
  const urlCode = await helper.generateUniqueShortID();

  // Check long url
  try {
    let url = await Short.findOne({ where: { actualURL: actualURL } });
    if (url) {
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
