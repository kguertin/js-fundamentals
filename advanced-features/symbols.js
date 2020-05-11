// Create a Symbol

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym1)
// console.log(sym2)

// console.log(Symbol('123') === Symbol('123'));

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {}

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';


// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored when using JSON.stringify
console.log(JSON.stringify(myObj))

