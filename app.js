const express = require("express");
const router = require("./routes/userRoutes");
// const morgan= require("")
const app = express();
// if(process.env.NODE_ENV==='development'){
//     app.use(morgan("dev"));
// }

app.use(express.json());
app.use("/api/user", router);
module.exports = app;
