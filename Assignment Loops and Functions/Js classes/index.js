// console.log("Hello World");
// console.log(4 * 5, "=4*5");


// age = 23
// console.log(age);

// let collegename = "London Academy"
// console.log(typeof collegename);
// let mobilenumber= 3457648
// console.log(typeof mobilenumber);
// let discount=56.23


// discount="hello"
// console.log(typeof discount);

// const doublequote= "Hii Friends"
// const singlequote = ' Yoooooo!! Whats up bro !'
// const templateliteral = ` Yoooooo!!! 
//               brooooo`


// console.log(doublequote);
// console.log(singlequote);
// console.log(templateliteral);
// const userName = "Anu"

// const greetingMessage=`Hii, ${userName}`
// console.log(greetingMessage);



//------Operators-------//




// console.log("Hello bachooo");

//-----Arthimetic Operators-----//

// let num=45
// console.log(++num);
// console.log(num--);
// console.log(num);

// let num = 2;
// console.log(num);
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);

//-----Comparison Operators-----//

// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6); //False
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);

// console.log( "5" == 5)
// console.log( "5"=== "5")

// const age = 18;
// const hasId =true;

// const canEnterClub = age >20 && hasId === true;
// console.log(canEnterClub);

// console.log(!55);

//-----------If and Else----------//
// const isLoggedIn = true

// if (isLoggedIn) {
//     console.log("You can like and comment");
// } else {
//     console.log("Please first login");

// }


// let day = "mon";


// if (day === "mon") {
//     console.log("1st day of the week");
// } else if (day === "tue") {
//     console.log("2nd day of the week");
// } else if (day === "wed") {
//     console.log("3rd day of the week");
// } else if (day === "thu") {
//     console.log("4th day of the week");
// } else if (day === "fri") {
//     console.log("5th day of the week");
// } else if (day === "sat") {
//     console.log("6th day of the week");
// } else if (day === "sat") {
//     console.log("7th day of the week");
// } else {
//     console.log("Wrong day");
// }

// let num = 9;

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// let i = 1
// while (i < 5) {
//     console.log(i);
//     i++;

// }


                                        //--------------Loops-----------------//


// for (let i = 1; i <= 10; i++) {
    
//     if (i === 2) {
//         break;
//     }
//     console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
    
//     if (i === 2 || i === 7 || i === 9) {
//         continue;
//     }
//     console.log(i);
// }


                                        //------------Table of 5-------------//
// for (let i = 1; i <= 10 ; i++){
//     console.log(i * 5);
// }



                                                //-----Function-------//



// let alokMarks = 46 + 56 + 23
// let addiMarks = 24 + 65 + 32;

// console.log("Alok Marks =", alokMarks);

// function totalMarks (studentname ,mathMarks , scienceMarks , sanskritMarks){
//     console.log(`${studentname} total marks = ` ,mathMarks + scienceMarks + sanskritMarks);
// }
// totalMarks("Mahesh" , 46, 56, 65);
// totalMarks("Arjun" , 85, 96, 41);
// totalMarks("Hemant" , 46, 42, 88);
// totalMarks("Ishan" , 46, 21, 65);




// let number = 43;
// console.log("Hii mahesh");

// function convertToPositivenumber(num){
//     return num * -1
// }

// let positiveNum = convertToPositivenumber = 10;
// console.log(positiveNum);


let min = 1;
let max = 6;
let result =   Math.floor(Math.random() * ((max - min) + 1)) + min;

console.log(result);