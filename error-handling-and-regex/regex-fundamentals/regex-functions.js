let re;
// Literal Characters
re = /hello/;
re = /hello/i

// Meta Character Symbols
re = /^h/i //Must Start With
re = /World$/i //Must End With
re = /^hello$/ // Must begin and end with
re = /h.llo/i //Matches any ONE character
re = /h*llo/i //Matches any charc=acter 0 or more times
re = /gre?a?y/i // Optional Character
re = /gre?a?y\?/i // Escape Characters

//Brackets [] - Character Sets

re = /gr[ea]y/i //Must be a or e cannot be nothing
re = /[GF]ray/i
re = /[^GF]ray/i // Will match anything other than G or F
re = /[A-Z]ray/ // Any uppercase letter
re = /[a-z]ray/ // Any lowercase letter
re = /[A-Za-z]ray/ // Any letter of Any Case
re = /[0-9]ray/ //Number Range

// Braces {} - Quantifiers
re = /hel{2}o/i //Must occur exactly {m} amount of times
re = /hel{2,4}o/i // Must occur between the amounts in braces
re = /hel{2,}o/i // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/

// Short Hand Character Classes

re = /\w/ //Word Character - alphanumeric or _
re = /\w+/ // + = one or more
re = /\W/ // nonword characters
re = /\d/ // Will match any digit
re = /\d+/ // + = one or more digit
re = /\D/ // Non Digit Characters
re = /\s/ // Match white space character
re = /\S/ // Match non white space character
re = /Hell\b/i //Word Boundary  - only get that specific word not another word that has it

// Assertions 
re = /x(?=y)/ // Match x only if it is folowed by y
re = /x(?!y)/ // Match x only ig not followed by y

// String to Match
const str = 'Hello welcomexj to Hell';

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);