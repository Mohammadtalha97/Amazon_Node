// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// //Config
// dotenv.config({ path: "./config/config.env" });

// const getToken = (user) => {
//   return jwt.sign(
//     {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "48h",
//     }
//   );
// };

// const isAuth = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     const onlyToken = token.slice(7, token.length);
//     jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(401).send({ msg: "Invalid Token" });
//       }
//       req.user = token;
//       next();
//       return;
//     });
//   } else {
//     return res.status(401).send({ msg: "Token Is Not Supplied" });
//   }
// };

// const isAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     return next();
//   } else {
//     return res.status(401).send({ msg: "Admin Token Is Not Valid" });
//   }
// };

// export default { getToken, isAuth, isAdmin };
// // export default  getToken ;
