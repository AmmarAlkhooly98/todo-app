const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = '1998';

const app = express();
const port = process.env.PORT || 5000;

const { todo, user } = require('./database/models');

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(express.static(__dirname + '/../build'));
app.use(bodyParser.json());

//sign up for users
app.post('/signup', function(req, res) {
	console.log(req);
	let fullname = req.body.fullname;
	let username = req.body.username;
	let password = req.body.password;
	let hashedPassword = bcrypt.hashSync(password, 10);
	let url = req.body.url;
	user
		.create({
			fullName: fullname,
			userName: username,
			password: hashedPassword,
			url: url
		})
		.then(function() {
			return res.status(201).send({
				success: 'Sign up successful'
			});
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(400).send({
					error: 'This username is already taken'
				});
			}
			return res.status(500).send({
				error: 'Server Error'
			});
		});
});

//Sign in
app.post('/signin', function(req, res) {
	const users = req.body;
	const username = users.username;
	const password = users.password;
	//Check if user exists in the database
	user
		.findOne({
			where: {
				username: username
			}
		})
		.then(function(user) {
			if (!user) {
				return res.status(401).send({
					error: 'Please sign up'
				});
			}
			//Compare with stored password
			const existingHashedPassword = user.password;
			bcrypt.compare(password, existingHashedPassword).then(function(isMatching) {
				if (isMatching) {
					//Creates a token and sends it to client
					const token = jwt.sign(
						{
							username: user.userName
						},
						SECRET_KEY,
						{
							expiresIn: 900
						}
					);
					return res.send({
						token: token,
						username: users.username
					});
				} else {
					return res.status(401).send({
						error: 'Incorrect Credentials'
					});
				}
			});
		});
	console.log(res.data);
});

//add todo
app.post('/addtodo', function(req, res) {
	let toDo = req.body.toDo;
	console.log(toDo);
	todo
		.create({
			todos: toDo
		})
		.then(function() {
			return res.status(201).send({
				success: 'todo added successfully'
			});
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(400).send({
					error: 'error 400'
				});
			}
			return res.status(500).send({
				error: 'Server Error'
			});
		});
});

app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
});
