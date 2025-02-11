// Abstract Class

class Dogs {
  name: string = "Rex";
  age: number = 2;
}

let Mydog = new Dogs();

abstract class Cats {
  name: string = "Tom";
  age: number = 3;

  abstract breed: boolean; // abstract property -> classimda bu propertyni yozish shart
  abstract voise(): void; // abstract method -> classimda bu methodni yozish shart
}

class Mycats extends Cats {
  breed = false; // abstract propertyni yozish shart

  voise(): void {
    console.log("Meow");
  }
}

let MyCat = new Mycats();
// console.log(MyCat.breed); // false
// MyCat.voise(); // Meow

// readonly

interface Person {
  readonly id: number;
  name: string;
}

const Men: Person = {
  id: 1,
  name: "Ali",
};

Men.name = "Vali"; // ✅ O'zgartirish mumkin
// Men.id = 2; // ❌ Xato! Readonly maydon o'zgartirilmaydi

type Carr = {
  brand: string;
  model: string;
};

const myCar: Readonly<Carr> = {
  brand: "Toyota",
  model: "Camry",
};

// myCar.brand = "Honda"; // ❌ Xato! Readonly obyektda qiymat o‘zgartirib bo‘lmaydi



const Sonlar: ReadonlyArray<number> = [1, 2, 3];
const Ismlar: ReadonlyArray<string> = ["Ali", "Vali", "Hasan"];

// Sonlar.push(4); // ❌ Xato! ReadonlyArray o‘zgartirib bo‘lmaydi
// Sonlar[0] = 10; // ❌ Xato!

// Ismlar[0] = "Javohir"; // ❌ Xato! ReadonlyArray o‘zgartirib bo‘lmaydi
