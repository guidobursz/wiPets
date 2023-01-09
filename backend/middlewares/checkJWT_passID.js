//will use it when neutral endpoints (usable by user & accs.)
//So here i will pass a neutral id as che StoreJWT/userJWT does.

//import jwt helper
const { decodeToken } = require("../utils/jwtHelper");

const checkJWT_passID = (req, res, next) => {
	//Get complete header auth
	let tokenHeader = req.headers.authorization;

	if (!tokenHeader) {
		res.status(401).json({ error: "No token" });
	} else {
		//Get token alone. EX: Bearer ASDSADSADS
		let token = tokenHeader.split(" ").pop();

		//check if token is right
		try {
			//try decode token
			let tokenData = decodeToken(token);
			/*
			    console.log("TOKEN DATA:", tokenData);
			    TOKEN DATA: {
                    "storeID": 1,
                    "storeEmail": "tienda1@gmail.com",
                    "verified": false,
                    "iat": 1672931998,
                    "exp": 1673536798
                }
                or
                {
                "userID": 6,
                "userLastName": "Bursztyn",
                "userFirstName": "Guido",
                "userEmail": "guido@hotmail.com",
                "verified": true,
                "iat": 1673034328,
                "exp": 1673639128
                }
            
            */

			//if token is real => it has if user is verified or not
			if (tokenData) {
				if (tokenData.verified === true) {
					if (tokenData.storeID) {
						//console.log("store  mmiddle general");
						req.decodeStoreId = tokenData.storeID;
						next();
					} else if (tokenData.userID) {
						//console.log("user mmiddle general");
						req.decodeUserId = tokenData.userID;
						next();
					}
				} else if (tokenData.verified === false) {
					return res.status(401).json({ error: "Account not verified" });
				}
			}
		} catch (error) {
			res.status(400).json({ error: "Fake token" });
		}
	}
};

module.exports = { checkJWT_passID };
