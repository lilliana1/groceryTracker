"use_strict";

const Users = require("./user");
const Products = require("./product");

module.exports = function(sequelize, DataTypes) {
  const groceryList = sequelize.define("Grocery_List", {
    // reference the products by ID from the products table
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Products",
        key: "id"
      }
    },
    // reference the user by their ID from the user table
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    }
  });

  return groceryList;
};
