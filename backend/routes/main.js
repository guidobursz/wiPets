const express = require("express");
const router = express.Router();

//import middlewares
const { userJWT } = require("../middlewares/userJWT");

//Index, will use as kind of index of endpoints
router.get("/", (req, res) => {
	res.status(200).json([
		{
			endpoint: "/",
			method: "GET",
			description: "overview of all endpoints",
		},
		{
			endpoint: "/auth",
			method: "POST",
			description: "faltan",
		},
		{
			endpoint: "/bulks/5users",
			method: "GET",
			description: "add 5 users to db",
		},
	]);
});

//Routing:
router.use("/auth", require("./authRoutes"));
router.use("/appointments", require("./appointments"));
router.use("/users", require("./users"));
router.use("/stores", require("./stores"));
router.use("/pets", require("./pets"));

//routes for bulk inserts, for dummy examples:
router.use("/bulks", require("./bulks"));

module.exports = router;
