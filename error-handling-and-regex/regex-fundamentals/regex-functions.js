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


// String to Match
const str = 'gray?';

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