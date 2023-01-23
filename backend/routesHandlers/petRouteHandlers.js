//Controller imports
const {
	getAllPets,
	createPet,
	getPetById,
	updatePetById,
	getPetsByUserId,
} = require("../modelsControllers/petController");

const { getAllPetTypes } = require("../modelsControllers/petTypeController");
const {
	getAllPetsBreeds,
	getAllBreedsByTypeId,
} = require("../modelsControllers/petBreedController");

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

// get all pets in DB
const newPetByOwnerPOST = async (req, res) => {
	//first, get the information
	let {
		name,
		age,
		gender,
		extra_info_one,
		extra_info_two,
		extra_info_three,
		petTypeId,
		PetBreedId,
	} = req.body;

	let userId = req.decodeUserId;

	//Create petDataObj for query data.
	let petDataObj = {};
	if (name != undefined) {
		petDataObj.name = name;
	}
	if (age != undefined) {
		petDataObj.age = age;
	}
	if (gender != undefined) {
		petDataObj.gender = gender;
	}
	if (extra_info_one != undefined) {
		petDataObj.extra_info_one = extra_info_one;
	}
	if (extra_info_two != undefined) {
		petDataObj.extra_info_two = extra_info_two;
	}
	if (extra_info_three != undefined) {
		petDataObj.extra_info_three = extra_info_three;
	}
	petDataObj.UserId = userId;
	if (petTypeId != undefined) {
		petDataObj.PetTypeId = petTypeId;
	}
	if (PetBreedId != undefined) {
		petDataObj.PetBreedId = PetBreedId;
	}
	//console.log(petDataObj);
	let newPetByuserId = await createPet(petDataObj);
	return res.status(201).json({ newPetByuserId });
};

//USER
//User get his pets by userId -> jwt
const getUsersPetsByUserId = async (req, res) => {
	//get user id from jwt decoded
	let userId = req.decodeUserId;
	let userId2 = req.params.id;
	// console.log("segun json: ", userId);
	// console.log("segun param: ", userId2);
	try {
		let userPets = await getPetsByUserId(userId);
		return res.status(200).json({ userPets });
	} catch (error) {
		return res.status(500).json({ error });
	}
};

//For front use cases:
//Get all pet types
const GETAllTypes = async (req, res) => {
	try {
		let allPetTypes = await getAllPetTypes();
		return res.status(200).json({ allPetTypes });
	} catch (error) {
		return res
			.status(500)
			.json({ error, errorMessage: "internal error trying query" });
	}
};
//Get all breeds:
const GETAllBreeds = async (req, res) => {
	try {
		let allPetsBreeds = await getAllPetsBreeds();
		return res.status(200).json({ allPetsBreeds });
	} catch (error) {
		return res
			.status(500)
			.json({ error, errorMessage: "internal error trying query" });
	}
};

//Get breeds by pet type id:
const GETBreedsByPetTypeId = async (req, res) => {
	let typeId = Number(req.params.typeId);
	//Make conditional if there is no typeId param
	if (!typeId) {
		return res.status(400).json({
			error: true,
			errorMessage: "No typeId param",
		});
	}
	//Make query
	try {
		let allPetsBreedsByTypeId = await getAllBreedsByTypeId(typeId);
		return res.status(200).json({ allPetsBreedsByTypeId });
	} catch (error) {
		return res
			.status(500)
			.json({ error, errorMessage: "internal error trying query" });
	}
};

module.exports = {
	indexGET,
	petInfoPOST,
	newPetByOwnerPOST,
	getUsersPetsByUserId,
	GETAllTypes,
	GETAllBreeds,
	GETBreedsByPetTypeId,
};
