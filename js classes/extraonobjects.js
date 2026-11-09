// let student = {
//     name: "mahesh",
//     rollno: 33,
//     subjects: ["maths" , "english" , "hindi"],
//     totalmarks : 600,
// }

// let {subjects : vishay , ...left} = student;  // how to rename an key brooooo.....//
// let {subjects , ...left} = student;
// let vishay = subjects;                     // 2nd tareeka to rename an objects
// console.log(vishay , left);




// Giving default values to the keys //


// let student = {
//     name: "mahesh",
//     rollno: 33,
//     subjects: ["maths" , "english" , "hindi"],
//     totalmarks : 600,                              // it will override the below default value;
// }

// let {subjects: vishay , totalmarks = 500} = student;
// console.log(totalmarks , vishay);


// Merging objects //



// let array = ["mahesh" , "australia" , "number"]          // Array merging //
// let array1 = ["hemant" , "switzerland" , "amkkksj"]
// let array3 = [...array , ...array1]
// console.log(array3);


// let india = "arjun";       // Understanding india as a variabe if india nt be given in string //

// let obj1 = {
//     name : "mahesh",
//     address : "india",
//     // address : india,      upar  wale ka example aur agr string mein de diya toh fir no problem bidu//
// }
// let obj2 = {
//     adhaar : 956842364
// }

// let obj3 = {...obj1 , ...obj2}; 
// console.log(obj3);

// let obj3 = {...obj1 , ...obj2};        //if you give same keys in both , then it Showing key of obj2 not obj1 //
// console.log(obj3);


//  array and object updation //

// const arr = [1 , 2 , 3 , 4];
// arr = ["mahesh" , "hemant"]
// console.log(arr);          // error ===> reason is const //

// let arr = [1 , 2 , 3 , 4];
// arr = ["mahesh" , "hemant"];
// console.log(arr);               // Updation complete due to let //


// const arr = [1 , 2 , 3 , 4];
// arr[0] = "updation";
// console.log(arr);           // now changing line by line because of const //


// let obj = {
//     name: "aakriti",
//     rollNo: 23,
// }

// obj = {
//     aadharCardNumber: 54587912546,
// }

// console.log(obj);              // using let that is why we can replace all at a time //



// const obj = {
//     name: "aakriti",
//     rollNo: 23,
// }

// obj = {
//     aadharCardNumber: 54587912546,
// }
// console.log(obj);                  // showing error due to const //


// const obj = {
//     name: "aakriti",
//     rollNo: 23,
// }

// // delete obj.rollNo;       // if you wanna delete something //

// obj["rollNo"] =  54587912546;             // also obj.rollNo   can be used //

// console.log(obj);                         // bro change krna toh string dena nhi toh dikkat ho jaani hain //




// Optional chaining //
// Optional chaining //
// Optional chaining //
// Optional chaining //
// Optional chaining //


// const obj = {
//     name: "aakriti",
//     rollNo: 23,
//     address: 0,
// } 

// console.log(obj.address);         // but if show undefined then solution is below //
// console.log(obj?.address);
// console.log(obj.name);

// Removing Things from array //

// let array = [1 , 2 , 3 , 4 , 5 , 3]
// let result = array.splice(2 , 1)              // Deleting things //
// let result = array.splice(3 , 0 , 2)              // adding things //
// console.log(array);

// let result = array.slice(1 , 4);
// console.log(result);      // splice mutable hota hain jo naya array return krta hain isiliye wo ye sochta hain //
                         // naya array bana dete hain taaki purane wale ko kuch ho naaaa that create a need for variable to contain splice  //   


// console.log(array.indexOf(45));    // Answer will be -1 that tells it is not availaible //
// console.log(array.indexOf(1));

// ARRAY.FIND //
// ARRAY.FIND //
// ARRAY.FIND //
// ARRAY.FIND //
// ARRAY.FIND //


// let array = [1 , 2 , 3 , 4 , 5 , 3]
// let result = array.find((value) => {
//     return value === 9;
// })
// console.log(result); 

// let res = array.findIndex((value) => {
//     return value === 3;
// })
// console.log(res);



// flatt
// flatt
// flatt
// flatt
// flatt
// flatt


let array = [1 , 2 , 3 , 4 , 5 , [6 , 7 , 8]];

// console.log(array.flat(Infinity));          // Generally ye sirf 1 level tkk flat krta hain isilye humein infinity likhna padta
//                                     // hai
// console.log(array);


// let arr4 = [4 , 5 , 6 , 7 , 8 , 9];
// let arrcopy = [...arr4];            // bss iska reference ye saalaa har baar usi se poochne jaata hai
// let arrcopy = [arr4];            // bss iska reference ye saalaa har baar usi se poochne jaata hai

// arrcopy.pop();
// console.log("arr4" , arr4);
// console.log("arrcopy" , arrcopy);
















