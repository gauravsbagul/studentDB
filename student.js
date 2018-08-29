//app.js notes=defs, addStudent= addNote
console.log('starting app and student.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const defs = require('./defs.js');
const argv = yargs.argv;
var command = process.argv[2];

// for adding Student in to json file
if (command === 'add') {
    var student = defs.addStudent(argv.rn, argv.name, argv.adrs);
    if (student) {
        console.log('Student added');
        console.log('___________________');
        console.log(`Roll no: ${student.rn}`);
        console.log(`Name:    ${student.name}`);
        console.log(`Address: ${student.adrs}`);
    } else {
        console.log('Student canot be added');
    }
    
} else
// for showing all records of student
 if (command === 'list') {
    defs.listStudent();
} else
// for removing given records of students
if (command === 'remove') {
    var studentRemoved = defs.removeStudent(argv.rn);
    var message = studentRemoved ? 'Student was removed' : 'Student not found'
    console.log(message);
} else
// for showing given records of student
if (command === 'read') {
    defs.readStudent(argv.rn);
} else console.log('command not recognized');