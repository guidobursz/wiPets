const express = require("express");
const app = express();

//dotenv
require("dotenv").config();

//db connection
const { sequelize } = require("./db/connection");

//Morgan for watching requests
const morgan = require("morgan");
app.use(morgan("dev"));

//To use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create router for endpoints
app.use("/", require("./routes/home.js"));
app.use("/auth", require("./routes/authRoutes.js"));
app.use("/users", require("./routes/users"));

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
