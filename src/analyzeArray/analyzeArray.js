function analyzeArray(arr) {
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return {
    average,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = analyzeArray;
