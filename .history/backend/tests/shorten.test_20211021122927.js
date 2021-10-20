const {helper} = require('../utils/helper')
const generateUniqueShortID = helper.generateUniqueShortID
const isBadURL = helper.
const {Short} = require('../models/short.model')
const sequelize = require('sequelize')



test("testing the shorten.test working", () => {
  const result = "tes";
  expect(result).toBe("tes");
});
