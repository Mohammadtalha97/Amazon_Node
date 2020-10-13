import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  countInStock: { type: Number, default: 0, required: true },
  price: { type: Number, default: 0, required: true },
  desciption: { type: String, required: true },
});

export default mongoose.model("Product", productSchema);
