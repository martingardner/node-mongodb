let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

const port = process.env.PORT || 3000; // setting this up for Heroku, 3000 if local, whatever port heroku gives if on their site

let app = express();

app.use( bodyParser.json() );

app.post('/todos', (req, res) => {
	console.log(req.body);
	let todo = new Todo({
		text: req.body.text
	});

	todo
	.save()
	.then( (doc)=> {
		res.send(doc);
	}, (e) => {
		//console.log(`there was an error with this post ${e}`)
		res.status(400).send(e);
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});