// alert("hello hamed");
// console.log(1);
// console.log(2);


//the value of the variable is changable
let age = 25;
let year = 2024

console.log(age, year);

age = 30
console.log(age);

//unchangable value of the variable

const points = 100;

console.log(points);

// points = 101;
// console.log(points);

//older method to create variables and it s changable
var score = 75;
console.log(score);
score = 76;
console.log(score);

// my age should be myAge ,
// variables cant start with number
// , we cant use reserved key word for the
// name of variables like let const = 20;


//Data type 


//Strings 
console.log("hello,world!");

let email = "hamedmiri71@gmail.com";
console.log(email);

//string concatenation

let first_name = "Hamed";
let last_name = "Miri";
let full_name = first_name+ " " + last_name;
console.log(full_name);

//getting characters
console.log(full_name[0]);

//string length
console.log(full_name.length);

//string methods
console.log(full_name.toUpperCase());

let result = full_name.toLowerCase();
console.log(result, full_name);

let index = email.indexOf('@'); // index of the character in the string 
console.log(index);

//common string methods

//let result_email = email.lastIndexOf("m");

//let result_email = email.slice(0, 10); // it slices the email from position 0 to 10

//let result_email = email.substring(4, 10) //it goses from position 4 to 14

//let result_email = email.replace("h", "n"); // it s going to replace the first m wuth  n

//console.log(result_email);

//NUMBERS

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);
//math operators +, -<*, /, **, %

console.log(10/2);
//let result_num = radius % 3;
//let result_num = pi * radius ** 2;
//order of operation - B(bracket) I(tavan) D(devision) M(multiply) A(addition) S(submision)
//let result_num = 5 * (10-3) ** 2;
//console.log(result_num);
let likes = 10;
likes = likes +1
likes++;
likes += 10;
likes -= 5;
likes --;
likes *= 2;
likes /= 2;

let result_con = "the blog has " + likes + " likes";
console.log(result_con);
console.log(likes);







