const express = require("express");
const router = express.Router();

//Model
// const pet = require("../db/models/pet");

//Controller imports
const {
	getAllPets,
	getPetById,
	updatePetById,
} = require("../controllers/petController");

//Routes
// get all pets in DB
router.get("/", async (req, res) => {
	let allpets = await getAllPets();
	return res.status(200).json({ allpets });
});

//Get pet data by ID
router.post("/pet/:id", async (req, res) => {
	let { id } = req.params;

	let petByID = await getPetById(id);
	res.status(200).json({ petByID });
});

/* 
 Update pet data
    router.put("/pet/:id", async (req, res) => {
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
            let petUpdated = await updatepetById(updateData, id);
            //get new pet info query
            let petDataUpdated = await getpetById(id);

            res.status(200).json({ petDataUpdated });
        } catch (error) {}
    });
*/

module.exports = router;
