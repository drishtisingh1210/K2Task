const express = require("express");
const Controller = require("../controllers/productController");
const router = express.Router();
const ImageUpload = require("../middleware/imageUpload");
const { isAuthenticated } = require("../middleware/auth");

router.route("/").get(Controller.getAllProducts);
router
  .route("/create")
  .post(isAuthenticated, ImageUpload, Controller.createProduct);
router.route("/:id").get(Controller.getOneProduct);
router.route("/checkProductStatus/:id").get(Controller.checkSoldPruct);
router.route("/mark-as-sold/:id").put(Controller.updateProduct);
router.route("/mark-false").put(isAuthenticated, Controller.setProductUnsold);
router.route("/payment").put(isAuthenticated, Controller.PaymentRoute);
router.route("/category/:category").get(Controller.getProductsByCategory);
module.exports = router;
