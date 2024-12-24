const accountId = 12345
let accountEmail = "Anvesh@google.com"
var accountPassword = "342567"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed
accountEmail = "asdf@google.com"
accountPassword = "65432"
accountCity = "goa"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var 
because of issue in block scope and functional scope...
*/

