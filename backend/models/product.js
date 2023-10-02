const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  //   category: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Category",
  //   },
  category: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  images: [String],
  sold: {
    type: Boolean,
    default: false,
  },
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
