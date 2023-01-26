const express = require("express");
const router = express.Router();

//import middlewares

//Import utils/queries
const { getAllServices } = require("../modelsControllers/generalController");

//Routes
router.get("/services", async (req, res) => {
  //try service query
  try {
    let servicesAv = await getAllServices();
    return res.status(200).json({ servicesAv });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
