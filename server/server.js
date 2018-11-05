let express = require('express');
let bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

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
			res.status(400).send(e);
		});
});

app.get('/todos', (req, res) => {
	Todo
		.find()
		.then( (todos) => {
			res.send({
				todos : todos
			});
		}, (e) => {
			res.status(400).send(e);
		});
});

app.get('/todos/:id', (req, res) => {
	//res.send(req.params);
	let id = req.params.id;
	if( !ObjectID.isValid(id) ){
		//console.log('ID is not valid');
		return res.status(404).send();
	}

	Todo
		.findById(id)
		.then( (todo) => {
			if( !todo ){
				return res.status(404).send();
			}
			return res.send({
				todo : todo
			});
		});
		.catch( (e) => {
			return res.status(400).send();
		});
});


app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

// for testing
module.exports = {
	app : app
}