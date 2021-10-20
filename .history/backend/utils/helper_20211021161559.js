import { nanoid } from 'nanoid'
const db = require("../models");
const Short = db.shorts;
const validUrl = require("valid-url");
const nanoid = nanoid.customAlphabet('akmalhakim27', 7)
model.id = nanoid() //=> "4f90d13a42"

const generateUniqueShortID = async () => {
  const newshortid = shortid.generate();
  while ((await Short.findByPk(newshortid)) !== null) {
    newshortid = nanoid();
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
