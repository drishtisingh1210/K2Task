const express = require("express");
const Order = require("../models/order");

exports.getAllOrders = async (req, res) => {
  try {
    console.log("Hi from Controller");
    const orders = await Order.find();
    if (!orders) throw new Error("No Orders");
    res.json(orders);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneOrder = async (req, res) => {
  try {
    console.log("Finding your Order");
    const order = await Order.findById(req.params.id);
    if (!order) throw new Error("order not found");
    res.json(order);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
