const accountId = 144556
let accountEmail = "amit123@gmail.com"
var accountPassword = "123456"
accountCity = "Delhi"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hc@gmail.com"
accountPassword = "956"
accountCity = "Bangluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/