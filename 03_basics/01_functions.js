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

// console.log(loginUserMessage("Amit"));
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Amit",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));