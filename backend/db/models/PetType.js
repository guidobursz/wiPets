const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class PetType extends Model {}
PetType.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "PetType", // We need to choose the model name
		tableName: "PetType",
		timestamps: false,
	}
);

//Export Model:
module.exports = PetType;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
