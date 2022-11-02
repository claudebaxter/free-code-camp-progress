function convertToRoman(num) {
  let romanNum = '';

  romanNum +=  'T'.repeat(num / 5000);  num %= 5000;
  romanNum +=  'M'.repeat(num / 1000);  num %= 1000; 
  romanNum += 'CM'.repeat(num / 900);   num %= 900; 
  romanNum +=  'D'.repeat(num / 500);   num %= 500;  
  romanNum += 'CD'.repeat(num / 400);   num %= 400;
  romanNum +=  'C'.repeat(num / 100);   num %= 100;
  romanNum += 'XC'.repeat(num / 90);    num %= 90;
  romanNum +=  'L'.repeat(num / 50);    num %= 50;
  romanNum += 'XL'.repeat(num / 40);    num %= 40;
  romanNum +=  'X'.repeat(num / 10);    num %= 10;
  romanNum += 'IX'.repeat(num / 9);     num %= 9;
  romanNum +=  'V'.repeat(num / 5);     num %= 5;
  romanNum += 'IV'.repeat(num / 4);     num %= 4;
  romanNum +=  'I'.repeat(num);

  return romanNum;
}
console.log(convertToRoman(5999));