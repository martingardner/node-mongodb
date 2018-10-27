const { MongoClient , ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	/* deletes all matching criteria */
	/*
	db.collection('Todos').deleteMany({text: 'Eat Lunch'})
		.then( (result)=> {
			console.log('result', result);
		}, (err) => {
			console.log('could not deleteMany');
		});
	*/

	//deleteOne
	/* finds first matching instance and deletes it, note in case of multiple potential matches it only deletes the first it finds */
	/*
	db.collection('Todos').deleteOne({text: 'Eat Lunch'})
		.then( (result) => {
			console.log('result', result);
		}, (err) => {
			console.log('could not deleteOne');
		});
	*/
	//findOneAndDelete
	/*
	db.collection('Todos').findOneAndDelete({completed: false})
		.then( (result)=> {
			console.log('result', result);
		}, (err) => {
			console.log('could not findOneAndDelete');
		});
	*/


	//db.close();
});