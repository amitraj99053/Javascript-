const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Amit";
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "Amit";
//     console.log(this.username);
// }

const chai = () => { // Arrow function
    let username = "Amit";
    console.log(this);
}

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// explicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "Amit"};
const addTwo = (num1, num2) => ({username: "Amit"});

console.log(addTwo(5, 4));

// const myArray = [2, 5, 8, 9, 7];

// myArray.forEach();
