const shortid = require("shortid");
const db = require("../models");
const Short = db.shorts;
const validUrl = require("valid-url");

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

console.log(isBadURL("fdjksankj wk"))

module.exports = { generateUniqueShortID, isBadURL };
