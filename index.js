const express = require("express");
const app = express();
const mangaController = require("./mangas/mangas.controller");
const userController = require("./users/users.controller");
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  session({
    secret: "YOUR_SECRET_HERE",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userController);
app.use("/manga", mangaController);

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
main();
