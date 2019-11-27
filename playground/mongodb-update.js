const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to Mongo DB server');

    /* db.collection('Todos').findOneAndUpdate(
        {_id : new ObjectID('5ddca547ebb7e220404cda95')},
        {$set : {completed : true }},
        {returnOriginal : false}
    )
    .then(
        (result) => {
            console.log(result);
        }
    ); */

    db.collection('Users').findOneAndUpdate(
        {_id : new ObjectID('5ddd4bd32a9f67db2eb8e279')},
        {
            $set : {name : 'Kyagulanyi'},
            $inc : {age : 5}
        },
        {returnOriginal : false}
    ).then( 
        (result) => {console.log(result);},
        (err) => {console.log(err);}
    );
    


    //db.close();
});