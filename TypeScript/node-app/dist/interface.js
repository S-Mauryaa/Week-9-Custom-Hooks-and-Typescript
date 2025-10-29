"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hello" + user.firstName);
}
isLegal({
    firstName: "Saurabh",
    lastName: "Maurya",
    age: 20,
    email: "saurabh@gmail.com"
});
//# sourceMappingURL=interface.js.map