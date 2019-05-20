const Router = require("express");
const route = Router();

route.post("/register", (req, res) => {
  res.send({
    message: "We are registered"
  });
});

module.exports = route;
