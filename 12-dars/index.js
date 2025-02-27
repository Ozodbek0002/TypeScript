"use strict";
// 12. Generics (types, array, function) 
const numberBox = { value: 42 };
const stringBox = { value: "Hello" };
// Generik funksiya
function identity(value) {
    return value;
}
console.log(identity(10)); // 10
console.log(identity("Hello")); // "Hello"
console.log(identity(true)); // true
// Generik massiv
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];
console.log(getFirstElement(numbers)); // 1
console.log(getFirstElement(words)); // "apple"
const pair1 = { first: "Age", second: 25 };
const pair2 = { first: true, second: "Active" };
console.log(pair1); // { first: "Age", second: 25 }
console.log(pair2); // { first: true, second: "Active" }
const triple1 = { first: "Age", second: 25, third: true };
console.log(triple1); // { first: "Age", second: 25, third:true }
const triple2 = { first: true, second: "Active", third: 25 };
console.log(triple2); // { first: true, second: "Active", third: 25 }
class Container {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberContainer = new Container(100);
console.log(numberContainer.getValue()); // 100
const stringContainer = new Container("Hello");
console.log(stringContainer.getValue()); // "Hello"
const booleanContainer = new Container(true);
console.log(booleanContainer.getValue()); // true
const response1 = { data: "Success" }; // T = string
const response2 = { data: 200 }; // T = number
console.log(response1); // { data: "Success" }
console.log(response2); // { data: 200 }
//# sourceMappingURL=index.js.map