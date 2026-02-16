// reduce

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);



// const myTotal = myNums.reduce( (acc, curr) => (acc + curr), 0 );
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
     {
        itemName: "Py course",
        price: 999
    }, {
        itemName: "Mobile dev course",
        price: 5999
    }, {
        itemName: "Data Science course",
        price: 12999
    }, {
        itemName: "Mern Stack dev course",
        price: 4999
    },
]


const priceToPay = shoppingCart.reduce( (accp, item) => (accp + item.price), 0);
console.log(priceToPay);