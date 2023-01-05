//import model
const Appointment = require("../db/models/Appointment.js");
const User = require("../db/models/User");
const Store = require("../db/models/Store");
const Status = require("../db/models/Status");
const Pet = require("../db/models/Pet");
const PetType = require("../db/models/PetType");
const PetBreed = require("../db/models/PetBreed");

const getAllAppointments = async () => {
	let allAppointments = await Appointment.findAll();
	return allAppointments;
};

const createAppointment = async (data) => {
	let newAppointment = await Appointment.create(data);
	return newAppointment;
};

const getAppointmentById = async (id) => {
	let appointmentById = await Appointment.findOne({
		where: {
			id,
		},
		attributes: { exclude: ["UserId", "StoreId", "StatusId", "PetId"] },
		include: [
			{
				model: Status,
				attributes: ["description"],
			},
			{
				model: User,
				attributes: ["first_name", "last_name", "email", "phone_number"],
			},
			{
				model: Store,
				attributes: ["name", "email", "phone_number"],
			},
			{
				model: Pet,
				attributes: ["name", "age", "gender"],
				include: [
					{
						model: PetType,
						attributes: ["name"],
					},
					{
						model: PetBreed,
						attributes: ["name"],
					},
				],
			},
		],
	});
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

//Show all appointments for userId
const getAppointmentsByUserId = async (id) => {
	let appointmentsByUserId = await Appointment.findAll({
		where: {
			userId: id,
		},
		attributes: { exclude: ["UserId", "StoreId", "StatusId", "PetId"] },
		include: [
			{
				model: Status,
				attributes: ["description"],
			},
			{
				model: Store,
				attributes: ["name", "email", "phone_number"],
			},
			{
				model: Pet,
				attributes: ["name", "age", "gender"],
				include: [
					{
						model: PetType,
						attributes: ["name"],
					},
					{
						model: PetBreed,
						attributes: ["name"],
					},
				],
			},
		],
	});
	return appointmentsByUserId;
};

module.exports = {
	getAllAppointments,
	createAppointment,
	getAppointmentById,
	updateAppointmentById,
	getAppointmentsByUserId,
};
