const Sequelize = require("sequelize");
const sequelize = require("../config/")
const Short = sequelize.define("Short", {
  shortURL: {
    type: Sequelize.STRING,
    primaryKey: true,
    require: true,
  },

  actualURL: {
    type: Sequelize.STRING,
    require: true,
  },
});

module.exports = { Short };
