// Filter //
// Filter //
// Filter //
// Filter //
// Filter //

let students = [
    {
        name: "Mahesh",
        marks: 56,
    },
    {
        name: "Ayan",
        marks: 94,
    },
    {
        name: "Hemant",
        marks: 65,
    },
    {
        name: "Aakriti",
        marks: 44,
    },
    {
        name: "Raunak",
        marks: 28,
    }

]


// local tareeka //

// let failedStudents = [];
// students.forEach((students) => {
//     if (students.marks < 33){
//         failedStudents.push(students);
//     }
// })

// console.log(failedStudents);


// levelled tareeka //

// const failedStudents = students.filter((Student) => Student.marks < 33);
// const failedStudents = students.map((student) => student.marks > 33) // On map - Gives boolean value because it have to same 
//array of same length //


// console.log(failedStudents);

// Chaining
// Chaining
// Chaining
// Chaining

const failedStudents = students.filter((Student) => Student.marks < 33).map((Student) => Student.name);

// console.log(failedStudents);

// Filter
// Filter
// Filter
// Filter
// Filter

let marks = [55, 69, 23, 82, 97];
// let totalmarks = 0;

// marks.forEach((mark) => totalmarks += mark )
// console.log(totalmarks);


// const attendence = ["present", "present", "absent", "present", "absent"]

// -> { present : 3 , absent : 2 }

// let obj = {}

// attendence.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }

// })

// console.log(obj);

// by reduce // 

// const result = attendence.reduce((accumulator , currentValue) => {
//     if (accumulator[currentValue]) {
//         accumulator[currentValue] = accumulator[currentValue] + 1
//     } else {
//         accumulator[currentValue] = 1
//     }
//     return accumulator
// }, {})

// console.log(result)



/// shortcut //
const attendence = ["present", "present", "absent", "present", "absent"]

const result = attendence.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
}, {})

console.log(result)