const express = require("express");
const User = require("../models/user");
const UserInfo = require("../models/userInfo");
const sendToken = require("../utils/jwtToken");

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
    console.log("Finding your User", req.params.id);
    const user = await User.findById(req.params.id);
    if (!user) throw new Error("User not found");
    res.json(user);
  } catch (err) {
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
    // console.log(req.params.id);
    const userInfo = await User.findById(req.user._id);
    if (!userInfo) throw new Error("User Info does not exist");
    res.json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    const token = user.getJWTToken();
    sendToken(user, 201, res);
    // res.status(201).json({
    //   success: true,
    //   token,
    //   user,
    // });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.loginUSer = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    if (!email || !password) {
      throw new Error("Please enter password and email");
    }
    const user = await User.findOne({ email }).select("+password");
    // console.log("User: ", user);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not exist please sign up first",
      });
      // return next(new Error("User does not exist"));
    }
    const isPasswordMatched = await user.comparePassword(password);
    // console.log(isPasswordMatched);
    if (!isPasswordMatched) {
      return res.status(404).json({
        status: false,
        message: "Either password or id not matched",
      });
    }
    sendToken(user, 200, res);
    // const token = user.getJWTToken();
    // res.status(200).json({
    //   success: true,
    //   token,
    //   user,
    // });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.logOutUser = async (req, res, next) => {
  console.log("lkhklhlk,");
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Log  out Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Not Expired",
    });
  }
};
