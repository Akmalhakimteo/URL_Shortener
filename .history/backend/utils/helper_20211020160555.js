const shortid = require("shortid");
const Short = require('../models/short.model')
const generateUniqueShortID = async () => {
  const urlCode = shortid.generate();
};

module.exports = {};
