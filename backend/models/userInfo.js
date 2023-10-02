const mongoose = require("mongoose");
const validator = require("validator");

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // Use trim to remove leading/trailing spaces
  country: { type: String, default: "India", trim: true },
  state: { type: String, default: "Uttar Pradesh", trim: true },
  city: { type: String, default: "Noida", trim: true },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Using a regular expression to validate phone numbers
        const phoneRegex = /^[0-9]{10}$/; // 10-digit phone numbers
        return phoneRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  profilePic: {
    type: String,
  },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
module.exports = UserInfo;
