const path = require("path");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Products.findAll({
      limit: 9
    }).then(dbProducts => {
      const data = dbProducts;
      res.render("index", data);
    });
  });
  // app.get("/", (req, res) => {
  //   let data = res.json();
  //   console.log(data);
  //   res.render("index", data);
  // });
  app.get("/signin", (req, res) => {
    res.render("signIn");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
   // Route for getting a product by ID
   app.get("/products/:id", (req, res) => {
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProducts => {
      res.render("product", dbProducts);
    });
  });
  app.get("/shopping", (req, res) => {
    res.render("login");
  });
  app.get("/category", (req, res) => {
    res.render("category");
  });
};
