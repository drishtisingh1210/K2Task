const express = require("express");
const Category = require("../models/category");

exports.getAllCategories = async (req, res) => {
  try {
    console.log("Hi from Controller");
    const categories = await Category.find();
    if (!categories) throw new Error("No Categories");
    res.json(categories);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneCategory = async (req, res) => {
  try {
    console.log("Finding category");
    const category = await Category.findById(req.params.id);
    if (!category) throw new Error("Category not found");
    res.json(category);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
