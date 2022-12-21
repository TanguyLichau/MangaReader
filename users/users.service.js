const userModel = require("./users.model");
const bcrypt = require("bcrypt");

async function checkPassword(username, password) {
  const user = await userModel.findOne({ username });
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return false;
  }
  return user;
}

async function registerUser(req, res) {
  const hash = await bcrypt.hash(req.body.password, 10);
  let user = {
    username: req.body.username,
    password: hash,
  };
  userModel
    .create(user)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}

async function loginUser(req, res) {
  console.log("dedans");
}

async function getAllUsers(req, res) {
  userModel
    .find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  checkPassword,
};
