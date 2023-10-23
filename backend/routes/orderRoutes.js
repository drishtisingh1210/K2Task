const express = require("express");
const Controller = require("../controllers/orderController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.route("/").get(isAuthenticated, Controller.getAllOrders);
router.route("/create").post(isAuthenticated, Controller.createOrder);
router.route("/:id").get(isAuthenticated, Controller.getOneOrder);
module.exports = router;
