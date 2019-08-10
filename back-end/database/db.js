var mysql = require('mysql');
var Sequelize = require('sequelize');

//Database connection
const db = new Sequelize('todo-app', 'root', '1998', {
	host: 'localhost',
	dialect: 'mysql'
});

db.sync({ force: false, logging: false }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
