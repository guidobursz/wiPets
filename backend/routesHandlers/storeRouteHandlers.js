//Controller imports
const {
	getAllStores,
	getAllVerifiedStores,
	createStore,
	getStoreById,
	updateStoreById,
} = require("../modelsControllers/storeController.js");

//handlers:
// get all stores in DB
const indexGET = async (req, res) => {
	let allStores = await getAllStores();
	return res.status(200).json({ allStores });
};

const verifiedStoresPOST = async (req, res) => {
	let allVStores = await getAllVerifiedStores();
	return res.status(200).json({ allVStores });
};

//Get store data by ID
const storeInfoGET = async (req, res) => {
	let { id } = req.params;

	let storeByID = await getStoreById(id);
	res.status(200).json({ storeByID });
};
//Update store data
const storeUpdatePUT = async (req, res) => {
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
		let storeUpdated = await updateStoreById(updateData, id);
		//get new store info query
		let storeDataUpdated = await getStoreById(id);

		res.status(200).json({ storeDataUpdated });
	} catch (error) {}
};
module.exports = {
	indexGET,
	verifiedStoresPOST,
	storeInfoGET,
	storeUpdatePUT,
};
