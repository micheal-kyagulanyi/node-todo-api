const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to Mongo DB server');

    // deleteMany
    /* db.collection('Todos').deleteMany({text : 'Pray to God'})
    .then(
        (results) => {
            console.log(results);
        }
    ); */

    //deleteOne
    /* db.collection('Todos').deleteOne({text : 'Go to bed'})
    .then( 
        (results) => {
            console.log(results);
        }

    ); */

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed : true})
    .then(
        (result) => {
            console.log(result);
        }
    );
    //db.close();
});