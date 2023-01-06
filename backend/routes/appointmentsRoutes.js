const express = require("express");
const router = express.Router();

//import middlewares
const { userJWT } = require("../middlewares/userJWT");
const { storeJWT } = require("../middlewares/storeJWT");

//import handlers:
const {
	indexGET,
	newAppointmentUserPOST,
	appointmentInfoPOST,
	appointmentUpdatePUT,
	appointmentsUserId,
	allAppointmentsByStoreIdGET,
	allPendingAppointmentsByStoreIdGET,
} = require("../routesHandlers/appointmentsRouteHandlers");

//Routes
//ADMIN
// get all appointments in DB
router.get("/", indexGET);

//USER
//Create new appointment by user
router.post("/appointment", newAppointmentUserPOST);
//Show all appointments for userId
router.post("/user/:id", appointmentsUserId);

//STORE
//Show all appointments for storeId
router.get("/store/", [storeJWT], allAppointmentsByStoreIdGET);
//Show all pending appointments for storeId
router.get("/store/pending", [storeJWT], allPendingAppointmentsByStoreIdGET);

//
//Neutral:
//Get appointment data by ID
router.post("/appointment/:id", appointmentInfoPOST);
//Update appointment data
router.put("/appointment/:id", appointmentUpdatePUT);

module.exports = router;
