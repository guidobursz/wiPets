//import model controllers:
const {
	checkStoreEmailExist,
	createStore,
	storeLogin,
} = require("../modelsControllers/storeController");

const { checkUserEmailExist } = require("../modelsControllers/userController");

//Utils
const { encrypt, hashCompare } = require("../utils/bcryptsjsHelper.js");
const { signToken7Days } = require("../utils/jwtHelper.js");

//Models
const User = require("../db/models/User.js");
const Store = require("../db/models/Store");
const Service = require("../db/models/Service");

//Handlers:
//User register
const userRegisterPOST = async (req, res) => {
	let { name, lastname, email, password, birthday, phone } = req.body;

	//create password hash & upload to db
	try {
		//First if user with email exists:
		//check if email already exists. (true exists, false does not exist)
		let existEmail = await checkUserEmailExist(email);

		if (existEmail === true) {
			res.status(400).json({ error: "User with that email already exists" });
		} else if (existEmail === false) {
			//hash password:
			let hashP = await encrypt(password);
			//sent to db:
			let newUser = await User.create({
				first_name: name,
				last_name: lastname,
				email,
				password: hashP,
				birthday,
				phone_number: phone,
				verified: false,
			});
			return res.status(202).json({ newUser });
		}
	} catch (error) {
		console.log("Error", error);
		return res.status(500).json({ error });
	}
};
//User login
const userLoginPOST = async (req, res) => {
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
					userLastName: userData.last_name,
					userFirstName: userData.first_name,
					userEmail: userData.email,
					verified: userData.verified,
				});

				//return response
				return res.status(200).json({ userData, jwtToken });
			}
		}
	} catch (error) {
		console.log("Login error: ", error);
	}
};

//Store register
const storeRegisterPost = async (req, res) => {
	let {
		name,
		service_types, // [1,2]
		email,
		password,
		phone_number,
		address,
		address_number,
		apartment,
		province,
		barrio,
		zip,
	} = req.body;

	//check if email already exists. (true exists, false does not exist)
	let existEmail = await checkStoreEmailExist(email);

	if (existEmail === true) {
		res.status(400).json({ error: "Store with that email already exists" });
	} else if (existEmail === false) {
		//create new store
		//1) hash password:
		//hash password:
		let passwordHash = await encrypt(password);

		//2) create obj with data:
		let dataObj = {
			name,
			email,
			password: passwordHash,
			verified: false,
			phone_number,
			address,
			address_number,
			apartment,
			province,
			barrio,
			zip,
		};
		//3) insert query
		try {
			//let newStore = dataObj;
			let newStore = await createStore(dataObj);

			//insert the services types with the related join table: store_service
			await newStore.addServices(service_types);

			res.status(201).json({ newStore });
		} catch (error) {
			res
				.status(500)
				.json({
					Error: true,
					errorMessage: "Error al intentar crear tienda",
					error,
				});
		}
	}
};
//Store login
const storeLoginPost = async (req, res) => {
	const { email, password } = req.body;

	//check inputs:
	if (email === undefined) {
		return res.status(400).json({ error: "Not email included" });
	}
	if (password === undefined) {
		return res.status(400).json({ error: "Not password included" });
	}

	try {
		//check if email already exists. (true exists, false does not exist)
		let storeAcc = await storeLogin(email);

		if (storeAcc === false) {
			res.status(400).json({ error: "Email not vinculated to any store" });
		} else if (storeAcc) {
			//login logic:
			//1) compare password introduced with hash in db.
			let hashComparation = await hashCompare(password, storeAcc.password);

			//if hashComparation its true, create JWT

			if (hashComparation === false) {
				return res.status(401).json({ error: "Password incorrect" });
			}
			if (hashComparation === true) {
				// Create JWT x 7 days
				let jwtToken = signToken7Days({
					storeID: storeAcc.id,
					storeName: storeAcc.first_name,
					storeEmail: storeAcc.email,
					verified: storeAcc.verified,
				});
				//return response
				return res.status(200).json({ storeAcc, jwtToken });
			}
		}
	} catch (err) {
		res.status(500).json({ error: "Email not vinculated to any store", err });
	}
};

module.exports = {
	userRegisterPOST,
	userLoginPOST,
	storeRegisterPost,
	storeLoginPost,
};
