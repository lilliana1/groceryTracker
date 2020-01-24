"use_strict";

// This is our Product List model, we use this to store product information
// for the store. A product will get an ID, name, image, selling price,
//tax exemption status (for EBT eligibility), tax percentage, category, and UPC barcode

module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define(
    "Products",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      product_name: DataTypes.STRING,
      image_src: DataTypes.STRING,
      selling_price: DataTypes.DECIMAL(10, 2),
      tax_exempt: DataTypes.BOOLEAN,
      tax_percentage: DataTypes.INTEGER,
      category: DataTypes.STRING,
      barcode: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  return Products;
};
