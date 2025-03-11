
type A<T> = T extends string ? T : never;

let a:A<number[]>;


// infer 

type B<T> = T extends (infer U)[] ? U : never;
let b:B<number[]>;





