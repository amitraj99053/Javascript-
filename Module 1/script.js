// var, let, const 

var a = 12;
var a = 15; // OK

let age = 25;
age = 30; // OK
// let age = 40; // Error

const pi = 3.14;
pi = 3.14159;  // Error

const student = {name : "Amit"};
student.name = "Anmol";  // OK
student = {};   // Error


// Scope
{
    var x = 5;
    let y = 10;
    const z = 15;
}

console.log(x);  // OK 5
console.log(y);  // ReferenceError
console.log(z);  // ReferenceError

// Hoisting 

console.log(c);  // Undefind
var c = 10;

console.log(d);  // ReferenceError
let d = 10;