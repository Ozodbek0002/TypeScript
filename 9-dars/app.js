"use strict";
// Abstract Class
class Dogs {
    constructor() {
        this.name = "Rex";
        this.age = 2;
    }
}
let Mydog = new Dogs();
class Cats {
    constructor() {
        this.name = "Tom";
        this.age = 3;
    }
}
class Mycats extends Cats {
    constructor() {
        super(...arguments);
        this.breed = false; // abstract propertyni yozish shart
    }
    voise() {
        console.log("Meow");
    }
}
let MyCat = new Mycats();
const Men = {
    id: 1,
    name: "Ali",
};
Men.name = "Vali"; // ✅ O'zgartirish mumkin
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
// myCar.brand = "Honda"; // ❌ Xato! Readonly obyektda qiymat o‘zgartirib bo‘lmaydi
const Sonlar = [1, 2, 3];
const Ismlar = ["Ali", "Vali", "Hasan"];
// Sonlar.push(4); // ❌ Xato! ReadonlyArray o‘zgartirib bo‘lmaydi
// Sonlar[0] = 10; // ❌ Xato!
// Ismlar[0] = "Javohir"; // ❌ Xato! ReadonlyArray o‘zgartirib bo‘lmaydi
//# sourceMappingURL=app.js.map