const express = require("express");
const Controller = require("../controllers/orderController");
const router = express.Router();

router.route("/").get(Controller.getAllOrders);
router.route("/create").post(Controller.createOrder);
router.route("/:id").get(Controller.getOneOrder);
module.exports = router;
