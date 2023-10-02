const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
