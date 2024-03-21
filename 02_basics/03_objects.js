//singleton
//Object.creata()

//Object literals

const sym= Symbol("myKeys")

const JsUser={

    name: "Ashish",
    "full Name": "Ashish Singh",
    [sym]:"myKey1",
    email: "ask.ss@gmail.com",
    phoneNumber: +91-8777777777,
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]

}

// console.log(JsUser.name);
// console.log(JsUser["full Name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[sym]);

JsUser.greeting=()=>{
    console.log("Hello my boi");
}

JsUser.greeting2=function(){
    console.log(`Hello my boi, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());
