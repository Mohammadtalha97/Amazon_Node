import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Config
dotenv.config({ path: "./config/config.env" });
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    return res.status(401).send({ msg: "Admin Token Is Not Valid" });
  }
};

export default isAdmin;
