const express = require("express");
const app = express();

//dotenv
require("dotenv").config();
//port
const port = process.env.PORT || 3004;
let appLink = `http://localhost:${port}`;

//Morgan for watching requests
const morgan = require("morgan");
app.use(morgan("dev"));

//To use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create router for endpoints
app.use("/auth", require("./routes/auth.js"));

//Listener
app.listen(port, () => {
  console.log("App running on: ", appLink);
});
