import calculateHealth from '../basic';

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 45 }, 'wounded'],
  ['wounded border', { name: 'Маг', health: 50 }, 'wounded'],
  ['wounded border lower', { name: 'Маг', health: 15 }, 'wounded'],
  ['critical', { name: 'Маг', health: 10 }, 'critical'],
])('should return %s status for health %i', (_, character, expected) => {
  const result = calculateHealth(character);
  expect(result).toBe(expected);
});