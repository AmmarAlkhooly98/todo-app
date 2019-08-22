const { db, Sequelize } = require('./db.js');

const user = db.define('user', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	fullName: { type: Sequelize.STRING, required: true },
	userName: { type: Sequelize.STRING, required: true, unique: true },
	password: { type: Sequelize.STRING, required: true },
	url: { type: Sequelize.STRING }
});

const todo = db.define('todo', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	todos: { type: Sequelize.STRING, required: true }
});

todo.belongsTo(user);
user.hasMany(todo);

module.exports.user = user;
module.exports.todo = todo;
