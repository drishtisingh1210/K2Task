const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");

//--------------------USER Routes-----------------------

router.route("/").get(Controller.getAllUsers);
router.route("/logout").get(Controller.logOutUser);
router.route("/info").get(isAuthenticated, Controller.getUserDetails);

router.route("/:id").get(Controller.getOneUser);
router.route("/create").post(Controller.registerUser);
router.route("/login").post(Controller.loginUSer);

module.exports = router;
