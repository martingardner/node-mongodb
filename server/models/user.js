let mongoose = require('mongoose');

let User = mongoose.model('User', {
	email : {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

module.exports = {
    User : User
}


/*
let newUser = new User({
	email : 'the@the.com'
});
*/
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
/*
newUser
	.save()
	.then( (doc) => {
		console.log(`saved user : ${JSON.stringify(doc, undefined, 2)}`)
	}, (e) => {
		console.log(`Unable to save user ${e}`);
    });
    */