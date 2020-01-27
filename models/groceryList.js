"use_strict";

// This is our Grocery List model, which serves to take items a user has
// added to their cart and also reference them to a user ID. We will keep
// product IDs and them have User IDs associated with them, so if we look
// up by a user ID we can see all of the product IDs assigned to them ->
// therefore a shopping cart!

module.exports = function(sequelize, DataTypes) {
  const groceryList = sequelize.define(
    "Grocery_List",
    {
      // reference the products by ID from the products table
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true
      },
      productId: {
        type: DataTypes.INTEGER
      },
      // reference the user by their ID from the user table
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      }
    },
    {
      timestamps: false
    }
  );

  groceryList.associate = function(models) {
    groceryList.hasMany(models.Products, {
      foreignKey: "id",
      sourceKey: "productId"
    });
  };

  return groceryList;
};
