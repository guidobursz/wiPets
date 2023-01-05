const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class Appointment extends Model {}
Appointment.init(
	{
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		time: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		comment: {
			type: DataTypes.STRING,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Appointment", // We need to choose the model name
		paranoid: true,
	}
);

//Export Model:
module.exports = Appointment;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
