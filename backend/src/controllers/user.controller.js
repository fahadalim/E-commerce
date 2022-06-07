const express = require("express");
const User = require("../models/users");
const router = express.Router();

//data of all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send({ data: users, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for creating user
router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req, body);
    return res.status(201).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for getting single user
router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id).lean().exec();
    res.status(200).send({ data: users, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});
