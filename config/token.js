import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Config
dotenv.config({ path: "./config/config.env" });

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

export default getToken