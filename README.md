# node-mongodb

#mongodb find
* http://mongodb.github.io/node-mongodb-native/2.2/api/
* db.collection('Todos').find().toArray()
	* db.collection('Todos') is the collection to be searched
	* .find() by itself with no arguments gives a pointer to all data but to get it in a better format need to use pointer methods.  Pointer methods return promises so can chain .then on them
	* to apply a search query to .find() apply an object of what is to be matched against .find({completed: false})
	* if you want to use _id as a search parameter however you need to make sure for the value you wrap it in a new ObjectID() because it's not a string but an object id (make sure you have ObjectID extracted from the require call)
		* list of cursor methods http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
		* .toArray() converts the pointer (.find()) into an array for use.  

#mongodb update
* list of operators https://docs.mongodb.com/manual/reference/operator/update/
* findOneAndUpdate({what to target, same as find}, operator of what to do )

# todo app 
* contains node-mongodb-native
* using robo3T of Robomongo to visually be able to see the mongo db