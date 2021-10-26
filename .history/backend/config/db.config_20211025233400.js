require("dotenv").config();
const Sequelize = require("sequelize");
let HOST = process.env.HOST ;
let USER = process.env.SQL_USER || "root";
let PASSWORD = process.env.SQL_PASSWORD || "123456";
let DB = process.env.SQL_DB || "testdb";


const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  port: 3306,
  dialect: "mysql",
});
module.exports = {
  sequelize,
};
