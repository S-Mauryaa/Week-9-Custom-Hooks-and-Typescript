interface User{
    firstName:string;
    lastName:string;
    // email:string;
    age:number;
}
function isLegal(user:User){
        if(user.age>18){
            return true
        }
        else{
            return false;
        }
}
function greet(user:User){
 console.log("hello"+user.firstName);
 
}
isLegal({
    firstName:"Saurabh",
    lastName:"Maurya",
    age:20
})