const mongoose = require("mongoose");
const validator = require("validator");

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  dob: { type: Date, require: true },
  city: { type: String, default: "Noida" },
  country: { type: String, default: "India" },
  jobProfile: { type: String, require: true },
  phone: { type: String, require: true },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
module.exports = UserInfo;
