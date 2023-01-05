const express = require("express");
const router = express.Router();

//import handlers:
const {
	indexGET,
	appointmentPOST,
	appointmentInfoPOST,
	appointmentUpdatePUT,
	appointmentsUserId,
} = require("../routesHandlers/appointmentsRouteHandlers");
//Routes
// get all appointments in DB
router.get("/", indexGET);

//Create new appointment
router.post("/appointment", appointmentPOST);

//Get appointment data by ID
router.post("/appointment/:id", appointmentInfoPOST);

//Update appointment data
router.put("/appointment/:id", appointmentUpdatePUT);

//Show all appointments for userId
router.post("/user/:id", appointmentsUserId);

//Show all appointments for storeId

module.exports = router;
