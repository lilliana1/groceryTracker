const path = require("path");
const db = require("../models");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log(req.user);
    db.Products.findAll({ limit: 8 }).then(dbProducts => {
      res.render("index", { data: dbProducts, user: req.user });
    });
  });
  app.get("/signin", (req, res) => {
    res.render("signIn");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
  // Route for getting a product by ID
  app.get("/product/:id", (req, res) => {
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProducts => {
      res.render("product", { data: dbProducts, user: req.user });
    });
  });

  app.get("/shopping/:id", ensureAuthenticated, (req, res) => {
    console.log(req.user);
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProducts => {


      res.render("loggedInProduct", { data: dbProducts, user: req.user });

    });
  });
  app.get("/category/:category", (req, res) => {
    db.Products.findAll({
      where: { category: req.params.category },
      limit: 100
    }).then(dbProducts => {
      res.render("category", { data: dbProducts, user: req.user });
    });
  });
};
