// controller ma functions define hota hy k ya control karta hy or is k routes routes ma define kar dety hain k is k zarya ya data jaiga
// import Todo Model or jitna kaam karna hota hy wo sARA kaam hum isma karsta hain
const  Todo = require("../models/todoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = (req, res) => {
Todo.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// createNewTodo function - To create new todo
exports.createNewTodo = (req, res) => {
let  newTodo = new Todo (req.body);
newTodo.save((err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(todo);
});
};

// updateTodo function - To update todo status by id
exports.updateTodo = (req, res) => {
Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// deleteTodo function - To delete todo by id
exports.deleteTodo = async ( req, res) => {
    try{

      const data=await Todo.findByIdAndDelete({ _id:req.params.id});
    
      res.status(200).json({ message:"Todo successfully deleted"});

    }
    catch(e){
        res.status(404).send(e);
    }
};