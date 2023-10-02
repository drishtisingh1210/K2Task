const express = require("express");
const Products = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    console.log("Hi from Products");
    const products = await Products.find({ sold: false });
    if (!products) throw new Error("No Products yet");
    res.json(products);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    console.log("getting one product");
    const product = await Products.findById(req.params.id);
    if (!product) throw new Error("Product not found");
    res.json(product);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, {
      sold: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Product marked as sold" });
  } catch (error) {
    console.error("Error updating product:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.checkSoldPruct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product && product.sold == true) {
      res.json({ sold: true });
    } else {
      res.json({ sold: false });
    }
  } catch (error) {
    console.error("Error checking product status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.setProductUnsold = async (req, res) => {
  try {
    // Update all products to set the 'sold' field to false
    await Products.updateMany({}, { sold: false });

    res.status(200).json({
      success: true,
      message: "All products set to false",
    });
  } catch (error) {
    console.error("Error updating product status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
