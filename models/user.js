"use_strict";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Users = sequelize.define("Users", {
  user_id: DataTypes.INTEGER,
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = Users;
