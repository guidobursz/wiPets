//import model
const Pet = require("../db/models/Pet.js");

const PetBreed = require("../db/models/PetBreed");

const getAllPets = async () => {
	let allPets = await Pet.findAll();
	return allPets;
};

const createPet = async (data) => {
	let newPet = await Pet.create(data);
	return newPet;
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

//USER
//See userspet by usersId
const getPetsByUserId = async (userId) => {
	let usersPets = await Pet.findAll({
		where: {
			UserId: userId,
		},
	});
	return usersPets;
};

module.exports = {
	getAllPets,
	createPet,
	getPetById,
	updatePetById,
	getPetsByUserId,
};
