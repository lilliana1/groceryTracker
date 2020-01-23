"use_strict";

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return Users;
};
