require("dotenv").config();

let HOST =  process.env.HOST || "localhost",
let USER = process.env.SQL_USER || "root",
let PASSWORD: process.env.SQL_PASSWORD || "123456",
let DB: process.env.SQL_DB || "testdb",
let dialect = "mysql",

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port:3306,
  dialect: dbConfig.dialect,
});
module.exports = {

};




