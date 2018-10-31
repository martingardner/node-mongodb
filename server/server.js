let mongoose = require('mongoose');

/*
this is set, because by default mongoose doesn't know whether a Promise is from a third party 
or from native javascript
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text : {
		type: String
	},
	completed : {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

/*
let newTodo = new Todo({
	text: 'Cook dinner'
});
*/

let newTodo2 = new Todo({
	text: 'Med the dog',
	completed: false,
	completedAt: 08181288

});

/*
newTodo
	.save()
	.then( (doc) => {
		console.log(`Saved todo ${doc}`);
	}, (e) => {
		console.log(`Unable to save todo ${e}`)
	});
*/

newTodo2
	.save()
	.then( (doc) => {
		console.log(`Saved todo ${doc}`);
	}, (e) => {
		console.log(`Unable to save todo ${e}`)
	});