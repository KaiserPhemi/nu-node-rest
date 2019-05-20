const Router = require("express");
const route = Router();

// models
const User = require("../model/user");

route.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    res.status(201).send({
      message: "User saved",
      user
    });
  } catch {
    res.send({
      message: "User not created"
    });
  }
});

route.get("/register", (req, res) => {
  res.send({
    message: "We retrieved all registered"
  });
});

module.exports = route;
