// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a); 
}

// for (let i = 0; i < array.length; i++) {
//     const element = salary[i];
// }


// console.log(a);
// console.log(b);
// console.log(c);
 

// nested 

function one() {
    const username = "Amit";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Amit"
    if (username === "Amit") {
        const website = " Youtube"
        // console.log(username + website); 
    }
    // console.log(website);
}
// console.log(username);



//   ------------------------ interesting --------------------

console.log(addone(5));
function addone(num) {
    return num + 1;
} 


// addTwo(5); 
const addTwo = function(num) {
    return num + 2;
}

