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
    result: {
      type: Array,
      require: true
    },
    demographic: {
      type: JSON,
      require: true,
      default: 0
    },
    ndi: {
      type: JSON,
      require: true,
      default: 0
    },
    workplace: {
      type: JSON,
      require: true,
      default: 0 
    },
  },

  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "user_data"
  }
  );

module.exports = User = mongoose.model("users", UserSchema);