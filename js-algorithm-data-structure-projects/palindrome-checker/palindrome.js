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