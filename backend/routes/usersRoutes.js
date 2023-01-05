const express = require("express");
const router = express.Router();

//Handlers imports
const {
	indexGET,
	userInfoPOST,
	userUpdatePUT,
} = require("../routesHandlers/userRouteHandlers");

//Routes
// get all users in DB
router.get("/", indexGET);

//Get user data by ID
router.post("/user/:id", userInfoPOST);

//Update user data
router.put("/user/:id", userUpdatePUT);

module.exports = router;
