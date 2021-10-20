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
    return res.status(401).json({ message: "Invalid base url" });
  }
}

module.exports = { generateUniqueShortID };
