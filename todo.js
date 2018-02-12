const fs = require ('fs');


const addTodo = (title) => {

    var todos = [];
    
    var todo = {
          title
    }
    
    try{
        var todosString = fs.readFileSync('todos.json');
        todos = JSON.parse(todosString);
    }catch(e){};
      
    var duplicates = todos.filter((todo) => {
        return todo.title === title;
    });

    if (duplicates.length === 0){
    todos.push(todo);
    fs.writeFileSync ('todos.json', JSON.stringify(todos));
    console.log ("New TODO added");
    }else{
    console.log ("TODO already exists");
    }
      
};

module.exports = {
    addTodo
};