//notes.js file addNote =addStudent
// notes =defs
console.log('starting def.js');
const fs = require('fs');

var fetchStudents = () => {
    try {
        var studentsString = fs.readFileSync('students_data.json');
        return JSON.parse(studentsString);
    } catch (e) {
        return console.log(' student not found');
    }
};

var saveStudents = (students) => {
    fs.writeFileSync('students_data.json', JSON.stringify(students));
};

var addStudent = (rn, name, adrs) => {
    //console.log('adding student ', name, adrs);
    var students = fetchStudents();
    var student = {
        rn,
        name,
        adrs
    };
    var duplicateStudents = students.filter((student) => student.rn === rn);
    if (duplicateStudents.length === 0) {
        students.push(student);
        saveStudents(students);
        return student;
    } else {
        console.log('Student Roll Number already exists ');
    }
};

var listStudent = (rn) => {
    console.log('listing all students ');
};

var removeStudent = (rn) => {
    console.log(`removing ${rn} student`);
    var students = fetchStudents();
    var filteredStudents = students.filter((student) => student.rn !== rn);
    saveStudents(filteredStudents);
    return students.length !== filteredStudents.length;

};

var readStudent = (rn) => {
    console.log(`Showing ${rn} student`);
    var students = fetchStudents();
    var filteredStudents = students.filter((student) => student.rn === rn);
    if (filteredStudents.length !== 0) {
        saveStudents(students);
        console.log(filteredStudents);
    } else console.log(`Student ${rn} not found`);

};
module.exports = {
    // addStudent: addStudent
    addStudent,
    listStudent,
    removeStudent,
    readStudent
};










// module.exports.addStudent = () => {
//     console.log('add Student');
//     return 'New Student';
// }
// module.exports.addnum = (a,b) =>{
//     return a+b;
// }