const express = require("express");
const router = express.Router();

//User model import
// const User = require("../db/models/User");

//Controller imports
const {
	getAllAppointments,
	createAppointment,
	getAppointmentById,
	updateAppointmentById,
} = require("../controllers/appointmentController");

//Routes
// get all appointments in DB
router.get("/", async (req, res) => {
	let allAppointments = await getAllAppointments();
	return res.status(200).json({ allAppointments });
});

//Create new appointment
router.post("/appointment", async (req, res) => {
	//data for example insert
	let StatusId = 4;
	let comment = "Esto es un comentario simulado en el handler del endpoint";
	let storeId = 1;
	let userId = 1;
	let petId = 1;

	//create dataObj for query;
	let queryData = {
		StatusId,
		comment,
		StoreId: storeId,
		UserId: userId,
		PetId: petId,
	};
	//Query:
	try {
		let newAppointment = await createAppointment(queryData);
		res.status(201).json({ newAppointment });
	} catch (error) {
		console.log(error);
	}
});

//Get appointment data by ID
router.post("/appointment/:id", async (req, res) => {
	let { id } = req.params;

	let appointmentsByID = await getUserById(id);
	res.status(200).json({ appointmentByID });
});

//Update appointment data
router.put("/appointment/:id", async (req, res) => {
	let { id } = req.params;

	//Inputs:
	let newName = req.body.name;
	let newLastName = req.body.lastname;

	//Create obj to update
	let updateData = {};
	//Include into updateData if not empty:
	if (newName != undefined) {
		updateData.first_name = newName;
	}
	if (newLastName != undefined) {
		updateData.last_name = newLastName;
	}

	//Update query
	try {
		//update query
		let appointmentUpdated = await updateUserById(updateData, id);
		//get new appointment info query
		let appointmentDataUpdated = await getUserById(id);

		res.status(200).json({ appointmentDataUpdated });
	} catch (error) {}
});

module.exports = router;
