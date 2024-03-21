//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="1abc"
tinderUser.name="Gaurav"
tinderUser.isLogedIn=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Smith",
            lastName:"Jon"
        }
    }
}


//console.log(regularUser);

const obj1={1:'a', 2:'b'}
const obj2={3:'c', 4:'d'}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const db_users=[
    {
        id: 1,
        email: "gg@gmail.com"
    },
    {
        id: 1,
        email: "gg@gmail.com"
    },
    {
        id: 1,
        email: "gg@gmail.com"
    },
    {
        id: 1,
        email: "gg@gmail.com"
    },
    {
        id: 1,
        email: "gg@gmail.com"
    },
]

//console.log(db_users[1].email);
// console.log(tinderUser) ;
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty("name"));