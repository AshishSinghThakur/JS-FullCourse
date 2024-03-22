function mynewFunc(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
}

//mynewFunc()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2,5)

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(5,7)
//console.log("Result: ", result);

function loginUserMessage(username){
    //if(!username){}
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ashish"))
//console.log(loginUserMessage())


function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200,300,400));

const user={
    username : "Ashish",
    price : 1000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

const myArray= [100, 200, 300, 400]

function handleArray(anyArray){
    return anyArray[2]
}
console.log(handleArray(myArray))