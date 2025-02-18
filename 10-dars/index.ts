class Car {

    constructor( 
        public model: string,
        public name:string
    ) {}

  
    public drive(): void {
      console.log(`${this.model} is driving`);
    }
  }

 class MyCar extends Car {
    public probeg:number = 0;
 }


 let myCar = new MyCar("Chevralet","Gentra");
    console.log(myCar.model)
    console.log(myCar.name)
    console.log(myCar.probeg)


  
const car = new Car("Tesla","Model S");

  console.log(car.model);  // ✅ Ruxsat beriladi
  console.log(car.name);  // ✅ Ruxsat
  car.drive();             // ✅ Ruxsat beriladi
  





//   Private

class BankAccount {
    constructor( private balance: number) {}
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public getBalance(): number {
      return this.balance;
    }

    private getBalance2(): number {
        return this.balance;
      }


  }
  
  const account = new BankAccount(1000);
  account.deposit(500)
  console.log(account.getBalance());  // ✅ Ruxsat beriladi
//   console.log(account.balance);    // ❌ Xato: 'balance' private
// account.getBalance2(); // ❌ Xato: 'balance' private
  


// protected

class Animal {
    constructor( protected name: string) {}
}
  
class Dog extends Animal {
    public bark(): void {
      console.log(`${this.name} is barking`); // ✅ Ruxsat beriladi, chunki subclass ichida
    }

}
  
  const dog = new Dog("Rex");
//   console.log(dog.name); // ❌ Xato: 'name' protected
  dog.bark();  // ✅ Ruxsat beriladi
  