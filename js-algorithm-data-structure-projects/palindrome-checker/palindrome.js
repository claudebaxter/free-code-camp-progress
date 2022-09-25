function palindrome(str) {
  let arr = [];
  let newStr = str.toLowerCase().replace(/[,\.\s]+/gi, '');

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

console.log(palindrome("123211"))

palindrome("eye");

//how to match only alphanumeric characters in various quotes and strings:
// [\w] is short for [A-Za-z0-9_]
// regex to match all letters and numbers

/* how to match the opposite of alphanumerics (non alphanumerics)
   [\W] is short for [^A-Za-z0-9_]
   note this is a capital W 