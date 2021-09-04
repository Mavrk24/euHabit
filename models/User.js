const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      default: "Username"
    },
    email: {
      type: String,
      required: true,
      default: "E-mail"
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    screening: {
      type: String,
      require: false
    },
    result: {
      type: Array,
      require: false
    },
    demographic: {
      type: String,
      require: false
    },
    age: {
      type: String,
      require: false
    },
    workplace: {
      type: String,
      require: false
    },
  },

  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "user_data"
  }
  );

module.exports = User = mongoose.model("users", UserSchema);