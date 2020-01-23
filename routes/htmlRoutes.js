var path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/signin", (req, res) => {
    res.render("signIn");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
};
