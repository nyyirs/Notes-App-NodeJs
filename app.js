const yargs = require ('yargs');

const command = yargs.argv._[0];

if (command === 'add'){
    console.log('Add new TODO to list');
};
if (command === 'delete'){
    console.log('Deleting a TODO');
}
if (command === 'list'){
    console.log('Listing all TODOs');
}else{
    console.log('Enter Add, Delete or List only!');
};