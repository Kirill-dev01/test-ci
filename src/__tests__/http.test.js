import fetchData from '../http';

test('should throw error with "Mock this!"', () => {
  expect(() => fetchData('https://example.com')).toThrow('Mock this!');
});