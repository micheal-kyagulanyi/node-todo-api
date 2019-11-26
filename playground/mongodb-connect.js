const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
       return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to Mongo DB server');

    const db = client.db('TodoApp');

    /* db.collection('Todo').insertOne(
        {
            test : 'To do something',
            completed : false
        },
        (err, result) => {
            if(err){
                return console.log('Unable to insert document', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );
 */
    db.collection('User').insertOne(
        {
            name : 'Michael',
            age : 35,
            location : 'Murfreesboro'
        },
        (err, result) => {
            if(err){
                return console.log('Unable to insert document', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );
    
    client.close();
});