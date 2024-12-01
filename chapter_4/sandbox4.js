//Functions decleration

function greet(){
    console.log("hello world");
}

//function expression when we store function inside the variable

const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};


greet();
speak("hamed", "morning");


const calcArea = function(radius){
    // let area = 3.14 * radius**2;
    // return area;
    return 3.14 * radius**2;
}

const area = calcArea(5); // global scope
console.log(area);

const calcVol = function(area){
    return area **2;
}

const volum = calcVol(area);
console.log(volum);


//arrow function

const calArea = (radius) => {
    return 3.14 * radius**2;
};

const greet1 = function(){
    return 'hello world';
}

const greet2 = () => {
    return 'hello world';
}

const result = greet2();
console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total;
};

console.log(bill([10,20,30], 0.2));


//functions

const name1 = 'hamed';
const greet3 = () => {
    return "hello world";
};

let resultOne = greet3();
console.log(resultOne);

//methods

let resultTwo = name1.toUpperCase();
console.log(resultTwo);

// the only diffrence is we call method on the backof somthing. like .toUpperCae()











