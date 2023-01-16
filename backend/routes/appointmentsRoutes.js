const express = require("express");
const router = express.Router();

//import middlewares
const { userJWT } = require("../middlewares/userJWT");
const { storeJWT } = require("../middlewares/storeJWT");
//
const { checkJWT_passID } = require("../middlewares/checkJWT_passID");

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
router.post("/appointment", [checkJWT_passID, userJWT], newAppointmentUserPOST);
//Show all appointments for userId
router.get("/user/:id", [checkJWT_passID, userJWT], appointmentsUserId);

//STORE
//Show all appointments for storeId
router.get("/store/", [checkJWT_passID, storeJWT], allAppointmentsByStoreIdGET);
//Show all pending appointments for storeId
router.get(
  "/store/pending",
  [checkJWT_passID, storeJWT],
  allPendingAppointmentsByStoreIdGET
);

//
//Neutral:
//Get appointment data by ID
router.post("/appointment/:id", [checkJWT_passID], appointmentInfoPOST);
//Update appointment data
router.put("/appointment/:id", appointmentUpdatePUT);

module.exports = router;
