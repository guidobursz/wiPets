//Import models for bulks
const User = require("../db/models/User");
const Store = require("../db/models/Store");
const Pet = require("../db/models/Pet");
const PetBreed = require("../db/models/PetBreed");
const PetType = require("../db/models/PetType");
const Status = require("../db/models/Status");

//Create 5 users
const fiveUsersGET = async (req, res) => {
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
};

const fiveStoresGET = async (req, res) => {
	const bulk5Stores = await Store.bulkCreate([
		{
			name: "Tienda 1",
			type: "washer",
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
			type: "vet",
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
			type: "vet hair",
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
			type: "vet hair washer",
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
			type: "vet washer",
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
};

const fivePetsGET = async (req, res) => {
	const bulk5Pets = await Pet.bulkCreate([
		{
			name: "Katy",
			age: 8,
			gender: "female",
			extra_info_one: "Hermosa",
			extra_info_two: "Tranquila",
			extra_info_three: "No juega",
			userId: 3,
			PetTypeId: 1,
			PetBreedId: 10,
		},
		{
			name: "Ruffo",
			age: 2,
			gender: "male",
			extra_info_one: "tam mediano",
			userId: 3,
			PetTypeId: 5,
			PetBreedId: 23,
		},
		{
			name: "Daisy",

			age: 5,
			gender: "male",
			extra_info_one: "negrita",
			userId: 3,
			PetTypeId: 3,
			PetBreedId: 52,
		},
		{
			name: "Luna",
			age: 4,
			gender: "female",
			userId: 3,
			PetTypeId: 2,
			PetBreedId: 32,
		},
		{
			name: "Samuel",
			age: 7,
			gender: "male",
			userId: 3,
			PetTypeId: 1,
			PetBreedId: 72,
		},
		{
			name: "Manuelita",
			age: 1,
			gender: "Female",
			userId: 2,
			PetTypeId: 4,
			PetBreedId: 72,
		},
	]);

	res.status(201).json({ added: "ok", bulk5Pets });
};

const breedsGET = async (req, res) => {
	{
		const PetBreeds = await PetBreed.bulkCreate([
			{ name: "Affenpinscher" },
			{ name: "Airedale terrier" },
			{ name: "Akita" },
			{ name: "Akita americano" },
			{ name: "Alaskan Husky" },
			{ name: "Alaskan malamute" },
			{ name: "American Foxhound" },
			{ name: "American pit bull terrier" },
			{ name: "American staffordshire terrier" },
			{ name: "Ariegeois" },
			{ name: "Artois" },
			{ name: "Australian silky terrier" },
			{ name: "Australian Terrier" },
			{ name: "Austrian Black & Tan Hound" },
			{ name: "Azawakh" },
			{ name: "Balkan Hound" },
			{ name: "Basenji" },
			{ name: "Basset Alpino (Alpine Dachsbracke)" },
			{ name: "Basset Artesiano Normando" },
			{
				name: "Basset Azul de Gascuña (Basset Bleu de Gascogne)",
			},
			{ name: "Basset de Artois" },
			{ name: "Basset de Westphalie" },
			{ name: "Basset Hound" },
			{
				name: "Basset Leonado de Bretaña (Basset fauve de Bretagne)",
			},
			{ name: "Bavarian Mountain Scenthound" },
			{ name: "Beagle" },
			{ name: "Beagle Harrier" },
			{ name: "Beauceron" },
			{ name: "Bedlington Terrier" },
			{ name: "Bichon Boloñes" },
			{ name: "Bichón Frisé" },
			{ name: "Bichón Habanero" },
			{ name: "Billy" },
			{ name: "Black and Tan Coonhound" },
			{ name: "Bloodhound (Sabueso de San Huberto)" },
			{ name: "Bobtail" },
			{ name: "Boerboel" },
			{ name: "Border Collie" },
			{ name: "Border terrier" },
			{ name: "Borzoi" },
			{ name: "Bosnian Hound" },
			{ name: "Boston terrier" },
			{ name: "Bouvier des Flandres" },
			{ name: "Boxer" },
			{ name: "Boyero de Appenzell" },
			{ name: "Boyero de Australia" },
			{ name: "Boyero de Entlebuch" },
			{ name: "Boyero de las Ardenas" },
			{ name: "Boyero de Montaña Bernes" },
			{ name: "Braco Alemán de pelo corto" },
			{ name: "Braco Alemán de pelo duro" },
			{ name: "Braco de Ariege" },
			{ name: "Braco de Auvernia" },
			{ name: "Braco de Bourbonnais" },
			{ name: "Braco de Saint Germain" },
			{ name: "Braco Dupuy" },
			{ name: "Braco Francés" },
			{ name: "Braco Italiano" },
			{ name: "Broholmer" },
			{ name: "Buhund Noruego" },
			{ name: "Bull terrier" },
			{ name: "Bulldog americano" },
			{ name: "Bulldog inglés" },
			{ name: "Bulldog francés" },
			{ name: "Bullmastiff" },
			{ name: "Ca de Bestiar" },
			{ name: "Cairn terrier" },
			{ name: "Cane Corso" },
			{ name: "Cane da Pastore Maremmano-Abruzzese" },
			{ name: "Caniche (Poodle)" },
			{ name: "Caniche Toy (Toy Poodle)" },
			{ name: "Cao da Serra de Aires" },
			{ name: "Cao da Serra de Estrela" },
			{ name: "Cao de Castro Laboreiro" },
			{ name: "Cao de Fila de Sao Miguel" },
			{ name: "Cavalier King Charles Spaniel" },
			{ name: "Cesky Fousek" },
			{ name: "Cesky Terrier" },
			{ name: "Chesapeake Bay Retriever" },
			{ name: "Chihuahua" },
			{ name: "Chin" },
			{ name: "Chow Chow" },
			{ name: "Cirneco del Etna" },
			{ name: "Clumber Spaniel" },
			{ name: "Cocker Spaniel Americano" },
			{ name: "Cocker Spaniel Inglés" },
			{ name: "Collie Barbudo" },
			{ name: "Collie de Pelo Cort" },
			{ name: "Collie de Pelo Largo" },
			{ name: "Cotón de Tuléar" },
			{ name: "Curly Coated Retriever" },
			{ name: "Dálmata" },
			{ name: "Dandie dinmont terrier" },
			{ name: "Deerhound" },
			{ name: "Dobermann" },
			{ name: "Dogo Argentino" },
			{ name: "Dogo de Burdeos" },
			{ name: "Dogo del Tibet" },
			{ name: "Drentse Partridge Dog" },
			{ name: "Drever" },
			{ name: "Dunker" },
			{ name: "Elkhound Noruego" },
			{ name: "Elkhound Sueco" },
			{ name: "English Foxhound" },
			{ name: "English Springer Spaniel" },
			{ name: "English Toy Terrier" },
			{ name: "Epagneul Picard" },
			{ name: "Eurasier" },
			{ name: "Fila Brasileiro" },
			{ name: "Finnish Lapphound" },
			{ name: "Flat Coated Retriever" },
			{ name: "Fox terrier de pelo de alambre" },
			{ name: "Fox terrier de pelo liso" },
			{ name: "Foxhound Inglés" },
			{ name: "Frisian Pointer" },
			{ name: "Galgo Español" },
			{ name: "Galgo húngaro (Magyar Agar)" },
			{ name: "Galgo Italiano" },
			{ name: "Galgo Polaco (Chart Polski)" },
			{ name: "Glen of Imaal Terrier" },
			{ name: "Golden Retriever" },
			{ name: "Gordon Setter" },
			{ name: "Gos d'Atura Catalá" },
			{ name: "Gran Basset Griffon Vendeano" },
			{ name: "Gran Boyero Suizo" },
			{ name: "Gran Danés (Dogo Aleman)" },
			{ name: "Gran Gascón Saintongeois" },
			{ name: "Gran Griffon Vendeano" },
			{ name: "Gran Munsterlander" },
			{ name: "Gran Perro Japonés" },
			{ name: "Grand Anglo Francais Tricoleur" },
			{ name: "Grand Bleu de Gascogne" },
			{ name: "Greyhound" },
			{ name: "Griffon Bleu de Gascogne" },
			{ name: "Griffon de pelo duro (Grifón Korthals)" },
			{ name: "Griffon leonado de Bretaña" },
			{ name: "Griffon Nivernais" },
			{ name: "Grifon Belga" },
			{ name: "Grifón de Bruselas" },
			{ name: "Haldenstoever" },
			{ name: "Harrier" },
			{ name: "Hokkaido" },
			{ name: "Hovawart" },
			{ name: "Husky Siberiano (Siberian Husky)" },
			{ name: "Ioujnorousskaia Ovtcharka" },
			{ name: "Irish Glen of Imaal terrier" },
			{ name: "Irish soft coated wheaten terrier" },
			{ name: "Irish terrier" },
			{ name: "Irish Water Spaniel" },
			{ name: "Irish Wolfhound" },
			{ name: "Jack Russell terrier" },
			{ name: "Jindo Coreano" },
			{ name: "Kai" },
			{ name: "Keeshond" },
			{ name: "Kelpie australiano (Australian kelpie)" },
			{ name: "Kerry blue terrier" },
			{ name: "King Charles Spaniel" },
			{ name: "Kishu" },
			{ name: "Komondor" },
			{ name: "Kooiker" },
			{ name: "Kromfohrländer" },
			{ name: "Kuvasz" },
			{ name: "Labrador Retriever" },
			{ name: "Lagotto Romagnolo" },
			{ name: "Laika de Siberia Occidental" },
			{ name: "Laika de Siberia Oriental" },
			{ name: "Laika Ruso Europeo" },
			{ name: "Lakeland terrier" },
			{ name: "Landseer" },
			{ name: "Lapphund Sueco" },
			{ name: "Lebrel Afgano" },
			{ name: "Lebrel Arabe (Sloughi)" },
			{ name: "Leonberger" },
			{ name: "Lhasa Apso" },
			{ name: "Lowchen (Pequeño Perro León)" },
			{ name: "Lundehund Noruego" },
			{ name: "Malamute de Alaska" },
			{ name: "Maltés" },
			{ name: "Manchester terrier" },
			{ name: "Mastiff" },
			{ name: "Mastín de los Pirineos" },
			{ name: "Mastín Español" },
			{ name: "Mastín Napolitano" },
			{ name: "Mudi" },
			{ name: "Norfolk terrier" },
			{ name: "Norwich terrier" },
			{ name: "Nova Scotia duck tolling retriever" },
			{ name: "Ovejero alemán" },
			{ name: "Otterhound" },
			{ name: "Rafeiro do Alentejo" },
			{ name: "Ratonero Bodeguero Andaluz" },
			{ name: "Retriever de Nueva Escocia" },
			{ name: "Rhodesian Ridgeback" },
			{ name: "Ridgeback de Tailandia" },
			{ name: "Rottweiler" },
			{ name: "Saarloos" },
			{ name: "Sabueso de Hamilton" },
			{ name: "Sabueso de Hannover" },
			{ name: "Sabueso de Hygen" },
			{ name: "Sabueso de Istria" },
			{ name: "Sabueso de Posavaz" },
			{ name: "Sabueso de Schiller (Schillerstovare)" },
			{ name: "Sabueso de Smaland (Smalandsstovare)" },
			{ name: "Sabueso de Transilvania" },
			{ name: "Sabueso del Tirol" },
			{ name: "Sabueso Español" },
			{ name: "Sabueso Estirio de pelo duro" },
			{ name: "Sabueso Finlandés" },
			{ name: "Sabueso Francés blanco y negro" },
			{ name: "Sabueso Francés tricolor" },
			{ name: "Sabueso Griego" },
			{ name: "Sabueso Polaco (Ogar Polski)" },
			{ name: "Sabueso Serbio" },
			{ name: "Sabueso Suizo" },
			{ name: "Sabueso Yugoslavo de Montaña" },
			{ name: "Sabueso Yugoslavo tricolor" },
			{ name: "Saluki" },
			{ name: "Samoyedo" },
			{ name: "San Bernardo" },
			{ name: "Sarplaninac" },
			{ name: "Schapendoes" },
			{ name: "Schipperke" },
			{ name: "Schnauzer estándar" },
			{ name: "Schnauzer gigante (Riesenschnauzer)" },
			{ name: "Schnauzer miniatura (Zwergschnauzer)" },
			{ name: "Scottish terrier" },
			{ name: "Sealyham terrier" },
			{ name: "Segugio Italiano" },
			{ name: "Seppala Siberiano" },
			{ name: "Setter Inglés" },
			{ name: "Setter Irlandés" },
			{ name: "Setter Irlandés rojo y blanco" },
			{ name: "Shar Pei" },
			{ name: "Shiba Inu" },
			{ name: "Shih Tzu" },
			{ name: "Shikoku" },
			{ name: "Skye terrier" },
			{ name: "Slovensky Cuvac" },
			{ name: "Slovensky Kopov" },
			{ name: "Smoushond Holandés" },
			{ name: "Spaniel Alemán (German Wachtelhund)" },
			{ name: "Spaniel Azul de Picardía" },
			{ name: "Spaniel Bretón" },
			{ name: "Spaniel de Campo" },
			{ name: "Spaniel de Pont Audemer" },
			{ name: "Spaniel Francés" },
			{ name: "Spaniel Tibetano" },
			{ name: "Spinone Italiano" },
			{ name: "Spítz Alemán" },
			{ name: "Spitz de Norbotten (Norbottenspets)" },
			{ name: "Spitz Finlandés" },
			{ name: "Spitz Japonés" },
			{ name: "Staffordshire bull terrier" },
			{ name: "Staffordshire terrier americano" },
			{ name: "Sussex Spaniel" },
			{ name: "Teckel (Dachshund)" },
			{ name: "Tchuvatch eslovaco" },
			{ name: "Terranova (Newfoundland)" },
			{
				name: "Terrier australiano (Australian terrier)",
			},
			{ name: "Terrier brasilero" },
			{ name: "Terrier cazador alemán" },
			{ name: "Terrier checo (Ceský teriér)" },
			{ name: "Terrier galés" },
			{ name: "Terrier irlandés (Irish terrier)" },
			{ name: "Terrier japonés (Nihon teria)" },
			{ name: "Terrier negro ruso" },
			{ name: "Terrier tibetano" },
			{ name: "Tosa" },
			{ name: "Viejo Pastor Inglés" },
			{
				name: "Viejo Pointer Danés (Old Danish Pointer)",
			},
			{ name: "Vizsla" },
			{ name: "Volpino Italiano" },
			{ name: "Weimaraner" },
			{ name: "Welsh springer spaniel" },
			{ name: "Welsh Corgi Cardigan" },
			{ name: "Welsh Corgi Pembroke" },
			{ name: "Welsh terrier" },
			{ name: "West highland white terrier" },
			{ name: "Whippet" },
			{ name: "Wirehaired solvakian pointer" },
			{ name: "Xoloitzcuintle" },
			{ name: "Yorkshire Terrier" },
		]);

		res.status(201).json({ added: "ok", PetBreeds });
	}
};

const petTypesGET = async (req, res) => {
	const bulkPetTypes = await PetType.bulkCreate([
		{
			name: "Dog",
		},
		{
			name: "Cat",
		},
		{
			name: "Fish",
		},
		{
			name: "Turtle",
		},
		{
			name: "Bunny",
		},
	]);

	res.status(201).json({ added: "ok", bulkPetTypes });
};

const statusGET = async (req, res) => {
	const bulkStatus = await Status.bulkCreate([
		{
			description: "Cancelled",
		},
		{
			description: "Confirmed",
		},
		{
			description: "Contact",
		},
		{
			description: "Pending",
		},
		{
			description: "Completed",
		},
	]);

	res.status(201).json({ added: "ok", bulkStatus });
};

module.exports = {
	fiveUsersGET,
	fiveStoresGET,
	fivePetsGET,
	petTypesGET,
	statusGET,
	breedsGET,
};
