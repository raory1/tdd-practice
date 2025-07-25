function reverseString(str) {
  if (str) {
    return str.split('').reverse().join("");
  } else {
    return '';
  }
}

module.exports = reverseString;
