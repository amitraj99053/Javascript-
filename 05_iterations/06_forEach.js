// forEach loop and filter

// const coding = ["Js", "Ruby", "Java", "Python", "Cpp"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);


// ----------- USING filter ------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNums);

// option 1
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

// option 2
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } );
// console.log(newNums);



// -------------- USING forEach ----------------- 
const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);





const books = [
    { tittle: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { tittle: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { tittle: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { tittle: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { tittle: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { tittle: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { tittle: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { tittle: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { tittle: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { tittle: 'Book Ten', genre: 'Fiction', publish: 1981, edition: 2006 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' );

userBooks = books.filter( (bk) => bk.publish >= 1995 );
userBooks = books.filter( (bk) => { return bk.publish >= 1995 } );

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'
} );

console.log(userBooks);