const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`Server running: http://localhost:${port}`);
  });
});
