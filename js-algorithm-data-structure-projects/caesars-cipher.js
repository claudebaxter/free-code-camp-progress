function rot13(str) {
  // replace() method with regex /[A-Z]/gi to substitute matching only characters 
  return str.replace(/[A-Z]/gi, c =>
  "NOPQRSTUVWXYZABCDEFGHIJKLM"[ //takes the input characters
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c) //and substitutes with these characters (with the same index)
  ]); //indexOf(c) is to convert the character into a numeric lookup index
}

console.log(rot13("A"));

//returns N