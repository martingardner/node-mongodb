//const MongoClient = require('mongodb').MongoClient;
const { MongoClient , ObjectID } = require('mongodb');
//ObjectID allows to create _id on the fly

//let obj = new ObjectID();
//console.log('obj', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	/*
	db.collection('Todos').insertOne({
		text: 'Somthing to do',
		completed: false
	}, (err, result) => {
		if(err) {
			return console.log('unable to insert todo', err);
		}

		console.log( JSON.stringify(result.ops, undefined, 2) );
	});
	*/

	
	db.collection('Users').insertOne({
		name: 'Bob',
		age: 23,
		location: 'City of Industry'
	}, (err, result) => {
		if(err) {
			return console.log('unable to insert todo', err);
		}

		console.log( JSON.stringify(result.ops, undefined, 2) );
		console.log(result.ops[0]._id.getTimestamp() ); //gets timestamp of object _id
	});

	db.close();
	


});