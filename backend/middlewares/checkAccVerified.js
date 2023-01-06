//import jwt helper
const { decodeToken } = require("../utils/jwtHelper");

const checkAccVerified = (req, res, next) => {
  //Get complete header auth
  let tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({ error: "No token" });
  } else {
    //Get token alone. EX: Bearer ASDSADSADS
    let token = tokenHeader.split(" ").pop();

    //check if token is right
    try {
      //try decode token
      let tokenData = decodeToken(token);
      /*
      Token could be an user token or an store token
			console.log("TOKEN DATA:", tokenData);
			TOKEN DATA: {
                "storeID": 1,
                "storeEmail": "tienda1@gmail.com",
                "verified": false,
                "iat": 1672931998,
                "exp": 1673536798
            }
			*/
      //if token is real => it has if user is verified or not
      if (tokenData) {
        if (tokenData.verified === true) {
          next();
        } else if (tokenData.verified === false) {
          return res.status(401).json({ error: "Account not verified" });
        }
      }
    } catch (error) {
      return res.status(400).json({ error: "Fake token" });
    }
  }
};

module.exports = { checkAccVerified };
