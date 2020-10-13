import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Config
dotenv.config({ path: "./config/config.env" });
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(6, token.length);

    jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token" });
      } else {
        req.user = decode;
        next();
        return;
      }
    });
  } else {
    return res.status(401).send({ msg: "Token Is Not Supplied" });
  }
};

export default isAuth;
