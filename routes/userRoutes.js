const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

router.route("/").get(Controller.getAllUsers);
router.route("/:id").get(Controller.getOneUser);
router.route("/info/:id").get(Controller.getUserDetails);

router.route("/create").post(Controller.createUser);
router.route("/:id/info").put(Controller.createUserDetail);

module.exports = router;
