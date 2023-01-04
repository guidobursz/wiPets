//import model
const Appointment = require("../db/models/Appointment.js");

const getAllAppointments = async () => {
	let allAppointments = await Appointment.findAll();
	return allAppointments;
};

const createAppointment = async (data) => {
	let newAppointment = await Appointment.create(data);
	return newAppointment;
};

const getAppointmentById = async (id) => {
	let appointmentById = await Appointment.findOne({ where: { id } });
	return appointmentById;
};

const updateAppointmentById = async (data, id) => {
	let AppointmentUpdated = await Appointment.update(data, {
		where: {
			id,
		},
	});
	return AppointmentUpdated;
};

module.exports = {
	getAllAppointments,
	createAppointment,
	getAppointmentById,
	updateAppointmentById,
};
