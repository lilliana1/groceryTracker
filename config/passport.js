const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words,
// we want login with a username/email and password
module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      // Our user will sign in using an email, rather than a "username"
      {
        usernameField: "email"
      },
      (email, password, done) => {
        // When a user tries to sign in this code runs
        db.Users.findOne({
          where: {
            email: email
          }
        }).then(dbUser => {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          bcrypt.compare(password, dbUser.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, dbUser);
            } else {
              return done(null, false, { message: "password incorrect" });
            }
          });
        });
      }
    )
  );

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.Users.findById(id, (err, user) => {
      cb(null, obj);
    });
  });
};

// Exporting our configured passport
