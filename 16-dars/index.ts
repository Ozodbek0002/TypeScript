// 16. Utils (Partial, Required, NonNullable, Record) 

//===================================================================================

// Partial  -  barcha maydonlarni majburiy emas qiladi

interface User {
    id: number;
    name: string;
    age: number;
}
type PartialUser = Partial<User>;
// type PartialUser = {
//     id?: number | undefined;
//     name?: string | undefined;
//     age?: number | undefined;
// }

const user1: PartialUser = { name: "Alice" }; // Faqat `name` bo‘lishi mumkin
const user2: PartialUser = { id: 1, age: 25 }; // Har qanday kombinatsiya mumkin

//===================================================================================


// Required  -  barcha maydonlarni majburiy qiladi

interface User1 {
    id?: number;
    name?: string;
    age?: number;
  }

type RequiredUser = Required<User1>;
// type RequiredUser = {
//     id: number;
//     name: string;
//     age: number;
// }

const user: RequiredUser = { id: 1, name: "Bob", age: 30 }; // Hammasi kerak!

//===================================================================================

// NonNullable  - null va undefined ni olib tashlaydi

type Data = string | number | null | undefined | boolean| never;

type CleanData = NonNullable<Data>; // string | number | boolean
// type CleanData = string | number | boolean

let value: CleanData = "Hello"; // ✅
value = 42; // ✅
// value = null; // ❌ Xatolik
// value = undefined; // ❌ Xatolik


//===================================================================================

// Record  - berilgan maydonlarni boshlang‘ich qiymatlar bilan to‘ldiradi

type Users = Record<number, string>;

const users: Users = {
    1: "Alice",
    2: "Bob",
    3: "Charlie",
    // '2': true, // ❌ Xatolik
  };




  