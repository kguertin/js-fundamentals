const user = { email: 'bort@test.com' }

try {
  // This will produce a reference error
  // myfunction();

  //produce a type error
  // null.myFunction()

  //Will Produce a syntax error
  // eval('Hello World')

  // Will produce a URI error
  // decodeURIComponent('%')

  if (!user.name) {
    // throw "User has no name!"
    throw new SyntaxError('User Has No Name')
  }

} catch (err) {
  console.log(err)
  // console.log(err.message)
  // console.log(err.name)
  // console.log(err instanceof ReferenceError)

} finally {
  console.log('Finally Runs Regardless of Result...')
}

console.log('Program Continues...');