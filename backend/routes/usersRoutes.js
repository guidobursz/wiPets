const express = require("express");
const router = express.Router();

//import middlewares
// const { userJWT } = require("../middlewares/userJWT");
// const { storeJWT } = require("../middlewares/storeJWT");
//
const { checkJWT_passID } = require("../middlewares/checkJWT_passID");
const { checkUserIDbyJWT } = require("../middlewares/checkUserIDbyJWT");

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
router.post("/user/:userId", [checkJWT_passID, checkUserIDbyJWT], userInfoPOST);

//Update user data
router.put("/user/:id", userUpdatePUT);

module.exports = router;
