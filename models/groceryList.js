"use_strict";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Users = require("./user");
const Products = require("./product");

const groceryList = sequelize.define("Grocery_List", {
  // reference the products by ID from the products table
  productId: {
    type: DataTypes.INTEGER,
    references: "Products",
    referencesKey: "id"
  },
  // reference the user by their ID from the user table
  userId: {
    type: DataTypes.INTEGER,
    references: "User",
    referencesKey: "id"
  }
});

groceryList.hasOne(Users);
groceryList.hasMany(Products);

module.exports = groceryList;
