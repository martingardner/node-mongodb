const { MongoClient , ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//findOneAndUpdate
	/*
	db.collection('Todos')
		.findOneAndUpdate(
			{_id: new ObjectID('5bd4a98b9e9a3f4fa2ac7e87')},
			{
				$set: {
					completed: true
				}
			},
			{
				returnOriginal: false
			}
			
		).then( (result) => {
			console.log('result', result);
		})
	*/

	db.collection('Users')
		.findOneAndUpdate(
			{_id: new ObjectID('5bce6ff111262e34a8459d5e')},
			{
				$set: {
					name: 'Martin'
				},
				$inc: {
					age: 2
				}
			},
			{
				returnOriginal: false
			}
		).then( (result) => {
			console.log('result', result);
		})

	//db.close();
});