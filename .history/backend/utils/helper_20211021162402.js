const db = require("../models");
const Short = db.shorts;
const validUrl = require("valid-url");
const { customAlphabet } =  require('nanoid')
const nanoid = customAlphabet('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'', 7)

const generateUniqueShortID = async () => {
  const newshortid = nanoid()
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

console.log(generateUniqueShortID(generateUniqueShortID()))


module.exports = { generateUniqueShortID, isBadURL };