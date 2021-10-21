require("dotenv").config();
module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.SQL_USER || "root",
  PASSWORD: process.env.SQL_PASSWORD || "123456",
  DB: process.env.SQL_DB || "testdb",
  dialect: "mysql",
};


