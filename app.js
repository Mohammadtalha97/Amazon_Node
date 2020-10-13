import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import data from "./data.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

//Config
dotenv.config({ path: "./config/config.env" });

//Database connection
connectDB();

//Initialized express
const app = express();

//Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

//Routes
app.use("/api/users", userRoute);

app.use("/api/products", productRoute);

// //API_1
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// //API_2
// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

//PORT
const PORT = process.env.PORT || 5000;

//Server listing
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

export default app;
