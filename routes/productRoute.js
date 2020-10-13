import express from "express";
import isAdmin from "../config/isAdmin.js";
import isAuth from "../config/isAuth.js";

import Product from "../model/productModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  res.send(product);
});
router.post("/", isAuth, isAdmin, async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      image: req.body.image,
      brand: req.body.brand,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      countInStock: req.body.countInStock,
      price: req.body.price,
      desciption: req.body.desciption,
    });

    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ msg: "New product created", data: newProduct });
    } else {
      return res.status(500).send({ msg: "Error in creating product" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });
    if (product) {
      product.name = req.body.name;
      product.category = req.body.category;
      product.image = req.body.image;
      product.brand = req.body.brand;
      product.countInStock = req.body.countInStock;
      product.price = req.body.price;
      product.desciption = req.body.desciption;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        return res
          .status(200)
          .send({ msg: "product updated", data: updatedProduct });
      }
    } else {
      return res.status(500).send({ msg: "Error in updating product" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error });
  }
});
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send({ message: "Error in deleteing" });
  }
});
export default router;
