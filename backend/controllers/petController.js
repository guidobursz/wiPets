//import model
const Pet = require("../db/models/Pet.js");

const getAllPets = async () => {
	let allPets = await Pet.findAll();
	return allPets;
};

const getPetById = async (id) => {
	let petById = await Pet.findOne({ where: { id } });
	return petById;
};

const updatePetById = async (data, id) => {
	let petUpdated = await Pet.update(data, {
		where: {
			id,
		},
	});
	return petUpdated;
};

module.exports = { getAllPets, getPetById, updatePetById };
