//var c= 300
let a =200
if(true){
    let a=10
    const b=20
    var c=30
    console.log("Inner: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username= "Ashish"
    function two(){
        const website= "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username= 'Ashish'
    if(username === "Ashish"){
        const website= " youtube"
        console.log(username + website);
    }
}
//console.log(username);