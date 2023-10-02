const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

//--------------------USER Routes-----------------------

router.route("/").get(Controller.getAllUsers);
router.route("/:id").get(Controller.getOneUser);
router.route("/info/:id").get(Controller.getUserDetails);

module.exports = router;
