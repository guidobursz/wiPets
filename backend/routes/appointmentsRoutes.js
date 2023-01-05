const express = require("express");
const router = express.Router();

//import handlers:
const {
	indexGET,
	appointmentPOST,
	appointmentInfoPOST,
	appointmentUpdatePUT,
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

module.exports = router;
