const User = require("../users/users.model");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

const cookieExtractor = (req) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["jwt"];
  }

  return jwt;
};

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwtPayload, done) => {
    const { expiration } = jwtPayload;

    if (Date.now() > expiration) {
      done("Unauthorized", false);
    }

    done(null, jwtPayload);
  })
);
