const yargs = require ('yargs');
const todo = require ('./todo.js')

const argv = yargs.argv;
const command = yargs.argv._[0];

if (command === 'add'){
    
    todo.addTodo(argv.title);

} else if (command === 'delete'){

    console.log('Deleting a TODO');

} else if (command === 'list'){

    console.log('Listing all TODOs');

} else{

    console.log('Enter Add, Delete or List only!');

};