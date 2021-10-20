const shortid = require("shortid");
const db = require("../models");
const Short = db.shorts;

const generateUniqueShortID = async () => {
  const newshortid = shortid.generate();
  while ((await Short.findByPk(newshortid)) !== null) {
    newshortid = shortid.generate();
  }
  return newshortid;
};

module.exports = { generateUniqueShortID };
