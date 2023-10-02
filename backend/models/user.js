const mongoose = require("mongoose");
const emailValidator = require("email-validator");

//--------BASIC APPROACH------------------

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Ensure uniqueness
//     validate: {
//       validator: function (value) {
//         // Use a regular expression to validate email format
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         return emailRegex.test(value);
//       },
//       message: (props) => `${props.value} is not a valid email address!`,
//     },
//   },
//   name: { type: String, required: true },
// });

// ------------ USING LIBRARY------------

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return emailValidator.validate(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  name: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
