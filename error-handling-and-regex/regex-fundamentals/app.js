let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input)

// test() -Returns true or false
// const result = re.test('Hello')
// console.log(result)

// match() - return result array or null
// const str = 'Hello There'
// const result = str.match(re)
// console.log(result)

//search() - returns the index of the first match and if not found returns -1
// const str = 'Well Hello There';
// const result = str.search(re)
// console.log(result)

// replace() - return a new string with some or all matches of a pattern
const string = 'Hello there';
const newString = string.replace(re, 'Hi');
console.log(newString)

