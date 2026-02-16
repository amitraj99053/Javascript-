// for in loop
const myObject = {
    js: 'Javascript', 
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key); // key
    // console.log(myObject[key]);  // value
    // console.log(`${key} shortcut is for ${myObject[key]}`);  // Both
}


const programming = ["Js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key); 
    // console.log(programming[key]);
}



// Maps
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    // console.log(key); // no output
}

// NOTE: MAP can't be iterable

