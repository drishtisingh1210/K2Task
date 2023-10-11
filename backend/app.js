const express = require("express");
const router = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
// const morgan= require("")
const cors = require("cors");
const path = require("path");
const app = express();

// if(process.env.NODE_ENV==='development'){
//     app.use(morgan("dev"));
// }
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, PUT, PATCH, POST",
  credentials: true,
};
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/user", router);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRoutes);
app.use("/api/orders", orderRoutes);
module.exports = app;
