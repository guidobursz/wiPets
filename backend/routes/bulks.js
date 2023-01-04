const express = require("express");
const router = express.Router();

//Import models for bulks
const User = require("../db/models/User");

router.get("/5users", async (req, res) => {
	const bulk5Users = await User.bulkCreate([
		{
			first_name: "Susana",
			last_name: "Horia",
			email: "susana1@gmail.com",
			password: "12345",
		},
		{
			first_name: "Susana2",
			last_name: "Horia",
			email: "susana2@gmail.com",
			password: "12345",
		},
		{
			first_name: "Susana3",
			last_name: "Horia",
			email: "susana3@gmail.com",
			password: "12345",
		},
		{
			first_name: "Susana4",
			last_name: "Horia",
			email: "susana4@gmail.com",
			password: "12345",
		},
		{
			first_name: "Susana5",
			last_name: "Horia",
			email: "susana5@gmail.com",
			password: "12345",
		},
	]);

	res.status(201).json({ added: "ok", bulk5Users });
});

module.exports = router;
