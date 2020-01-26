"use_strict";

require("dotenv").config();
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const flash = require("connect-flash");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
// require("./routes/userRoutes.js")(app);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running: http://localhost:${PORT}`);
  });
});
