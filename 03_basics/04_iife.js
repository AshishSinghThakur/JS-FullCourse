(function chai(){
    //named IIfe
    console.log(`DB CONNECTED`)
})();

(()=>{
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED THREE, ${name}`)
})("Ashish")