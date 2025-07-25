class Object {
  constructor(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }
}

function analyzeArray(arr) {
  average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  const newObj = new Object(average);
  return newObj;
}

module.exports = analyzeArray;
