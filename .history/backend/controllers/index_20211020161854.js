const express = require("express");
const router = express.Router();
const config = require("config");
const db = require("../models");
const Short = db.shorts;
const baseURL = config.get("baseUrl");

// @route GET /:code
// @dec   Redirect to actual URL

router.get("/:code", async (req, res) => {
  try {
    code = req.params.code;
    let url = await Short.findByPk(code);

    if (url) {
      return res.redirect(url.actualURL);
    } else {
      console.log(url);
      return res.status(404).json("No URL found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("servor error");
  }
});

module.exports = router;
