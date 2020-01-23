"use_strict";

module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define("Products", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    product_name: DataTypes.STRING,
    image_src: DataTypes.STRING,
    selling_price: DataTypes.DECIMAL(10,2),
    tax_exempt: DataTypes.BOOLEAN,
    tax_percentage: DataTypes.INTEGER,
    category: DataTypes.STRING,
    barcode: DataTypes.STRING
  });

  return Products;
};
