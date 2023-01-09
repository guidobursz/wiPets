//This middleware checks if jwtToken ID === req.params.storeId.

const checkStoreIDbyJWT = (req, res, next) => {
	//Sent 401 if req.decodeUserId exists, bc this is an middle for only stores endpoints
	if (req.decodeUserId) {
		return res.status(401).json({
			error: "You dont have acces to this enpoint",
			Access: "Only Stores Accounts",
		});
	}

	//If comparation is equal => pass
	if (req.decodeStoreId == req.params.storeId) {
		next();
	} else {
		return res.status(401).json({
			error: "Not Store account",
			messagge: "Not logged as the profile you want to reach",
		});
	}
};

module.exports = { checkStoreIDbyJWT };
