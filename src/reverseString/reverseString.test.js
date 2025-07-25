const reverseString = require('./reverseString');

describe('Reverse string', () => {
  test('Reverse single word', () => {
    expect(reverseString('ruth')).toEqual('htur');
  });

  test('Reverse multiple words', () => {
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });

  test('Reverse empty words', () => {
    expect(reverseString('')).toEqual('');
  });
});
