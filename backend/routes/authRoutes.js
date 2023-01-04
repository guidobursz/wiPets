const express = require("express");
const router = express.Router();

//Utils
const { encrypt, hashCompare } = require("../utils/bcryptsjsHelper.js");
const { signToken7Days } = require("../utils/jwtHelper.js");

//Models
const User = require("../db/models/User.js");

//Routes:
//User register
router.post("/user/register", async (req, res) => {
  let { name, lastname, email, password } = req.body;

  //create password hash & upload to db
  try {
    //hash password:
    let hashP = await encrypt(password);
    //sent to db:
    let newUser = await User.create({
      first_name: name,
      last_name: lastname,
      email,
      password: hashP,
    });
    return res.status(202).json({ newUser });
  } catch (error) {
    console.log("Error", error);
  }
});

//User login
router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  //Search for one user with introduced email
  try {
    let userData = await User.findOne({
      where: {
        email,
      },
    });

    //if user exists, userData.id exists, otherwhise no.
    if (userData === null) {
      return res.status(401).json({ error: "Email does not exist" });
    }

    if (userData.id != null) {
      //get hash password from db
      let hashPassDB = userData.password;
      //compare password
      let hashComparation = await hashCompare(password, hashPassDB);
      //if hashComparation its true, create JWT.

      if (hashComparation === false) {
        return res.status(401).json({ error: "Password incorrect" });
      }
      if (hashComparation === true) {
        // Create JWT x 7 days
        let jwtToken = signToken7Days({
          userID: userData.id,
          lastName: userData.last_name,
          firstName: userData.first_name,
          userEmail: userData.email,
        });
        //return response
        return res.status(200).json({ userData, jwtToken });
      }
    }
  } catch (error) {
    console.log("Login error: ", error);
  }
});

module.exports = router;
