"use strict";
// 16. Utils (Partial, Required, NonNullable, Record) 
// type PartialUser = {
//     id?: number | undefined;
//     name?: string | undefined;
//     age?: number | undefined;
// }
const user1 = { name: "Alice" }; // Faqat `name` bo‘lishi mumkin
const user2 = { id: 1, age: 25 }; // Har qanday kombinatsiya mumkin
// type RequiredUser = {
//     id: number;
//     name: string;
//     age: number;
// }
const user = { id: 1, name: "Bob", age: 30 }; // Hammasi kerak!
// type CleanData = string | number | boolean
let value = "Hello"; // ✅
value = 42; // ✅
const users = {
    1: "Alice",
    2: "Bob",
    3: "Charlie",
    // '2': true, // ❌ Xatolik
};
//# sourceMappingURL=index.js.map