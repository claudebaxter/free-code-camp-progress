/*Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the 
temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature 
in Celsius. Use the variable fahrenheit already defined and 
assign it the Fahrenheit temperature equivalent to the given 
Celsius temperature. Use the formula mentioned above to help 
convert the Celsius temperature to Fahrenheit.*/

function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);

//SOLUTION:

function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));

//------------------------------------------------

/*Reverse a String
Reverse the provided string.

You may need to turn the string into an array before 
you can reverse it.

Your result must be a string.*/

function reverseString(str) {
  return str;
}

reverseString("hello");

//SOLUTION:

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");

/* This also works:

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
*/

//--------------------------------------------------

/*Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a 
factorial is the product of all positive integers less than 
or equal to n.

Factorials are often represented with the shorthand notation n!*/

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

/*Only integers greater than or equal to zero will be supplied 
to the function.*/

function factorialize(num) {
  return num;
}

factorialize(5);

//SOLUTION:

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);

/*also these solutions work as well:

2:
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

3:
function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);

4:
function factorialize(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);
*/

//--------------------------------------------------

/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//SOLUTION:

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//alternative solution 1:
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

//alt sol 2:
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

//alt sol 3:
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//alt sol 4:
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) longestLength = currentLength;
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}

//-------------------------------------------------------

/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided 
sub-array. For simplicity, the provided array will contain exactly 4 
sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//SOLUTION:

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j =1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//alt sol 1:
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

//alt sol 2:
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

//aolt sol 3:
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

//---------------------------------------------------------

/*Confirm the Ending
Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, which was 
introduced in ES2015. But for the purpose of this challenge, we would 
like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");

//SOLUTION:

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//alt sol 2:
function confirmEnding(str, target) {

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

//alt sol 3:
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

//------------------------------------------------------------

/*Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second 
argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() 
method.*/

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

//SOLUTION:

function repeatStringNumTimes(str, num) {
  let words = "";
  for (let i = 0; i < num; i++) {
    words += str;
  }
  return words;
}

repeatStringNumTimes("abc", 3);

//alt sol 1:
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

//alt sol 2:
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

//--------------------------------------------------------------

