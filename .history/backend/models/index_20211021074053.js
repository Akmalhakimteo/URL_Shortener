const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port:3306,
  dialect: dbConfig.dialect,
});



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shorts = require("./short.model.js")(sequelize, Sequelize);

module.exports = db;
