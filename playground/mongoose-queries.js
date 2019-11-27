var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');



/* var id = '5ddec5cc5fb8f8049492b978';

Todo.find({_id: id}).then((todo)=>{
    console.log('Todo', JSON.stringify(todo, undefined, 2) );
});


Todo.findOne({_id: id}).then((todo) =>{
    console.log('Todo', JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then((todo) =>{
    console.log('Todo', JSON.stringify(todo, undefined, 2));
}); */


User.findById('9dded1cc717d51361c5022a5').then(
    (user) => {
        if(!user){
            return console.log('User not found');
        }

        console.log('User', JSON.stringify(user, undefined, 2));
    },
    (err) => {
        console.log(err);
    }
)