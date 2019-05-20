// third-party libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// routes
const authRoute = require("./src/routes/auth");

const app = express();
dotenv.config();
const port = process.env.PORT;

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to database.")
);

// middlewares
app.use(express());
app.use(express.json());
app.use("/api/users", authRoute);

app.listen(port, () => console.log(`App started & running on port:${port}`));
