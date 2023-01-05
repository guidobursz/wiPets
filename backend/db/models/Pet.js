const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class Pet extends Model {}
Pet.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		extra_info_one: {
			type: DataTypes.STRING,
		},
		extra_info_two: {
			type: DataTypes.STRING,
		},
		extra_info_three: {
			type: DataTypes.STRING,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Pet", // We need to choose the model name
		paranoid: true,
	}
);

//Export Model:
module.exports = Pet;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
