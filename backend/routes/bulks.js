const express = require("express");
const router = express.Router();

//Import models for bulks
const User = require("../db/models/User");
const Store = require("../db/models/Store");
const Pet = require("../db/models/Pet");

//Routes
router.get("/5users", async (req, res) => {
	const bulk5Users = await User.bulkCreate([
		{
			first_name: "Susana",
			last_name: "defaultPass 123",
			email: "susana1@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
		},
		{
			first_name: "Susana2",
			last_name: "Horia",
			email: "susana2@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
		},
		{
			first_name: "Susana3",
			last_name: "Horia",
			email: "susana3@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
		},
		{
			first_name: "Susana4",
			last_name: "Horia",
			email: "susana4@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
		},
		{
			first_name: "Susana5",
			last_name: "Horia",
			email: "susana5@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
		},
	]);

	res.status(201).json({ added: "ok", bulk5Users });
});

router.get("/5stores", async (req, res) => {
	const bulk5Stores = await Store.bulkCreate([
		{
			name: "Tienda 1",
			email: "tienda1@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
			phone_number: "547634123",
			address: "Calle A",
			address_number: 04,
			apartment: "info extra 9D",
			zip: 1744,
			barrio: "Caballito",
			province: "Buenos Aires",
		},
		{
			name: "Tienda 2",
			email: "tienda2@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
			phone_number: "547634123",
			address: "Calle B",
			address_number: 04,
			apartment: "info extra azul",
			zip: 1744,
			barrio: "Moreno",
			province: "Buenos Aires",
		},
		{
			name: "Tienda 3",
			email: "tienda3@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
			phone_number: "547634123",
			address: "Calle C",
			address_number: 04,
			apartment: "info extra 9D",
			zip: 1744,
			barrio: "Centro",
			province: "Bariloche",
		},
		{
			name: "Tienda 4",
			email: "tienda4@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
			phone_number: "547634123",
			address: "Calle D",
			address_number: 04,
			apartment: "info extra 9D",
			zip: 1744,
			barrio: "Almagro",
			province: "Buenos Aires",
		},
		{
			name: "Tienda 5",
			email: "tienda5@gmail.com",
			password: "$2a$08$JKIfAVrkowI./YqXqAg1x.l349yzH/exTf7BhrhGeIL9maAp5r1ja",
			phone_number: "547634123",
			address: "Calle E",
			address_number: 04,
			apartment: "info extra 9D",
			zip: 1744,
			barrio: "Palermo",
			province: "Buenos Aires",
		},
	]);

	res.status(201).json({ added: "ok", bulk5Stores });
});

router.get("/5pets", async (req, res) => {
	const bulk5Pets = await Pet.bulkCreate([
		{
			name: "Katy",
			type: "Dog",
			breed: "ex",
			age: 8,
			gender: "female",
			extra_info_one: "Hermosa",
			extra_info_two: "Tranquila",
			extra_info_three: "No juega",
		},
		{
			name: "Ruffo",
			type: "Dog",
			breed: "Golden Retriever",
			age: 2,
			gender: "male",
			extra_info_one: "tam mediano",
		},
		{
			name: "Daisy",
			type: "Dog",
			breed: "ex",
			age: 5,
			gender: "male",
			extra_info_one: "negrita",
		},
		{
			name: "Luna",
			type: "Dog",
			breed: "ex",
			age: 4,
			gender: "female",
		},
		{
			name: "Samuel",
			type: "Dog",
			breed: "ex",
			age: 7,
			gender: "male",
		},
	]);

	res.status(201).json({ added: "ok", bulk5Pets });
});

module.exports = router;
