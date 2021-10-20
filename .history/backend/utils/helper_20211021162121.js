const shortid = require("shortid");
const db = require("../models");
const Short = db.shorts;
const validUrl = require("valid-url");
const { customAlphabet } =  require('nanoid')
const nanoid = customAlphabet('akmalhakim', 10)

const generateUniqueShortID = async () => {
  const newshortid = shortid.generate();
  while ((await Short.findByPk(newshortid)) !== null) {
    newshortid = shortid.generate();
  }
  return newshortid;
};

const isBadURL = (url) => {
  if (!validUrl.isUri(url)) {
    return true;
  }
  return false;
};


module.exports = { generateUniqueShortID, isBadURL };
