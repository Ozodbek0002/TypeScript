// 20.Utils #5 (Uppercase, Lowercase, Capitalize, Uncapitalize) 

// Uppercase

let str = "hello world";
let upper = str.toUpperCase(); // HELLO WORLD

type Mytypes = "string" | "number" | "boolean";

type Mytypes2 = Uppercase<Mytypes>; // "STRING" | "NUMBER" | "BOOLEAN"
type Mytypes3 = Lowercase<"hello world">; // "HELLO WORLD"

// Lowercase
type Mytypess = "STRING" | "NUMBER" | "BOOLEAN";
type Mytypes4 = Lowercase<Mytypes>; // "string" | "number" | "boolean"

// Capitalize

type Mytypesss = "string" | "number" | "boolean";
type Mytypes5 = Capitalize<Mytypesss>; // "String" | "Number" | "Boolean"

// Uncapitalize

type Mytypessss = "String" | "Number" | "Boolean";
type Mytypes6 = Uncapitalize<Mytypessss>; // "string" | "number" | "boolean"




