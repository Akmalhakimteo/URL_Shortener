const db = require("../models");
const Short = db.shorts;
const validUrl = require("valid-url");
const { customAlphabet } =  require('nanoid')
const nanoid = customAlphabet('akmalhakim7', 7)

const generateUniqueShortID = async () => {
  const newshortid = nanoid()
  while ((await Short.findByPk(newshortid)) !== null) {
    newshortid = nanoid.generate();
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
