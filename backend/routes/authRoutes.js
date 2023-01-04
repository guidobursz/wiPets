const express = require("express");
const router = express.Router();

router.post("/user/register", (req, res) => {
	let { name, lastname, email, password } = req.body;

	res.status(202).json({ name, lastname, email, password });
});

module.exports = router;
