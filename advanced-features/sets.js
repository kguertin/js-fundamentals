// Sets - Store Unique Values of any type

const set1 = new Set();

//Add values to set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);

const set2 = new Set([1, true, 'string'])

console.log(set1);
console.log(set2);

console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'John' }));

// Delete from set
set1.delete(100);
console.log(set1)

//Iterate through Sets
for (let item of set1) {
  console.log(item);
}

set1.forEach(item => {
  console.log(item)
})

//can convert into arrays
const setArr = Array.from(set1);
console.log(setArr)