
class Car{

    public name:string = ''
    private seria:string = ''

    constructor(nom:string,madel:string) {
        this.name = nom;
        this.seria = madel;
    }

    getSeriya(){
        return `Seriyasi: ${this.seria}`;
    }

    get getName(){
        return this.name;
    }

    set setName(nom:string){
        this.name = nom;
    }


}

let MyCar = new Car("Nexia","1.6");
let newCar = new Car("Malibu","2.0");

// console.log(newCar.name); // Malibu
// // console.log(newCar.seria); // Error: Property 'seria' is private and only accessible within class 'Car'.
// console.log(newCar.getSeriya()); // Seriyasi: 2.0

// console.log(MyCar.getName); // Nexia
// MyCar.setName = "Spark";
// console.log(MyCar.getName); // Spark





class Personn {
    public name: string;
    private age: number;
    protected salary: number;

    static isFlying:boolean = false;
  
    constructor(name: string, age: number, salary: number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    getAge(): number {
      return this.age;
    }

    getSolary(): number {
        return this.salary;
    }

  }
  
  const person = new Personn("John", 30, 5000);

//   console.log(person.name); // John
//   // console.log(person.age); // Xatolik: age private
//   // console.log(person.salary); // Xatolik: salary protected
//   console.log(person.getAge()); // 30
//   console.log(person.getSolary()); // 5000
  




// class Animal {}

// const rex = new Animal();  // Object

// console.log(rex instanceof Animal); // true
// console.log(rex instanceof Object); // true
// console.log(rex instanceof Car); // false


const arr = [1, 2, 3];
let namee = "John";  // String

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof String); // false

console.log( typeof namee ); // String




