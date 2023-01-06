//Controller imports
const {
	getAllPets,
	createPet,
	getPetById,
	updatePetById,
	getPetsByUserId,
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

	try {
		let userPets = await getPetsByUserId(userId);
		return res.status(200).json({ userPets });
	} catch (error) {
		return res.status(500).json({ error });
	}
};

module.exports = {
	indexGET,
	petInfoPOST,
	newPetByOwnerPOST,
	getUsersPetsByUserId,
};
