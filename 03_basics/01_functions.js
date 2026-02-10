function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;

    return number1 + number2
}

// addTwoNumbers(5, 6);

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);



function loginUserMessage(userName = "Sam") {
    if(userName === undefined) {
        console.log("Please enter userName");
        return;
    }
    return `${userName} just loged in`;
}

console.log(loginUserMessage("Amit"));
// console.log(loginUserMessage());



