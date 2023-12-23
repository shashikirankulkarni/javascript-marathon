let stringType = "54";
console.log(typeof stringType);
let numberType = Number(stringType);
console.log(typeof numberType);

let numExample = "shashi";
console.log(Number(numExample)); //NaN: Not a Number

//for empty strings and 0, it returns false
let age = " ";
let booleanAge = Boolean(age);
console.log(booleanAge);