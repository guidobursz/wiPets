//import model
const Appointment = require("../db/models/Appointment.js");
const User = require("../db/models/User");
const Store = require("../db/models/Store");
const Status = require("../db/models/Status");
const Pet = require("../db/models/Pet");
const PetType = require("../db/models/PetType");
const PetBreed = require("../db/models/PetBreed");

//Imp sequelzie helper
const { Op } = require("sequelize");

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
const getAppointmentsByUserId = async (id, filters) => {
	/* 
		Filters will be:
			{
				storeName: "" // "exex",
				petName: "" // "exex",
				services: false // [ 'vet' ] // [ 'vet', 'hair' ],	
				statues: false // statues: [ 'pending' ] // [ 'pending', 'confirmed', 'cancelled' ],	
			}
	*/

	/*
    [Op.and]: [{ a: 5 }, { b: 6 }],  // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],   // (a = 5) OR (b = 6)

	my query seria:
	{
				model: Status,
				attributes: ["description"],
				where:{
					[Op.or]: [
					{ [Op.substring]: w1 },
					{ [Op.substring]: w2 },
					{ [Op.substring]: w3 },
					{ [Op.substring]: w3 },
					{ [Op.substring]: w3 },
				],
				}
			},
	*/
	console.log("recibo en la query: ", filters);

	let appointmentsByUserId = await Appointment.findAll({
		where: {
			userId: id,
		},
		attributes: { exclude: ["UserId", "StoreId", "StatusId", "PetId"] },
		include: [
			{
				model: Status,
				attributes: ["description"],
				where: {
					description: {
						[Op.or]: [
							{ [Op.substring]: filters.statues.w1 },
							{ [Op.substring]: filters.statues.w2 },
							{ [Op.substring]: filters.statues.w3 },
							{ [Op.substring]: filters.statues.w4 },
							{ [Op.substring]: filters.statues.w5 },
						],
					},
				},
			},
			{
				model: Store,
				attributes: ["name", "email", "phone_number"],
				where: {
					name: { [Op.substring]: filters.storeName },
				},
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
				where: {
					name: { [Op.substring]: filters.petName },
				},
			},
		],
		order: [
			["date", "ASC"],
			["time", "ASC"],
		],
	});
	return appointmentsByUserId;
};
//Show 3 following appointments for user profile
const GetFollowingThreeAppointsByUserId = async (id) => {
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
		limit: 3,
	});
	return appointmentsByUserId;
};

/////////////////////////////////////////////////////////////////
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
	GetFollowingThreeAppointsByUserId,
	// to use at middleware: checkAppointmentUserStorePet
	getAppointUserStorePet,
};
