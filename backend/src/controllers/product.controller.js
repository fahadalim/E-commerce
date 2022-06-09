const express = require("express");
const Product = require("../models/product");
const router = express.Router();

//to get product
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("brand_id").lean().exec();
    res.status(200).send({ data: products, message: "success" });
  } catch (error) {
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

//for creatinf brand
router.post("/create", async (req, res) => {
  try {
    let product = await Product.create(req.body).lean().exec();
    return res.status(201).send({ data: product, message: "error" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//get product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("brand_id")
      .lean()
      .exec();
    return res.status(200).send({ data: product, message: "success" });
  } catch (error) {
    res.status(500).send({ data: product, message: error.message });
  }
});

//for update brand
router.patch("/:id/edit", async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate("brand_id")
      .lean()
      .exec();
    return res.status(201).send({ data: product, message: "success" });
  } catch (error) {
    res.status(500).send({ data: [], message: error.message });
  }
});

module.exports = router;
