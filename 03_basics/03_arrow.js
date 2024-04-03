const user={
    username: "Ashish",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to the website`)
        //console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Allen"
// user.welcomeMessage()
//console.log(this)

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }

//const addTwo=(num1,num2)=> num1 + num2
const addTwo=(num1,num2)=> (num1 + num2)

console.log(addTwo(3,4))
