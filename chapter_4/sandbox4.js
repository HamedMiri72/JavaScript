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












