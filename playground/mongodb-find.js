const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
       return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to Mongo DB server');

    const db = client.db('TodoApp');

    /* db.collection('Todo')
            .find(
                {_id : new ObjectID('5ddca547ebb7e220404cda95')}
            )
            .toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, 
        (err) => {
            console.log('Unable to fetch Todos', err);
        }
    ); */

    /* db.collection('Todo').find().count().then(
        (count) => {
            console.log(`Todos: ${count}`);
        },
        (err) => {
            console.log('Could not find Todos');
        }
    ); */


    // Get all the users with the name of Mike
    db.collection('Users').find({name : 'Mike'}).toArray()
    .then(
        (result) => {
            console.log('Users list');
            console.log(JSON.stringify(result, undefined, 2));
        }
        , (err) => {
            console.log('Could not retrieve users', err);
        }
    );
   
    //client.close();
});