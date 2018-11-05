let mongoose = require('mongoose');

/*
this is set, because by default mongoose doesn't know whether a Promise is from a third party 
or from native javascript
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose : mongoose
}