let mongoose = require('mongoose');

/*
this is set, because by default mongoose doesn't know whether a Promise is from a third party 
or from native javascript
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text : {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed : {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

let User = mongoose.model('User', {
	email : {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

/*
let newTodo = new Todo({
	text: 'Cook dinner'
});
*/

/*
let newTodo2 = new Todo({
	text: 'Med the dog',
	completed: false,
	completedAt: 08181288

});
*/


let newUser = new User({
	email : 'the@the.com'
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

/*
newTodo2
	.save()
	.then( (doc) => {
		console.log(`Saved todo ${doc}`);
	}, (e) => {
		console.log(`Unable to save todo ${e}`)
	});
*/

newUser
	.save()
	.then( (doc) => {
		console.log(`saved user : ${JSON.stringify(doc, undefined, 2)}`)
	}, (e) => {
		console.log(`Unable to save user ${e}`);
	});