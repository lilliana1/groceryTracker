"use_strict";

require("dotenv").config();
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "test secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);
// require("./routes/userRoutes.js")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`==> 🌎 Server Running: http://localhost:${PORT}`);
  });
});
