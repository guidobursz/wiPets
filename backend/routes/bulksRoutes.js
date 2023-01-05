const express = require("express");
const router = express.Router();

const {
	fiveUsersGET,
	fiveStoresGET,
	fivePetsGET,
	breedsGET,
	petTypesGET,
	statusGET,
} = require("../routesHandlers/bulksRouteHandlers");

//Routes
router.get("/5users", fiveUsersGET);

router.get("/5stores", fiveStoresGET);

router.get("/5pets", fivePetsGET);

router.get("/pet-breeds", breedsGET);

router.get("/pet-types", petTypesGET);

router.get("/status", statusGET);

module.exports = router;
