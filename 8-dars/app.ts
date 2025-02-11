interface Userr {
  name: string;
  age: number;
  weight: number;
  height?: number;

  Hello(): void;
}

// interfacedan class yaratish
class Studentt implements Userr {
  name: string = "Javohir";
  age: number = 20;
  weight: number = 70;
  height:number = 180;  // Ixtiyor ozgaruvchi
  course: number = 3;

  Hello(): void {
    console.log("Salom");
  }
}


// interface dan obyekt yaratish
let MyStudent: Userr = {
  name: "Javohir",
  age: 20,
  weight: 70,

  Hello() {
    console.log("Salom");
  },
};

// console.log(MyStudent.Hello());


// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   voise(): void;
// }

// const myDog: Dog = {
//   name: "Rex",
//   voise: () => console.log("Woof!"),
// };



// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//     voise: () => void;
// };

// const myDog: Dog = {
//   name: "Rex",
//   voise: () => console.log("Woof!"),
// };


class Dogs{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}


let Mydog = new Dogs('Rex', 3);

console.log(Mydog.name);

