const PetType = require("../db/models/PetType");

//For front use case:
const getAllPetTypes = async () => {
	let allTypes = await PetType.findAll();
	// console.log(allTypes);
	return allTypes;
};

module.exports = { getAllPetTypes };
