var path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
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
  app.get("/product", (req, res) => {
    res.render("product");
  });
  app.get("/shopping", (req, res) => {
    res.render("login");
  });
  app.get("/category", (req, res) => {
    res.render("category");
  });
};
