// Maps = Key Value Pairs -  Can use any type as a key or value

const map1 = new Map();

//set Keys 
const key1 = 'some string';
const key2 = {};
const key3 = function () { };

// Set map values by ket 
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

//Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//Count Value 
console.log(map1.size);

//Iterating Through Maps
//Loop using for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`)
}

//Keys only
for (let key of map1.keys()) {
  console.log(`${key}`)
}

//values only 
for (let value of map1.values()) {
  console.log(`${value}`)
}

//Loop with for each
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`)
})

//Convert sets to arrays - create an array of key val pairs

const keyValArr = Array.from(map1);
console.log(keyValArr);

//array of values
const valArr = Array.from(map1.values());
console.log(valArr)

const keyArr = Array.from(map1.keys());
console.log(keyArr)