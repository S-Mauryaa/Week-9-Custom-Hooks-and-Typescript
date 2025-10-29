"use strict";
// function doSomething(keyPressed : string) {
// 	// do something.
// }
Object.defineProperty(exports, "__esModule", { value: true });
// ! here we are creating the  enums with multiple  constatnts so that we can call it later
// enum Direction {
//     up,
//     down, 
//     left,
//     right
// }
// function doSOmething(KeyPressed:Direction){
// }
// // Calling it
// doSOmething(Direction.up)
// doSOmething(Direction.down)
// console.log(Direction.up);
// console.log(Direction.down);
// In js code this  up,down,left,right are assigned wiht few values they are 0,1,2,3 
// to  give our desired vlues  we will make few changes in the  ts file
var Direction;
(function (Direction) {
    Direction["up"] = "Up";
    Direction["down"] = "Down";
    Direction["left"] = "Left";
    Direction["right"] = "Right";
})(Direction || (Direction = {}));
function doSOmething(KeyPressed) {
}
// Calling it
doSOmething(Direction.up);
doSOmething(Direction.down);
console.log(Direction.up);
//# sourceMappingURL=enums.js.map