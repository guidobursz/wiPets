//import model
const Appointment = require("../db/models/Appointment.js");
const User = require("../db/models/User");
const Store = require("../db/models/Store");
const Status = require("../db/models/Status");
const Pet = require("../db/models/Pet");
const PetType = require("../db/models/PetType");
const PetBreed = require("../db/models/PetBreed");

//ADMIN
//Use by ADMIN for check ALL appointments
const getAllAppointments = async () => {
	let allAppointments = await Appointment.findAll();
	return allAppointments;
};

//USER:
//Use to create an appoint by user
const createAppointment = async (data) => {
	let newAppointment = await Appointment.create(data);
	return newAppointment;
};
//Show all appointments for userId order by first coming.
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
		order: [
			["date", "ASC"],
			["time", "ASC"],
		],
	});
	return appointmentsByUserId;
};

//Store
//show all appointments for storeId
const getAllAppointmentsByStoreId = async (id) => {
	let appointmentsByStoreId = await Appointment.findAll({
		where: {
			StoreId: id,
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
	return appointmentsByStoreId;
};
//Get all pending appointments by storeId
const getAllPENDINGAppointmentsByStoreId = async (id) => {
	let pendingAppointmentsByStoreId = await Appointment.findAll({
		where: {
			StoreId: id,
			StatusId: 4,
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
	return pendingAppointmentsByStoreId;
};

//Neutral
//Get user and store ids by appointment id
const getAppointUserStorePet = async (id) => {
	try {
		let UserStorePetIDs = await Appointment.findOne({
			where: {
				id,
			},
			attributes: ["UserId", "StoreId", "PetId"],
		});
		return UserStorePetIDs;
	} catch (error) {
		return res.status(500).json({ error });
	}
};
//Find one by id
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
//Update one by id
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
	getAppointmentsByUserId,
	getAllAppointmentsByStoreId,
	getAllPENDINGAppointmentsByStoreId,
	// to use at middleware: checkAppointmentUserStorePet
	getAppointUserStorePet,
};
