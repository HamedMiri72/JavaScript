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

const password = "hamed miri72";

if (password.length >= 12 && password.includes("@")){
    console.log("the password is mighty strong");
}else if (password.length >= 8 || password.includes("@") && password.length > 5){
    console.log("that password is strong enough!");
}else{
    console.log("the password is not strong enough!");
}


//logical NOT(!)

let user = false;

if(!user){
    console.log("you must be logged in to continue!");
}

console.log(!true);
console.log(!false);

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }
    console.log("your score: ", scores[i]);

    if (scores[i] === 100){
        console.log("congrs, you got the top score!");
        break;
    }
}


//switch statment

const grade = "C";
switch(grade){
    case "A":
        console.log("you got a A!");
        break;
    case "B":
        console.log("you got a B!");
        break;
    case "C":
        console.log("you got a C!");
        break;
    case "D":
        console.log("you got a D!");
        break;
    case "E":
        console.log("you got a E!");
        break;
    default:
        console.log("not a valid grade!");
}

//using if statment

if(grade === "A"){

}else if(grade === "B"){

}else if(grade === "C"){

}else if(grade === "D"){

}else if(grade === "E"){

}else{

}






