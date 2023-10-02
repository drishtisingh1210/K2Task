const express = require("express");
const Controller = require("../controllers/categoryController");
const router = express.Router();

router.route("/").get(Controller.getAllCategories);
router.route("/create").post(Controller.createCategory);

module.exports = router;
