module.exports = function(app) {
  app.post("/api/createUser", (req, res) => {
    console.log(req.body);
    res.redirect("/");
  });
};
