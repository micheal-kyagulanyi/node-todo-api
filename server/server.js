var express = require('express');
var bodyParser = require('body-parser'); 
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var t = new Todo(
        {
            text : req.body.text
        }
    );

    t.save().then(
        (doc) => {
            res.send(doc);
        },
        (err) => {
            res.status(400).send(err);
        }
    )
});


app.get('/todos', (req, res) => {
    Todo.find().then(
        (todos) => {
            res.send({todos});
        },
        (e) => {
            res.status(400).send(e);
        }
    )
});

// Get Todo by Id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Check if this a valid ID
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
            
            res.send({todo});
        }
    ).catch((err) => {
        return res.status(404).send();
    })

})


app.post('/users', (req, res) => {
    var u = new User({
        email : req.body.email
    });

    u.save().then(
        (doc) => {
            res.send(doc);
        },
        (err) => {
            res.status(400).send(err);
        }
    )
})


app.listen(3000, () => {
    console.log('App running on port 3000');
});

module.exports = {app};








