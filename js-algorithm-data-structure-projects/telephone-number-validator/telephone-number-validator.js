function telephoneCheck(str) {
  let formatCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
		/*protip: regex translators exist (i.e. https://www.regextranslator.com/
		this is a great resource to learn and test regular expressions to
		built a deeper understanding.*/
		

  if (formatCheck.test(str)) {
  return true; } else {
    return false;
  }
}

console.log(telephoneCheck("(555)-555 5555"));