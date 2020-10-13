import mongoose from "mongoose";

const url = "http://localhost:27017/AmazonClone";

export default async () => {
  try {
    const conn = await mongoose.connect(
      //url,
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => console.log("DB connected")
    );
    return conn;
  } catch (err) {
    throw new Error("MongoDB connection err: " + err);
  }
};
