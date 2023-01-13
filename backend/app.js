const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

//dotenv
require("dotenv").config();

//db connection & associations
const { sequelize } = require("./db/connection");
require("./db/associations");

//Morgan for watching requests
const morgan = require("morgan");
app.use(morgan("dev"));

//To use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create router for endpoints
app.use("/", require("./routes/main.js"));

//port
const port = process.env.PORT || 3004;
let appLink = `http://localhost:${port}`;

//Listener
app.listen(port, () => {
	console.log("App running on: ", appLink);
	//db connection:
	sequelize.sync({ force: false });
	//.then(console.log("All models were synchronized successfully."));
});
