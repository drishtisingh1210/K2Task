const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Minimun of 8 letters"],
    select: false,
  },
  avtar: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

userSchema.methods.comparePassword = async function (password) {
  // console.log("user Password", password);
  // console.log("bcrypt", this.password);
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
