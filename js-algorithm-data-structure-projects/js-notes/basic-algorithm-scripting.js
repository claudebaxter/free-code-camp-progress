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

