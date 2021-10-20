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

const isBadURL = () => {
  if (!validUrl.isUri(actualURL)) {
    return res.status(401).json({ message: "Invalid base url" });
  }
}

module.exports = { generateUniqueShortID };
