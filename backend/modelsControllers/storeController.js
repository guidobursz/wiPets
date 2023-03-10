//import model
const Store = require("../db/models/Store");
const Service = require("../db/models/Service");

//Imp sequelzie helper
const { Op } = require("sequelize");

const getAllStores = async () => {
	let allStores = await Store.findAll();
	return allStores;
};

const getAllVerifiedStoresORIGINAL = async (words) => {
	//words will be = [''] or max = ['','','']
	//let words = [];
	let [w1 = "nono", w2 = "nono", w3 = "nono"] = words;

	// console.log("search word1 : ", w1);
	// console.log("search word2 : ", w2);
	// console.log("search word3 : ", w3);

	let allVerifiedStores = await Store.findAll({
		where: {
			verified: true,
			type: {
				[Op.or]: [
					{ [Op.substring]: w1 },
					{ [Op.substring]: w2 },
					{ [Op.substring]: w3 },
				],
			},
		},
	});
	return allVerifiedStores;
};
//back up using fight now in frontend
const getAllVerifiedStores = async (filters) => {
	//filters will be: { storeName: 'loka 2', services: [ '1', '2', '3' ] }
	let allVerifiedStores = await Store.findAll({
		attributes: ["id", "name", "province", "barrio"],
		where: {
			name: {
				[Op.substring]: filters.storeName,
			},
			verified: true,
			province: {
				[Op.substring]: filters.province,
			},
			barrio: {
				[Op.substring]: filters.barrio,
			},
		},
		include: [
			{
				model: Service,
				where: {
					id: filters.services,
				},
				attributes: ["id", "description"],
				through: { attributes: [] },
			},
		],
	});
	return allVerifiedStores;
};

const createStore = async (data) => {
	let newStore = await Store.create(data, {
		include: [
			{
				model: Service,
				through: { attributes: [] },
			},
		],
	});
	return newStore;
};

const getStoreById = async (id) => {
	let storeById = await Store.findOne({
		where: { id },
		attributes: { exclude: ["password"] },
		include: [
			{
				model: Service,
				through: { attributes: [] },
			},
		],
	});
	return storeById;
};

const updateStoreById = async (data, id) => {
	let storeUpdated = await Store.update(data, {
		where: {
			id,
		},
	});
	return storeUpdated;
};
//Function that response true if store with that email exists, and return false if the email is not in the list
const checkStoreEmailExist = async (email) => {
	let response = await Store.findOne({ where: { email } });
	//console.log("tal resposne: ", response);
	if (response === null) {
		return false;
	} else if (response.id) {
		return true;
	}
};

const storeLogin = async (email) => {
	let storeByEmail = await Store.findOne({
		where: { email },
	});
	if (storeByEmail === null) {
		return false;
	} else if (storeByEmail.id) {
		return storeByEmail;
	}
};

module.exports = {
	getAllStores,
	getAllVerifiedStores,
	createStore,
	getStoreById,
	updateStoreById,
	checkStoreEmailExist,
	storeLogin,
};
