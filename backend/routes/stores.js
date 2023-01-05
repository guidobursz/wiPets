const express = require("express");
const router = express.Router();

//Controller imports
const {
	getAllStores,
	createStore,
	getStoreById,
	updateStoreById,
} = require("../controllers/storeController.js");

//Routes
// get all stores in DB
router.get("/", async (req, res) => {
	let allStores = await getAllStores();
	return res.status(200).json({ allStores });
});

//Get store data by ID
router.post("/store/:id", async (req, res) => {
	let { id } = req.params;

	let storeByID = await getStoreById(id);
	res.status(200).json({ storeByID });
});

//Update store data
router.put("/store/:id", async (req, res) => {
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
});

module.exports = router;
