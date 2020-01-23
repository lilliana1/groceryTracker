"use_strict";

require("dotenv").config();
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const db = require("./models");

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
// require("./routes/userRoutes.js")(app);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
  });
});

// app.listen(PORT, () => {
//   console.log(`Server running: http://localhost:${PORT}`);
// });
