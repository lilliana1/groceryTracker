# Corner Mart Grocery:
Corner Mart Grocery is an application built for easily viewing large amounts of products from a grocer in a user friendly way. At its core this application takes a large dataset stored in MYSQL, dynamically builds product pages based off of the information in a vast database.

We also give users the ability to create their own user accounts and create shopping carts that are tied to their user account. This simply being a passport and bcrypt authentication system whereas the shopping cart is a relational database where a user ID is related to a product ID and gathering all products corresponding to a specific user ID gives us their shopping card.

This of course is all build on the server side using handlebars and express. The entire user story is held together with express session.

## Technologies Used:
Node.JS, Express, Handlebars, MYSQL, Sequelize, bcrypt-JS, Passport, MySQL2, Body-Parser, and Sqlite3.

## Deploy Instructions:
To deploy this app, simply add the variables stored in `../config/config.js` to a `.ENV` file and setup a database in MySQL, once done this should be as simple as running `node server.js` on any server running Node.JS version 13+.

### Contributors:
Lilliana Ramos, Brandon Downhour, Cristian Colocho

An example version of this app can be found at: https://corner-market-app.herokuapp.com