//app.js notes=defs, addStudent= addNote
console.log('starting app and student.js');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const defs = require('./defs.js');

// console.log(process.argv);
const argv = yargs.argv;
var command = process.argv[2];
//console.log(`command:  ${command}`);
//console.log('process: ', process.argv);
//console.log('yargs: ', argv);
// console.log('please give input in following format');
// console.log('node fileName.js command(add/list/remove/read) --name=studentname --adrs=stdaddress');

if (command === 'add') { // console.log('adding the student');
    var student = defs.addStudent(argv.rn, argv.name, argv.adrs);
    if (student){
            console.log('Student added');
            console.log('___________________');
            console.log(`Roll no: ${student.rn}`);
            console.log(`Name:    ${student.name}`);
            console.log(`Address: ${student.adrs}`);
    } else {
            console.log('Student canot be added');}
    } else if (command === 'list') { // console.log('listing the student');
    defs.listStudent(argv.rn, argv.name, argv.adrs);
} else 

if (command === 'remove') { // console.log('removing the student');
   var studentRemoved = defs.removeStudent(argv.rn);
    var message = studentRemoved ? 'Student was removed' : 'Student not found'
    console.log(message);
} else 

if (command === 'read') { // console.log('reading the student');
    defs.readStudent(argv.rn);        
} else console.log('command not recognized');













// console.log(_.isString(true));
// console.og(_.isString('gaurav'));
// var filterdArray= _.uniq(['gaurav',1,'gaurav', 1,2,3,4,4]);
// console.log(filterdArray);
// var res = defs.addStudent();
// var ans = defs.addnum(5,-15) ;
// console.log(`answer = ${ans}`);
// console.log(res);
// var user = os.userInfo();
// fs.appendFileSync('student.txt',`hello ${user.username }! you are ${defs.age}.`);