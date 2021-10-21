require("dotenv").config();

HOST: process.env.HOST || "localhost",
USER: process.env.SQL_USER || "root",
PASSWORD: process.env.SQL_PASSWORD || "123456",
DB: process.env.SQL_DB || "testdb",
dialect: "mysql",
sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port:3306,
  dialect: dbConfig.dialect,
});
module.exports = {

};




