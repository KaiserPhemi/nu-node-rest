const express = require("express");
const authRoute = require("./src/routes/auth");

const app = express();

// middlewares
app.use("/api/user/", authRoute);

app.listen(3000, () => console.log("App running on port: 3000"));
