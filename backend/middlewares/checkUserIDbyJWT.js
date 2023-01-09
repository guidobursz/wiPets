//This middleware checks if jwtToken ID === req.params.userId.
const checkUserIDbyJWT = (req, res, next) => {
	//Sent 401 if req.decodeStoreId exists, bc this is an middle for only user endpoints
	if (req.decodeStoreId) {
		return res.status(401).json({
			error: "You dont have acces to this enpoint",
			Access: "Only Users Accounts",
		});
	}
	//If comparation is equal => pass
	if (req.decodeUserId == req.params.userId) {
		next();
	} else {
		return res.status(401).json({
			error: "Not user account",
			messagge: "Not logged as the profile you want to reach",
		});
	}
};

module.exports = { checkUserIDbyJWT };
