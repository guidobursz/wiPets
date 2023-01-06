const express = require("express");
const router = express.Router();

//import middlewares
const { userJWT } = require("../middlewares/userJWT");
const { storeJWT } = require("../middlewares/storeJWT");

//handlers import
const {
	indexGET,
	petInfoPOST,
	newPetByOwnerPOST,
	getUsersPetsByUserId,
} = require("../routesHandlers/petRouteHandlers");

//Routes
// get all pets in DB
router.get("/", indexGET);

//Get pet data by ID
router.post("/pet/:id", petInfoPOST);

//USER
//Create new Pet by owner (userId)
router.post("/pet", userJWT, newPetByOwnerPOST);
//User sees only his pets.
router.get("/user", userJWT, getUsersPetsByUserId);

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
