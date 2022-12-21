const router = require("express").Router();
const userService = require("./users.service");
const passport = require("passport");
//require("../auth/jwt.strategy");
require("../auth/local.strategy");

router.post("/register", userService.registerUser);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userService.loginUser
);

router.get("/logout", userService.logoutUser);

router.get("/", userService.getAllUsers);

router.get("/me", userService.getCurrentUser);

router.put("/me", userService.updateCurrentUser);

router.delete("/me", userService.deleteCurrentUser);

module.exports = router;
