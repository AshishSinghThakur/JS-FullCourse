const accountId=12344
let accountEmail="ashish@google.com"
var accountPassword="12345"
accountCity="Jaipur"
//accountId=2
accountEmail="as@as.com"
accountPassword="3423"
accountCity="Gurgaon"
let accountState;
console.log(accountId)
/*
prefer not to use var
beacuse of issue in functional scope and block scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])