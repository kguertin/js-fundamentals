// Iterators

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// // Create an Array of names

// const namesArray = ['Jack', 'Jill', 'John'];

// // Init interator and pass in the names array
// const names = nameIterator(namesArray);

// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().done)


// Generator Example

// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next().done)

//ID Generator

function* createId() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)