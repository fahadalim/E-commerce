const mongoose = require("mongoose");

const brandSchema = new mongoose.schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
});

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;
