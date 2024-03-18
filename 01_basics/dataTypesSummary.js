// Primitive

// 7--> String, number,boolean, null, undefined, symbol, BigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)


// Reference (Non-Primitive)

//Arrays, Objects,Functions

const heros=['shaktiman','hanuman','ganuman']
let myObj ={
    name:'Ashish',
    age:27
}


const myFunc=function(){
    console.log("Hello World");
}



/*
 * 
 * Stack (Primitive), Heap(Non-primitive)
 */

let myYoutubeName='AshishSinghChannel'
let anotherName=myYoutubeName
anotherName='AshishKaNewChannel'

console.log(anotherName);
console.log(myYoutubeName);

let userOne={
    email:"ask.dff@gmail.com",
    phone:4443333
}
let userTwo=userOne
userTwo.email="mine@gmail.com"
console.log(userOne);
console.log(userTwo);