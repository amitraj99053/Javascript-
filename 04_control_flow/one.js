// if 

if (true) {
    // continue in the condition
}

if (false) {
    // discontinue from this condition
}

const isUserLoggedIn = true

if (isUserLoggedIn) {

}

// <, >, <=, >=, ==, !=, ===

// if (2 == "2") {
//     console.log("executed");
// }

// if (2 === "2") {
//     console.log("executed");
// }


// if (2 != 3) {
//     console.log("executed");
// }

const tempreture = 41;

// if (tempreture < 50) {
//     console.log("less than 50");
// } else {
//     console.log("greater then 50");
// }

const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000

// don't do like this
// if (balance > 500) console.log("Test1"), console.log("Test2");

// if (balance < 500) {
//     console.log("Less then 500");
// } else if (balance < 750) {
//     console.log("Less then 750");   
// } else if (balance < 900) {
//     console.log("Less then 900");
// } else {
//     console.log("Less then 1100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allowed to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Loged in");
}