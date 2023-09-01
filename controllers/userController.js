const express = require("express");
const User = require("../models/user");
const UserInfo = require("../models/userInfo");

exports.getAllUsers = async (req, res) => {
  try {
    console.log("Hi from Controller");
    const users = await User.find();
    if (!users) throw new Error("No Users");
    res.json(users);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    console.log("Finding your User");
    const user = await User.findById(req.params.id);
    if (!user) throw new Error("User not found");
    res.json(user);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUserDetail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error("User not found");
    const userInfo = new UserInfo(req.body);
    userInfo.userId = user._id;
    await userInfo.save();
    res.status(201).json(userInfo);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    console.log(req.params.id);
    const userInfo = await UserInfo.findOne({ userId: req.params.id });
    if (!userInfo) throw new Error("User Info does not exist");
    res.json(userInfo);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
