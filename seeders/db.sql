DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

USE food_db 

CREATE TABLE products(
    id INT,
    product_name VARCHAR(500),
    selling_price DEC(10,2), 
	tax_exempt BOOL, 
	tax_percentage INT, 
	category VARCHAR(500), 
	barcode VARCHAR(30)
);