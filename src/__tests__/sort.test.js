import sortHeroes from '../sort';

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroes(input);

  // Используем toEqual для сравнения содержимого массивов/объектов (Deep Equality)
  // toBe не сработает, так как ссылки на массивы разные (если мы создавали копию)
  // или просто для проверки структуры.
  expect(result).toEqual(expected);
});