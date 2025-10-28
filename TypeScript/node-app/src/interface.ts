interface User{
    firstName:string;
    lastName:string;
    email?:string; //User  can pass it and  if no need then they will not pass it
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
    age:20,
    email:"saurabh@gmail.com"
})