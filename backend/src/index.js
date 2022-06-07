const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h3>welcome</h3>");
});

app.use("/users", userController);

module.exports = app;
