"use_strict";

const Users = require("./user");
const Products = require("./product");


// This is our Grocery List model, which serves to take items a user has
// added to their cart and also reference them to a user ID. We will keep
// product IDs and them have User IDs associated with them, so if we look
// up by a user ID we can see all of the product IDs assigned to them ->
// therefore a shopping cart!


module.exports = function(sequelize, DataTypes) {
  const groceryList = sequelize.define("Grocery_List", {
    // reference the products by ID from the products table
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
  }, {
    timestamps: false
    });

  return groceryList;
};
