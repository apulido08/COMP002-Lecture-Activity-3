function greet(Bob) {
    console.log("Hello, " + Bob + "!")
}

greet("Bob");

let diameter = 10;
if(diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    console.log("The circumference is: " + circumference);
}

function printHello1() {
    console.log("This is printHello1()");
}

function printHello2() {
    console.log("This is printHello2()");
    printHello1();
}

printHello2();
printHello1();

function greet(Bob) {
    console.log("Hello, " + Bob + "!")
}

greet("Bob");



const chicken = () => {
    return egg();
};
const egg = () => {
    return chicken();
};

console.log(chicken () );