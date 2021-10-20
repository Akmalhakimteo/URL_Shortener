const shortid = require("shortid");
const Short = require('../models/short.model')
const generateUniqueShortID = async () => {
  const newshortid = shortid.generate();
  while( await Short.findByPk(newshortid)!=)
};

module.exports = {};
