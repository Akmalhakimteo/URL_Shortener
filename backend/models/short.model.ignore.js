module.exports = (sequelize, Sequelize) => {
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

  return Short;
};
