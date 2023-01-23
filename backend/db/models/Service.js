const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class Service extends Model {}
Service.init(
	{
		description: {
			type: DataTypes.STRING,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Service", // We need to choose the model name
		tableName: "service_list",
		timestamps: false,
	}
);

//Export Model:
module.exports = Service;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
