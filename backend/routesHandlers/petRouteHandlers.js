//Controller imports
const {
	getAllPets,
	getPetById,
	updatePetById,
} = require("../modelsControllers/petController");

//handlers:
// get all pets in DB
const indexGET = async (req, res) => {
	let allpets = await getAllPets();
	return res.status(200).json({ allpets });
};
//Get pet data by ID
const petInfoPOST = async (req, res) => {
	let { id } = req.params;

	let petByID = await getPetById(id);
	res.status(200).json({ petByID });
};

module.exports = { indexGET, petInfoPOST };
