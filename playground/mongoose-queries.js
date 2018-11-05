const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//let id = '5be0a36ddc79890829e53808';
//let id = '6be0a36ddc79890829e53808';  //valid but non existant id
//let id = '5be0a36ddc79890829e5380811111111'; //not valid ID
let id = '5bdb0eb9f5ab1f282657751a' //User ID

if( !ObjectID.isValid(id) ){
    console.log('ID is not valid');
}
/*
Todo
    .find({
        _id: id
    })
    .then( (todos) => {
        console.log('Todos', todos);
    });

Todo
    .findOne({
        _id: id
    })
    .then( (todo) => {
        console.log('Todo', todo);
    });
*/
/*
Todo    
    .findById(id)
    .then( (todo) => {
        if(!todo){
            return console.log('Id not found');
        }
        console.log('Todo by ID', todo);
    })
    .catch( (e) => console.log(e) );
*/

User
    .findById(id)
    .then( (user) => {
        if(!user){
            return console.log('Id not found');
        }
        console.log(`User by ID ${JSON.stringify(user, undefined, 2)}`)
    })
    .catch( (e) => console.log(e) );