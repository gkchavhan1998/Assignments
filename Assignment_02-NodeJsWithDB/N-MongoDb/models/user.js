const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  subscription: {
    type: Boolean,
    required: true,
    default: false,
  },
  interest: {
    type: [String],
    require: true,
  },
});

module.exports = mongoose.model("users", userSchema);
