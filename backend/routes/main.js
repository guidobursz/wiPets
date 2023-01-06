const express = require("express");
const router = express.Router();

//import middlewares
// const { userJWT } = require("../middlewares/userJWT");
// const { storeJWT } = require("../middlewares/storeJWT");
const { checkAccVerified } = require("../middlewares/checkAccVerified.js");

//Index, will use as kind of index of endpoints
router.get("/", [checkAccVerified], (req, res) => {
  res.status(200).json([
    {
      endpoint: "/",
      method: "GET",
      description: "overview of all endpoints",
    },
    {
      endpoint: "/auth",
      method: "POST",
      description: "faltan",
    },
    {
      endpoint: "/bulks/5users",
      method: "GET",
      description: "add 5 users to db",
    },
  ]);
});

//Routing:
router.use("/auth", require("./authRoutes"));
router.use("/appointments", require("./appointmentsRoutes"));
router.use("/users", require("./usersRoutes"));
router.use("/stores", require("./storesRoutes"));
router.use("/pets", require("./petsRoutes"));

//routes for bulk inserts, for dummy examples:
router.use("/bulks", require("./bulksRoutes"));

module.exports = router;
