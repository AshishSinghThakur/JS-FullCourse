const user={
    username: "Ashish",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to the website`)
    }
}

user.welcomeMessage()
user.username="Allen"
user.welcomeMessage()