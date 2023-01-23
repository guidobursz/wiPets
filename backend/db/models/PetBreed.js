const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class PetBreed extends Model {}
PetBreed.init(
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
		modelName: "PetBreed", // We need to choose the model name
		tableName: "pet_breeds",
		timestamps: false,
	}
);

//Export Model:
module.exports = PetBreed;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
