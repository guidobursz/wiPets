//import model
const User = require("../db/models/User.js");

const getAllUsers = async () => {
  let allUsers = await User.findAll();
  return allUsers;
};

const getUserById = async (id) => {
  let userById = await User.findOne({ where: { id } });
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

module.exports = { getAllUsers, getUserById, updateUserById };
