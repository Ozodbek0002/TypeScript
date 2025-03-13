// 17.Utils #2 (Readonly, ReadonlyArray)


// Readonly - obyekt elementlarini o'zgartirishga ruxsat bermaydi

type User = {
  name: string;
  age: number;
};

let Y: Readonly<User> = {
  name: "John",
  age: 30,
};

// Y.age = 25; // Error


// ReadonlyArray  - massiv elementlarini o'zgartirishga ruxsat bermaydi
// const numbers: ReadonlyArray<number> = [1, 2, 3, 4];

// numbers.push(5); // Error
// numbers.pop(); // Error



let a = 12 as const
// a = 13 // Error

const b = 13  
// b = 14 // Error

let c : readonly number[] = [1,2,3]
// c.push(4) // Error


class Person {
  readonly name: string = "John";
  readonly age: number = 30;
}

let person = new Person();
// person.name = "Doe"; // Error



const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); // Error

let numbers2 = [... numbers] // Copy ReadonlyArray -> Simple Array
numbers2.push(4)



