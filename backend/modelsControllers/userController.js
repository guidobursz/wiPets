//import model
const User = require("../db/models/User.js");

const getAllUsers = async () => {
	let allUsers = await User.findAll();
	return allUsers;
};

const getUserById = async (id) => {
	let userById = await User.findOne({
		where: { id },
		attributes: { exclude: ["password"] },
	});
	return userById;
};

const updateUserById = async (data, id) => {
	let userUpdated = await User.update(data, {
		where: {
			id,
		},
	});
	return userUpdated;
};

const checkUserEmailExist = async (email) => {
	let response = await User.findOne({ where: { email } });
	//console.log("tal resposne: ", response);
	if (response === null) {
		return false;
	} else if (response.id) {
		return true;
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	updateUserById,
	checkUserEmailExist,
};
