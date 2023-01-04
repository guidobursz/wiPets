const express = require("express");
const router = express.Router();

//User model import
// const User = require("../db/models/User");

//Controller imports
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../controllers/userController.js");

//Routes
// get all users in DB
router.get("/", async (req, res) => {
  let allUsers = await getAllUsers();
  return res.status(200).json({ allUsers });
});

//Get user data by ID
router.post("/user/:id", async (req, res) => {
  let { id } = req.params;

  let userByID = await getUserById(id);
  res.status(200).json({ userByID });
});

//Update user data
router.put("/user/:id", async (req, res) => {
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
    let userUpdated = await updateUserById(updateData, id);
    //get new user info query
    let userDataUpdated = await getUserById(id);

    res.status(200).json({ userDataUpdated });
  } catch (error) {}
});

module.exports = router;
