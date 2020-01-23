"use_strict";

module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define("Products", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    product_name: DataTypes.STRING,
    img_src: DataTypes.STRING,
    selling_price: DataTypes.INTEGER,
    tax_exempt: DataTypes.BOOLEAN,
    tax_percentage: DataTypes.INTEGER,
    category: DataTypes.STRING,
    barcode: DataTypes.INTEGER
  });

  return Products;
};
