const express = require("express");
const Controller = require("../controllers/productController");
const router = express.Router();

router.route("/").get(Controller.getAllProducts);
router.route("/create").post(Controller.createProduct);
router.route("/:id").get(Controller.getOneProduct);
router.route("/checkProductStatus/:id").get(Controller.checkSoldPruct);
router.route("/mark-as-sold/:id").put(Controller.updateProduct);
router.route("/mark-false").put(Controller.setProductUnsold);
module.exports = router;
