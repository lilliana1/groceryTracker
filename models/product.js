"use_strict";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Products = sequelize.define("Products", {
  id: DataTypes.INTEGER,
  product_name: DataTypes.STRING,
  img_src: DataTypes.STRING,
  selling_price: DataTypes.INTEGER,
  tax_exempt: DataTypes.BOOLEAN,
  tax_percentage: DataTypes.INTEGER,
  category: DataTypes.STRING,
  barcode: DataTypes.INTEGER
});

module.exports = Products;
