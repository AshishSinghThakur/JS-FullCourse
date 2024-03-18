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
