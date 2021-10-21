const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   port:3306,
//   dialect: dbConfig.dialect,
// });

// sequelize.authenticate()
// .then(()=>{
//   console.log("Successfully connected to MYSQL DB")
// })
// .catch((err)=>{
//   console.error("Error connecting to MYSQL DB",err)
//   process.exit(1)
// })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shorts = require("./short.model.js")(sequelize, Sequelize);

module.exports = db;
