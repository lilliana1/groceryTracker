const path = require("path");
const db = require("../models");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      db.Grocery_List.findAll({
        where: { userId: req.user },
        include: [
          {
            model: db.Products,
            required: true
          }
        ]
      }).then(cartData => {
        // we're doing this god awful black magic because for
        // some reason sequelize doesn't send back a nice json object for us
        // i'm sorry
        let shoppingData = JSON.stringify(cartData);
        let actualShoppingData = JSON.parse(shoppingData);
        console.log(req.user);
        db.Products.findAll({ limit: 8 }).then(dbProducts => {
          res.render("index", {
            data: dbProducts,
            user: req.user,
            shopping: actualShoppingData
          });
        });
      });
    } else {
      db.Products.findAll({ limit: 8 }).then(dbProducts => {
        res.render("index", {
          data: dbProducts,
          user: req.user,
        });
      });
    }
  });
  app.get("/signin", (req, res) => {
    res.render("signIn");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
  // Route for getting a product by ID
  app.get("/product/:id", (req, res) => {
    db.Grocery_List.findAll({
      where: { userId: req.user },
      include: [
        {
          model: db.Products,
          required: true
        }
      ]
    }).then(cartData => {
      // we're doing this god awful black magic because for
      // some reason sequelize doesn't send back a nice json object for us
      // i'm sorry
      let shoppingData = JSON.stringify(cartData);
      let actualShoppingData = JSON.parse(shoppingData);

      db.Products.findOne({
        where: {
          id: req.params.id
        }
      }).then(dbProducts => {
        console.log(dbProducts);
        res.render("product", {
          dbProducts,
          user: req.user,
          shopping: actualShoppingData
        });
      });
    });
  });

  app.get("/shopping/:id", ensureAuthenticated, (req, res) => {
    console.log(req.user);
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProducts => {
      res.render("loggedInProduct", { dbProducts, user: req.user });
    });
  });
  app.get("/category/:category", (req, res) => {
    db.Grocery_List.findAll({
      where: { userId: req.user },
      include: [
        {
          model: db.Products,
          required: true
        }
      ]
    }).then(cartData => {
      // we're doing this god awful black magic because for
      // some reason sequelize doesn't send back a nice json object for us
      // i'm sorry
      let shoppingData = JSON.stringify(cartData);
      let actualShoppingData = JSON.parse(shoppingData);

      db.Products.findAll({
        where: { category: req.params.category },
        limit: 100
      }).then(dbProducts => {
        res.render("category", {
          data: dbProducts,
          user: req.user,
          shopping: actualShoppingData
        });
      });
    });
  });
};
