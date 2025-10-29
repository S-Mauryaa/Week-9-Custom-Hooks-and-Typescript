// function doSomething(keyPressed : string) {
// 	// do something.
// }

// ! here we are creating the  enums with multiple  constatnts so that we can call it later
enum Direction {
    up,
    down, 
    left,
    right
}
function doSOmething(KeyPressed:Direction){
}
// Calling it
doSOmething(Direction.up)
doSOmething(Direction.down)
console.log(Direction.up);
// console.log(Direction.down);
// In js code this  up,down,left,right are assigned wiht few values they are 0,1,2,3 
// to  give our desired vlues  we will make few changes in the  ts file

// enum Direction {
//     up="Up",
//     down="Down", 
//     left="Left",
//     right="Right"
// }
// function doSOmething(KeyPressed:Direction){
// }
// // Calling it
// doSOmething(Direction.up)
// doSOmething(Direction.down)
// console.log(Direction.up);

// @ The common use case of  the  enums  are  in the Express for giving various status codes
// agar hume  same  changes multiple jagah karne ho like  status code change krne ho multiple jagah to enum me
// ek jagah change kro saare jagah change ho jayega
// const app=express();
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })