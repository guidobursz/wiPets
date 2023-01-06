//import jwt helper
const { decodeToken } = require("../utils/jwtHelper");

const {
	getAppointUserStorePet,
} = require("../modelsControllers/appointmentController");

const checkAppointmentUserStorePet = async (req, res, next) => {
	let availableIDS = await getAppointUserStorePet(req.params.id);
	let userEnabledId = availableIDS.UserId || "no";
	let storeEnabledId = availableIDS.StoreId || "no";
	//check if in availablesIDS its: req.decodeUserId OR req.decodeStoreId
	if (
		userEnabledId === req.decodeUserId ||
		storeEnabledId === req.decodeStoreId
	) {
		next();
	} else {
		return res.status(401).json({ error: "Account not allowed to access." });
	}
};

module.exports = { checkAppointmentUserStorePet };
