const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Maya', () => {
    expect(values.firstName).toEqual('Maya');
  });
  test('lastName is Angelou', () => {
    expect(values.lastName).toEqual('Angelou');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1989', () => {
    expect(values.birthYear).toEqual(1989);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Maya Angelou and I am 36 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Maya Angelou', () => {
    expect(values.fullName).toEqual('Maya Angelou');
  });
  test('age is 36', () => {
    expect(values.age).toEqual(36);
  });
});
