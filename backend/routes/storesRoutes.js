const express = require("express");
const router = express.Router();

const {
	indexGET,
	verifiedStoresPOST,
	storeInfoPOST,
	storeUpdatePUT,
} = require("../routesHandlers/storeRouteHandlers");

//Routes
// get all stores in DB
router.get("/", indexGET);
//Get all verified stores
router.post("/verified", verifiedStoresPOST);

//Get store data by ID
router.post("/store/:id", storeInfoPOST);

//Update store data
router.put("/store/:id", storeUpdatePUT);

module.exports = router;
