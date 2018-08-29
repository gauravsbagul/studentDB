//originaNote = originalStudent
// var obj = {
//     name: 'gaurav'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(stringObj);
// console.log(typeof stringObj);
// var personSting = '{"name": "Gaurav", "age": 25}';
// var person = JSON.parse(personSting);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');
var originalStudent = {
    name: 'student name', adrs: 'student adrs'
};
var originalStudentString = JSON.stringify(originalStudent);
fs.writeFileSync('stdData.json',originalStudentString);
var studentString =fs.readFileSync('stdData.json');
var std = JSON.parse(studentString);
console.log(typeof std);
console.log(typeof originalStudentString);
console.log(std.name);
console.log(std.adrs);