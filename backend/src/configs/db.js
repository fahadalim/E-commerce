const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ecommerce:wbOn5b3u4tfI18V9@cluster0.wa68wk9.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;

// wbOn5b3u4tfI18V9
