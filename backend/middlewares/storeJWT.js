//import jwt helper
const { decodeToken } = require("../utils/jwtHelper");

const storeJWT = (req, res, next) => {
	//Sent 401 if req.decodeUserId exists, bc this is an middle for only stores endpoints
	if (req.decodeUserId) {
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
                "storeID": 1,
                "storeEmail": "tienda1@gmail.com",
                "verified": false,
                "iat": 1672931998,
                "exp": 1673536798
            }
			*/
			//if token is real => it has if user is verified or not
			if (tokenData.storeEmail) {
				if (tokenData.verified === true) {
					//console.log(tokenData);
					req.decodeStoreId = tokenData.storeID;
					next();
				} else if (tokenData.verified === false) {
					res.status(401).json({ error: "Store not verified" });
				}
			}
		} catch (error) {
			res.status(400).json({ error: "Fake token" });
		}
	}
};

module.exports = { storeJWT };
