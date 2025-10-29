//# Let’s say you have a function that needs to return the first 
//# element of an array. Array can be of type either string or integer.
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }
// const el = getFirstElement([1, 2, 3]);
// --------
// type Input=number|string;
// function firstEl(arr:Input[]){
//     return arr[0];
// }
// const value = firstEl((["saurabh"]));


// *Solution For This code
//  <T> it means  identity can be any value,means its generic
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);  

// *  Original solution for this code
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())