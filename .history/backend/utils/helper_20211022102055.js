// const db = require("../models");
const {Short} = require('../models/short');
const validUrl = require("valid-url");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!-_=",
  7
);

const generateUniqueShortID = async () => {
  let newshortid = nanoid();
  while ((await Short.findByPk(newshortid)) !== null) {
    newshortid = nanoid();
  }
  return newshortid;
};

const isBadURL = (url) => {
  if (!validUrl.isUri(url)) {
    return true;
  else{
    return false;
  }
};


module.exports = { generateUniqueShortID, isBadURL };
