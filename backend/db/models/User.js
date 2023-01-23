const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connection");

class User extends Model {}
User.init(
	{
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
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
		birthday: {
			type: DataTypes.DATE,
		},
		image: {
			type: DataTypes.STRING,
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		verified: {
			type: DataTypes.BOOLEAN,
			defaultValue: 0,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "User", // We need to choose the model name
		tableName: "users",
		paranoid: true,
	}
);

//Export user Model:
module.exports = User;

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
