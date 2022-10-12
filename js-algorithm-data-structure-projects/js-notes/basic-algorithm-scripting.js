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

/*Truncate a String
Truncate a string (first argument) if it is longer than the given 
maximum string length (second argument). Return the truncated string 
with a ... ending.*/

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//SOLUTION:

function truncateString(str, num) {
  let shorten = "";
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
  return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//alt sol 1:
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

//--------------------------------------------------------

/*Finders Keepers
Create a function that looks through an array arr and returns the 
first element in it that passes a 'truth test'. This means that given 
an element x, the 'truth test' is passed if func(x) is true. If no 
element passes the test, return undefined.*/

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//SOLUTION:

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//alt sol 1:

function findElement(arr, func) {
  return arr.find(func);
}

//alt sol 2:

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

//alt sol 3:

function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

//-------------------------------------------------------------

/*Boo who
Check if a value is classified as a boolean primitive. Return true 
or false.

Boolean primitives are true and false.*/

function booWho(bool) {
  return bool;
}

booWho(null);

//SOLUTION:

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));

//you don't need to console.log here I was testing something and forgot to change this back to the example

//-------------------------------------------------------------------

/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting 
words like the and of.*/

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

//SOLUTION:

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//ALT SOL 1:

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

//ALT SOL 2:

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

//------------------------------------------------------------------------

/*Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//SOLUTION:

function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++
  }
  return localArray;
}

//ALT SOL 1:

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

//ALT SOL 2:

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

//-------------------------------------------------------------------------

/*Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//SOLUTION:

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

//ALT SOL 1:

function bouncer(arr) {
  return arr.filter(Boolean);
}

//--------------------------------------------------------------------------

/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value should 
be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater 
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has 
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater 
than 5 (index 1).*/

function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);

//SOLUTION:
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
    return i;
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

//ALT SOL 1:

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

//ALT SOL 2:

function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

//ALT SOL 3:

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);

//-----------------------------------------------------------------------------

/*Mutations
Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the 
second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not 
contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are 
present in Alien.*/

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

//SOLUTION:

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);

//DECLARATIVE SOLUTION:

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

//RECURSIVE SOLUTION:

function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

//---------------------------------------------------------------------------------

/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//SOLUTION:

function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//ALT SOL 1:

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

//ALT SOL 2:

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//ALT SOL 3:

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

//ALT SOL 4:

function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}