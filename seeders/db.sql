DROP DATABASE IF EXISTS food_db;
CREATE DATABASE food_db;
USE food_db;
CREATE TABLE Products(
  id INT PRIMARY KEY,
  product_name VARCHAR(500),
  selling_price DEC(10, 2),
  image_src VARCHAR(999),
  tax_exempt BOOL,
  tax_percentage INT,
  category VARCHAR(500),
  barcode VARCHAR(30)
);
CREATE TABLE Users(
  id INT PRIMARY KEY,
  first_name VARCHAR(500),
  last_name VARCHAR(500),
  email VARCHAR(500),
  password VARCHAR(70)
);
CREATE TABLE Grocery_Lists(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  productId INT NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (productId) REFERENCES Products(id),
  FOREIGN KEY (userId) REFERENCES Users(id)
);
