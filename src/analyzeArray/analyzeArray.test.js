const analyzeArray = require('./analyzeArray');

describe('Analyze basic data', () => {
  test('basic', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      length: 1,
      max: 8,
      min: 6,
    });
  });
});
