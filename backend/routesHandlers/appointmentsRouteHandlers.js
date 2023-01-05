//Controller imports
const {
	getAllAppointments,
	createAppointment,
	getAppointmentById,
	updateAppointmentById,
} = require("../modelsControllers/appointmentController");

// get all appointments in DB
const indexGET = async (req, res) => {
	let allAppointments = await getAllAppointments();
	return res.status(200).json({ allAppointments });
};
//Create new appointment
const appointmentPOST = async (req, res) => {
	//data for example insert
	let { date, time } = req.body;
	let StatusId = 4;
	let comment = "Esto es un comentario simulado en el handler del endpoint";
	let storeId = 1;
	let userId = 1;
	let petId = 1;

	//create dataObj for query;
	let queryData = {
		date,
		time,
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
		res.status(500).json({ error });
	}
};
//Get appointment data by ID
const appointmentInfoPOST = async (req, res) => {
	let { id } = req.params;

	let appointmentsByID = await getAppointmentById(id);
	res.status(200).json({ appointmentsByID });
};

//Update appointment data
const appointmentUpdatePUT = async (req, res) => {
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
		let appointmentUpdated = await updateAppointmentById(updateData, id);
		//get new appointment info query
		let appointmentDataUpdated = await getAppointmentById(id);

		res.status(200).json({ appointmentDataUpdated });
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = {
	indexGET,
	appointmentPOST,
	appointmentInfoPOST,
	appointmentUpdatePUT,
};
