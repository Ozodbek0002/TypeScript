// 14. Generics #3 (extends, ternar)


// extends

// type A<T> = T;

// type B = A<string>;
// type C = A<number>;
// type D = A<"js">;


// let a:B = "hello";
// let b:C = 10;
// let c:D = ""


// type A<T extends string> = T;
// type A<T extends number> = T;

// type B = A<string>;

// type C = A<12>; // error


// type D = A<"js">; // js
// type E = A<"ts">; // ts



// Ternary

// type IsString<T> = T extends string ? "Yes" : "No";

// type Test1 = IsString<string>;  // "Yes"

// type Test2 = IsString<number>;  // "No"
// type Test3 = IsString<boolean>; // "No"

// let a:Test1 = "Yes";
// let b:Test2 = "No";
// let c:Test3 = "No";



// Ko‘p bosqichli Ternary Tiplar


// type TypeCheck<T> = T extends string
//   ? "String"
//   : T extends number
//     ? "Number"
//     : "Other";

// type A = TypeCheck<string>;  // "String"
// type B = TypeCheck<number>;  // "Number"
// type C = TypeCheck<boolean>; // "Other"


// Union ( | ) bilan Generik Ternary

// type Check<T> = T extends number ? "Num" : "Not Num";

// type Result = Check<number | string>; // "Num" | "Not Num"


// let a:Result = "Num";
// let b:Result = "Not Num";
