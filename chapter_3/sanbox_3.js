// for loop when we know how many times we loop through somthing

for(let i = 0; i < 5; i++){
    console.log("in loop: ", i);
}

console.log("loop finished");

const names = ["hamed", "miri", "zeinab"];

for (let i = 0; i < names.length; i++){
    console.log(i);
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop

let i = 0;
while(i < 5){
    console.log("in loop: ", i);
    i++;
}

const namess = ["hamed", "miri", "nasibe"]

let n = 0;

while (n < namess.length){
    console.log(namess[n]);
    n++;
}


// if statment

const age = 25;

if (age > 20){
    console.log("you are over 20 years year!")
}

const array = ["hamed", "miri", "majid", "behrooz"];

if(array.length > 3){
    console.log("thats a lot of childerens!!")
}

const password = "hamedmiri72";

if (password.length >= 12){
    console.log("the password is mighty strong");
}else if (password.length >= 8){
    console.log("that password is long enough!");
}else{
    console.log("the password is not long enough!");
}


