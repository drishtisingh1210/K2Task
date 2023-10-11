const express = require("express");
const Controller = require("../controllers/productController");
const router = express.Router();
const ImageUpload = require("../middleware/imageUpload");

router.route("/").get(Controller.getAllProducts);
router.route("/create").post(ImageUpload, Controller.createProduct);
router.route("/:id").get(Controller.getOneProduct);
router.route("/checkProductStatus/:id").get(Controller.checkSoldPruct);
router.route("/mark-as-sold/:id").put(Controller.updateProduct);
router.route("/mark-false").put(Controller.setProductUnsold);
router.route("/payment").put(Controller.PaymentRoute);
router.route("/category/:category").get(Controller.getProductsByCategory);
module.exports = router;
