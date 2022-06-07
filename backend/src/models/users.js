const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: email, required: true },
  password: { type: password, required: true },
  addresses: [
    {
      line1: { type: String, required: false },
      line2: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      add_type: { type: String, required: false, default: "home" },
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
