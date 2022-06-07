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
    const user = await User.findById(req.params.id).lean().exec();
    res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for update user by id
router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for getting all address of particular user
router.get("/:id/addresses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const addresses = user.addresses;
    res.status(200).send({ data: addresses, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for adding new address of user
router.patch("/:id/addresses/create", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      { $push: { addresses: req.body } }
    );
    res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});

//for edit a particular use particular addresses
router.patch("/:id/addresses/:id/edit", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error" });
  }
});
