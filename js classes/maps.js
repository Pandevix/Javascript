// Map
// Map
// Map
// Map

// Map are methods //

// let originalPrices = [463 , 654 , 789];
// let discountedPrices = [];
// for (value of originalPrices){
//     discountedPrices.push(value * 0.9)              // 10% Discount //   // Thodi tgdi maths hain 0.9 mein //
// }

// console.log(originalPrices);
// console.log(discountedPrices); 

// const discountedPrices = originalPrices.map((value) => {
//     return value * 0.9
// })

// console.log(discountedPrices);


// Claude Questions practise on map //
// Claude Questions practise on map //
// Claude Questions practise on map //
// Claude Questions practise on map //
// Claude Questions practise on map //

// temps = [10, 20, 30]
// for (let value of temps ){
//  console.log(value ," degree celsius");
// }
// const celsiusText = temps.push((c) => c + " degree celsius");
// console.log(temps);
// let fahrenheit = temps.map((celsius) => {
//     return celsius * (9/5) + 32 ;
 // })

// console.log(temps ,"degree celsius");
// console.log(fahrenheit ,"degree fahrenheit");


 // #Array of objects //
 // #Array of objects //
 // #Array of objects //
 // #Array of objects //

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
    }
]

// let studentnames = [];

// students.forEach((value) => {
//     studentnames.push(value.name)
// })

// console.log(studentnames);

// const studentNames = students.map((students) => {return students.name});
// const studentMarks = students.map((students) => {return students.marks});

//  console.log("Student Names =", studentNames , "Student Marks =", studentMarks );

// let boostedMarks = students.map((students) => {
//     return { ...students, marks:  students.marks + 10}
// }
// )
// console.log(boostedMarks);



// Writing above code in one line 


let boostedMarks = students.map((students) =>  ({ ...students, marks:  students.marks + 10}))
                                                       // How to write in one line //
console.log(boostedMarks);



