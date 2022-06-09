const express = require("express");
const Brand = require("../models/brands");
const router = express.Router();

//getting all brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().lean().exec();
    res.status(200).send({ data: brands, message: success });
  } catch (error) {
    res.status(500).send({ data: [], message: "error" });
  }
});

//post a brand
router.post("/create", async (req, res) => {
  try {
    let brand = await Brand.creat(req.body).lean().exec();
    res.status(500).send({ data: brand, message: "success" });
  } catch (error) {
    res.status(500).send({ data: [], message: "error" });
  }
});

//getting by id brand

router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findbyId(req.params.id).lean().exec();
    return res.status(200).send({ data: brand, message: "success" });
  } catch (error) {
    res.status(500).send({ data: [], message: "error" });
  }
});

//for updating brand
router.patch(":id/edit", async (req, res) => {
  try {
    let brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send({ data: brand, message: "success" });
  } catch (error) {
    res.status(500).send({ data: [], message: "error" });
  }
});

module.exports = router;
