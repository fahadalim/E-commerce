const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
  product_img: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
