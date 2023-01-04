const express = require("express");
const router = express.Router();

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

router.use("/bulks", require("./bulks"));

module.exports = router;
