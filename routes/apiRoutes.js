// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// eslint-disable-next-line func-names
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/shopping");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/createUser", (req, res) => {
    let errors = [];
    db.Users.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (user) {
          res.send({ msg: "Email already exists" });
        } else {
          db.Users.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password
          })
            .then(() => {
              res.redirect("/signin");
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(`Error : ${err}`);
      });
  });

  app.get("/shopping", ensureAuthenticated, (req, res) => {
    console.log(req.user);
    db.Products.findAll({ limit: 8 }).then(dbProducts => {
      console.log(dbProducts);
      res.render("login", { data: dbProducts });
    });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Route for getting all products
  app.get("/api/all", (req, res) => {
    db.Products.findAll({}).then(dbProducts => {
      res.json(dbProducts);
    });
  });

  // Route for getting all products by a specific category
  app.get("/api/products/:category", (req, res) => {
    db.Products.findAll({
      where: {
        category: req.params.category
      }
    }).then(dbProducts => {
      res.json(dbProducts);
    });
  });

  // Route for getting a product by name
  app.get("/api/products/:name", (req, res) => {
    db.Products.findAll({
      where: {
        product_name: req.params.name
      }
    }).then(dbProducts => {
      res.json(dbProducts);
    });
  });

  // Route for adding a product to cart
  app.post("/api/addToCart/:id", (req, res) => {
    db.groceryList
      .create({
        userId: req.user.id,
        productId: req.params.id
      })
      .then(dbProducts => {
        res.json(dbProducts);
      });
  });

  // Route for getting a users cart
  app.get("/api/getCart", (req, res) => {
    db.groceryList
      .findAll({
        where: {
          userId: req.user.id
        }
      })
      .then(dbProducts => {
        res.json(dbProducts);
      });
  });
};
