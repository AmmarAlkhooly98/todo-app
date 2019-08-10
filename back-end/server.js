const express = require('express');
const bodyParser = require('body-parser');
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

const server = app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
});
