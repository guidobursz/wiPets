const express = require("express");
const router = express.Router();

//User model import
const User = require("../db/models/User");

router.post("/users", (req, res) => {
	res.status(202).json({ hola: "buenas" });
});

module.exports = router;
