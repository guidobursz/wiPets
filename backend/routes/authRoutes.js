const express = require("express");
const router = express.Router();

const {
	userRegisterPOST,
	userLoginPOST,
	storeRegisterPost,
	storeLoginPost,
} = require("../routesHandlers/authRouteHandlers");

//Routes:
//User register
router.post("/user/register", userRegisterPOST);

//User login
router.post("/user/login", userLoginPOST);

//Store register
router.post("/store/register", storeRegisterPost);

//Store login
router.post("/store/login", storeLoginPost);

module.exports = router;
