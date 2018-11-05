let mongoose = require('mongoose');

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

module.exports = {
    Todo : Todo
}

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