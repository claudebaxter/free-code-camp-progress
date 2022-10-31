//a "REAL" roman numeral converter 

function convertToRoman(int) {
  let romanNum = '';

  romanNum +=  'T'.repeat(int / 5000);  int %= 5000;
  romanNum +=  'M'.repeat(int / 1000);  int %= 1000; 
  romanNum += 'CM'.repeat(int / 900);   int %= 900; 
  romanNum +=  'D'.repeat(int / 500);   int %= 500;  
  romanNum += 'CD'.repeat(int / 400);   int %= 400;
  romanNum +=  'C'.repeat(int / 100);   int %= 100;
  romanNum += 'XC'.repeat(int / 90);    int %= 90;
  romanNum +=  'L'.repeat(int / 50);    int %= 50;
  romanNum += 'XL'.repeat(int / 40);    int %= 40;
  romanNum +=  'X'.repeat(int / 10);    int %= 10;
  romanNum += 'IX'.repeat(int / 9);     int %= 9;
  romanNum +=  'V'.repeat(int / 5);     int %= 5;
  romanNum += 'IV'.repeat(int / 4);     int %= 4;
  romanNum +=  'I'.repeat(int);

  return romanNum;
}
console.log(convertToRoman(5999));