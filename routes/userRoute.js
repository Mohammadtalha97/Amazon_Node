import express from "express";

import getToken from "../config/token.js";
import User from "../model/userModel.js";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email Or Password" });
  }
});

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await user.save();

  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid User Data" });
  }
});

router.post("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "mohammad",
      email: "mohammadtalha.patel@thegatewaycorp.com",
      password: "1234",
      isAdmin: true,
    });
    await user.save((err, usr) => {
      if (err) {
        return res.status(500).send({ msg: err });
      } else {
        return res.status(201).send({ msg: "User Created" });
      }
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;
