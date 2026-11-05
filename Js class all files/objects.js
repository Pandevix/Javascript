// let product1 =[669758  , 7.5 , 75 , "iphone"] 



// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }

// let res = product2.printProductName()
// console.log(res);
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for( value of product1){
//     console.log(value);
//  }

//  for( let  i = 0 ; i < product1.length; i++){
//     console.log(product1[i]);
// }

// product1.forEach(function(value , index){
//     console.log(value , index);
// })


// let Math2 = {
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }

// product2.first-name     // error
// product2["first-name"]

// Math2.abs()




// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// let a = function(){
//     console.log("a");
// }

// b(a)




// for ( value in product1){
//     console.log(value);
// }


// destructuring 

// let product1 = [56835, 4.5, 75, 10,"iphone"]

// const [name , price ,c ,d] = ["iphone",56835, 4.5, 75, 10]
// console.log(price);

let product2 = {
    price: 57633,
    avgRating: 4.5,
    totalRevies: 75,
    discount: 50,
    productName: "iphone 25",
    variants : ["pro" , "base" ,"pro max"],
    manufacturerDetail : {
        city : "Dhampur",
        state : "Up",
        country : "India",
        price : 30000
    },
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount);
    }
}


// let { price, printDiscount, avgRating } = product2

// console.log(price , printDiscount() , avgRating);


// for ([key, value] of Object.entries(product2)) {
//     console.log(key, value);
// }






// let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));

// let a = [1, 2]
// let b = [3, 4]

// let c = [...a, ...b] // array merging by spread operator
// // console.log(...c);
// // Math.max()



// // let product1 = [56835, 4.5, 75, 10, "iphone"]

// const [n, p, ...hello] = ["iphone", 56835, 4.5, 75, 10]


// console.log(hello);


// function add(...numbers) {
//     let total = 0;
//     for (value of numbers) {
//         total += value
//     }
//     return total;
// }

// // console.log(add(4, 5, 2546, 254, 2));


// let { manufacturerDetail , elephant , ...userKeLiyeDetail } = product2; // rest

// console.log(userKeLiyeDetail)



const students = {
name: "Mahesh",
address: {
city: "Lucknow",
state: "Uttar Pradesh"
}
};

for(let student in students){
    console.log(student);
}
for(let city in students.address){
    console.log(students.address[city]);
}



// New start // 

// let array = ["tshirt" , "pants" , "shirts" , "caps" , "jeans"]

// let product = {
//     name:"Iphone 18",
//     price: 100200,
//     discount: 10,
//     avgRating: 4.5,
//     "96": 50,
//     "Pnt-gmt": 50,
//     printProductName: function(){
//         console.log("Iphone 18 pro max");
//     }

// }

// for (value  of product){
//     console.log(value);
// }



// for(let i = 0; i < array.length; i++ ){

// }



// for ( value in product){
//     console.log(typeof product[value]);        // question //
// }

// array.forEach ((value , index) => {                // Callback + arrow function //
//     console.log(value , index);
// })

// for(value of array){
//     console.log(value);
// }

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

// console.log(product.price);
// console.log(product.printProductName());



// // console.log(array);
// console.log(product);





// Destructuring of array and object //

// let array = ["tshirt" , "pants" , "shirts" , "caps" , "jeans"]

// const [a , b , c , d , e , f , g] = ["tshirt" , "pants" , "shirts" , "caps" , "jeans"];
// console.log(g);

// objects destructuring // 

// let product = {
//     name:"Iphone 18",
//     price: 100200,
//     discount: 10,
//     avgRating: 4.5,
//     "96": 50,
//     "Pnt-gmt": 50,
//     printProductName: function(){
//         console.log(this.name);
//     },

// }

// let {price , printProductName , avgRating} = product;
// console.log(price , printProductName() , avgRating);               // Do undefined kyun aa rhe hai // 


// for ([key , value] of Object.entries(product)){       //  object.keys array mein convert krr dete hain //
//     console.log( key ,value);
// }
// for (value of Object.entries(product)){
//     console.log( key ,value);
// }


// Rest operator and Spread operator //


//  let array = ["tshirt" , "pants" , "shirts" , "caps" , "jeans"]

//  const [a , b , c , d , e , f , g] = ["tshirt" , "pants" , "shirts" , "caps" , "jeans"];
//  console.log(g);

// let number = [53 , 56 , 96 , 85 ,42 , 32 , 81]

// console.log(Math.min(number));         // the problem //
// console.log(Math.min(...number));         // the solution ===> spread //

let a = [1 , 2]
let b = [3 , 4]

// let c = [a , b]
// console.log(c);        // Nested array //

// let a = [1 , 2]
// let b = [3 , 4]

// let c = [...a , ...b]
// console.log(c);            // Spread opeartor //



// let [n , p , ...rest] = [53 , 56 , 96 , 85 ,42 , 32 , 81]        // Rest is used for boxing left things // 
// console.log(rest);



// function add(numbers){
//     console.log(numbers);
// }

// console.log(add( 4 , 5 , 6 , 7));


// function add(num1 , ...numbers){
//     let sum = num1;
//     for (let value of numbers){
//         sum = sum + value;
//     }
//     return sum;
// }

// let box= console.log(add(4 , 5 , 6 , 7));

// let box = add(4 , 5 , 6 , 7)
// console.log(box);






