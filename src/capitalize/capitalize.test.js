const capitalize = require('./capitalize');

describe('Capitalize first letter', () => {
  test('Capitalize first letter', () => {
    expect(capitalize('ruth')).toEqual('Ruth');
  });

  test('Capitalize first letter', () => {
    expect(capitalize('cArlos')).toEqual('Carlos');
  });
  test('Capitalize first letter', () => {
    expect(capitalize('')).toEqual('');
  });

  test('Capitalize first letter', () => {
    expect(capitalize('das silva')).toEqual('Das silva');
  });
});
