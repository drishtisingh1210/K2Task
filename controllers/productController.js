const express = require("express");
const Products = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    console.log("Hi from Products");
    const products = await Products.find();
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
