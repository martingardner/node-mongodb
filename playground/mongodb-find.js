const { MongoClient , ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//access the Todos collection in the above mongodb
	/*
	db.collection('Todos').find().toArray()
		.then( (docs)=> {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err)=> {
			console.log('unable to fetch todos');
		});
	*/
	/*
	db.collection('Todos').find({completed: false}).toArray()
		.then( (docs)=> {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err)=> {
			console.log('unable to fetch todos');
		});
	*/
	/*
	db.collection('Todos').find({
		_id: new ObjectID('5bce6f5a7d4922184c4f5752')
	}).toArray()
		.then( (docs)=> {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err)=> {
			console.log('unable to fetch todos');
		});
	*/

	/*
	db.collection('Todos').find().count()
		.then( (count)=> {
			console.log('Todos');
			console.log(`Todos count: ${count}`)
		}, (err)=> {
			console.log('unable to fetch todos');
		});
	*/

	db.collection('Users').find({name: 'Mike'}).toArray()
		.then( (docs) => {
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log('unable to fetch users');
		});

	db.close();
});