// for each loop

const coding = ["Js", "Ruby", "Java", "Python", "Cpp"];

// coding.forEach( function (val) {
//     console.log(val);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe (item) {
//     console.log(item);
// }

// coding.forEach(printMe);



// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )



// array with miltiple objects
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);  // accesing object of array value
} )