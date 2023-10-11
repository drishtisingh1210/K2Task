const express = require("express");
const Products = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    console.log("Hi from Products");
    const products = await Products.find({ sold: false });
    if (!products) throw new Error("No Products yet");
    res.json(products);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
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
      message: error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    // res.send("Hello");
    // console.log(req.files.filename);
    // console.log(req.body);
    // console.log(req.file.path);
    // req.body.images[0] = req.file.path;
    console.log(req);
    console.log(req.body);
    console.log(req.files);
    // console.log(req.body.images);
    // console.log(req.body.images);
    // console.log(...req.body.images);
    // const filePaths = req.files.map((file) => file.path);

    // req.body.images = filePaths;
    // req.body["images"] = filePaths;
    let img = [];

    for (let i = 0; i < req.files.length; i++) {
      img.push(req.files[i].path);
    }
    req.body["images"] = img;

    const product = new Products(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: error,
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
// Import your Mongoose Product model

exports.PaymentRoute = async (req, res) => {
  const productIds = req.body.productIds; // Assuming productIds is an array of IDs

  try {
    // Iterate through the array of product IDs and update each product as sold
    for (const productId of productIds) {
      // Find the product by ID and update the "sold" field to true
      const updatedProduct = await Products.findByIdAndUpdate(
        productId,
        { sold: true },
        { new: true } // Return the updated product
      );

      // Check if the product was found and updated
      if (!updatedProduct) {
        console.error(
          `Product with ID ${productId} not found or could not be updated.`
        );
        // Handle the case where the product could not be updated, e.g., send an error response
      }
    }

    // All products have been successfully marked as sold
    res
      .status(200)
      .json({ success: true, message: "Products marked as sold." });
  } catch (error) {
    console.error("Error marking products as sold:", error);
    // Handle the error, e.g., send an error response
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log(`Fetching products in category: ${category}`);
    const products = await Products.find({ category, sold: false });
    if (!products || products.length === 0) {
      throw new Error("No Product in this category");
    }
    res.json(products);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
