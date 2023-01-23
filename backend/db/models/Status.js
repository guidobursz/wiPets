const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class Status extends Model {}
Status.init(
	{
		description: {
			type: DataTypes.STRING,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Status", // We need to choose the model name
		tableName: "status_list",
		timestamps: false,
	}
);

//Export Model:
module.exports = Status;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
