// 14. Generics #3 (extends, ternar)


// extends

// type A<T> = T;
// type B = A<string>;
// type C = A<number>;
// type D = A<"js">;


type A<T extends string> = T;
type B = A<string>;
// type C = A<number>; // error
type D = A<"js">; // js




