//import model
const Store = require("../db/models/Store");

const getAllStores = async () => {
	let allStores = await Store.findAll();
	return allStores;
};

const createStore = async (data) => {
	let newStore = await Store.create(data);
	return newStore;
};

const getStoreById = async (id) => {
	let storeById = await Store.findOne({
		where: { id },
		attributes: { exclude: ["password"] },
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
	createStore,
	getStoreById,
	updateStoreById,
	checkStoreEmailExist,
	storeLogin,
};
