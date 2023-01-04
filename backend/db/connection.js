const { Sequelize, DatabaseError } = require("sequelize");

const database = process.env.DB;
const host = process.env.HOST;
const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: "mysql",
});

module.exports = { sequelize };
