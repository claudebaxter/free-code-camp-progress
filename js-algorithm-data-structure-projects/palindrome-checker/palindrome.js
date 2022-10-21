function palindrome(str) {
	//creates a variable, newStr, that takes str, converts to lowercase, and replaces all symbols and non alphanumeric characters:

  let newStr = str.toLowerCase().replace(/[,_\.\s]+/gi, '').replace(/-/g, '').replace(/[^a-z0-9]+/gi, "");

	//creates a variable, reverseStr, that creates an array from newStr, reverses the array, and converts it back to a string--reversing newStr

  let reverseStr = Array.prototype.map.call(newStr, function(x) {
    return x;
  }).reverse().join('');

  if (newStr === reverseStr) {
  return true;
  }
  else {
    return false;
  }
}

//Using console.log to test palindrome() arguments to confirm results:
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("-eye"));