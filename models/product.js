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
    enum: [
      "Tables",
      "Chairs",
      "Electrical Appliances",
      "Home Decor",
      "Vehicle",
      "Almirah",
      "Bed",
    ],
  },
  condition: {
    type: String,
    required: true,
  },
  images: [String],
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
