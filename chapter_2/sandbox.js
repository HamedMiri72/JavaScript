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


//STRING

const title = 'best reads of 2024';
const author = 'hamed';
const likes_string = 30;
//concatenation way 
let result_string = "the blog call " + title + " by " + author + " has " + likes + " likes ";
console.log(result_string);

//Template string way the best way
let result_tem = `The blog clled ${title} by ${author} has ${likes} likes`;
console.log(result_tem);

//creating html template 
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
`;
console.log(html);

//ARRAY

let list = ["hamed", "aksahy", "zeinab"];

//we can overwrite an index in the list
list[1] = "majid"
console.log(list[1]);

let ages = [20, 34, 56, 54];
console.log(ages[3]);

let random = ["hamed", "miri", 20, 30];
console.log(random);

//property and methods

console.log(list.length);

let result_list = list.join(",");
console.log(result_list);

let result_index = list.indexOf("hamed");
console.log(result_index);

let result_concatenation = list.concat(["zahra"]);
console.log(result_concatenation);

let result_push = list.push("mohamad");
let result_pop = list.pop();
console.log(result_pop); // take off the end value
console.log(result_push);
console.log(list);


// NULL AND UNDEFIEND
let age_null;

console.log(age_null, age_null + 3, `the age is ${age_null}`);

let age_null1 = null;
console.log(age_null1, age_null1 + 3, `the age is ${age_null1}`);

//BOOLEAN

// Boolean and comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email_boolean = "hamedmiri72@gmail.com";

let names = ["hamed", "miri"];
let result_names = names.includes("hamed");
console.log(result_names);

let result_boolean = email_boolean.includes("@");
console.log(result_boolean);

//comparison operators

let age_comp = 25;

console.log(age_comp == 25);
console.log(age_comp != 25);
console.log(age_comp > 20);
console.log(age_comp <= 25);


let name = "hamed";
console.log(name == "hamed");

console.log(name == "ham");

//lower case letter is grater than upper case letter
// comparison can work on letters and alphabet











