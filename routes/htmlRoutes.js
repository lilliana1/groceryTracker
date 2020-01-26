const path = require("path");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Products.findAll({}).then(dbProducts => {
      console.log(dbProducts);

      res.render("index", { data: dbProducts });
    });
  });
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
  app.get("/category", (req, res) => {
    res.render("category");
  });
};
