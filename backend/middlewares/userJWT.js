//import jwt helper
const { decodeToken } = require("../utils/jwtHelper");

const userJWT = (req, res, next) => {
	//Sent 401 if req.decodeStoreId exists, bc this is an middle for only user endpoints
	if (req.decodeStoreId) {
		return res.status(401).json({
			error: "You dont have acces to this enpoint",
			Access: "Only Stores Accounts",
		});
	}
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
  				userID: 1,
				lastName: 'Bursztyn',
				firstName: 'Guido',
				userEmail: 'guido@hotmail.com',
				verified: false,
				iat: 1672926358,
				exp: 1673531158
			}
			*/
			//if token is real => it has if user is verified or not
			if (tokenData.userID) {
				if (tokenData.verified === true) {
					req.decodeUserId = tokenData.userID;
					next();
				} else if (tokenData.verified === false) {
					res.status(401).json({ error: "User not verified" });
				}
			}
		} catch (error) {
			res.status(400).json({ error: "Fake token" });
		}
	}
};

module.exports = { userJWT };
