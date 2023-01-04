const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class Store extends Model {}
Store.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone_number: {
			type: DataTypes.STRING,
			defaultValue: "Waiting",
		},
		address: {
			type: DataTypes.STRING,
			defaultValue: "Waiting",
		},
		address_number: {
			type: DataTypes.STRING,
			defaultValue: "waiting",
		},
		apartment: {
			type: DataTypes.STRING,
			defaultValue: "waiting",
		},
		zip: {
			type: DataTypes.STRING,
			defaultValue: "waiting",
		},
		barrio: {
			type: DataTypes.STRING,
			defaultValue: "pepe",
		},
		province: {
			type: DataTypes.STRING,
			defaultValue: "waiting",
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Store", // We need to choose the model name
		paranoid: true,
	}
);

//Export Model:
module.exports = Store;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
