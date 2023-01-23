const PetBreed = require("../db/models/PetBreed");

//For front use case:
const getAllPetsBreeds = async () => {
	let allBreeds = await PetBreed.findAll();
	// console.log(allTypes);
	return allBreeds;
};

//Get all breeds by pet type id
const getAllBreedsByTypeId = async (typeId) => {
	let allBreedsByPetTypeId = await PetBreed.findAll({
		where: {
			PetTypeId: typeId,
		},
	});
	return allBreedsByPetTypeId;
};

module.exports = { getAllPetsBreeds, getAllBreedsByTypeId };
