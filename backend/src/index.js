const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const brandController =  require("./controllers/user.controller")
const productController =  require("./controllers/product.controller")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h3>welcome</h3>");
});

app.use("/users", userController);
app.use("/brands",brandController)
app.use("/products",productController)

module.exports = app;
