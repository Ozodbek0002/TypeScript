// 12. Generics (types, array, function) 

type Box<T> = {
    value: T;
  };
  
  const numberBox: Box<number> = { value: 42 };
  const stringBox: Box<string> = { value: "Hello" };


  // Generik funksiya
function identity<T>(value: T): T {
    return value;
}
  
  console.log(identity<number>(10));     // 10
  console.log(identity<string>("Hello")); // "Hello"
  console.log(identity<boolean>(true));   // true


  // Generik massiv
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];

console.log(getFirstElement(numbers)); // 1
console.log(getFirstElement(words));   // "apple"



interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  const pair1: Pair<string, number> = { first: "Age", second: 25 };
  const pair2: Pair<boolean, string> = { first: true, second: "Active" };
  
  console.log(pair1); // { first: "Age", second: 25 }
  console.log(pair2); // { first: true, second: "Active" }
  
interface Triple<TT,UU,VV>{
    first: TT;
    second: UU;
    third:VV;
}

const triple1: Triple<string, number, boolean> = { first: "Age", second: 25, third:true };
console.log(triple1); // { first: "Age", second: 25, third:true }

const triple2: Triple<boolean, string, number> = { first: true, second: "Active", third: 25 };
console.log(triple2); // { first: true, second: "Active", third: 25 }



class Container<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  }
  
  const numberContainer = new Container<number>(100);
  console.log(numberContainer.getValue()); // 100
  
  const stringContainer = new Container<string>("Hello");
  console.log(stringContainer.getValue()); // "Hello"

  const booleanContainer = new Container<boolean>(true);
  console.log(booleanContainer.getValue()); // true
  
  



// Defaut type


type ResponseData<T = string> = {
    data: T;
};
  
const response1: ResponseData = { data: "Success" }; // T = string
const response2: ResponseData<number> = { data: 200 }; // T = number
console.log(response1); // { data: "Success" }
console.log(response2); // { data: 200 }



  
  



