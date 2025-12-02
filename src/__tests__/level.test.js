import { getLevel } from '../level';
import fetchData from '../http';

// Мокаем модуль http
jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return level if status is ok', () => {
  // Настраиваем мок на успешный ответ
  fetchData.mockReturnValue({ status: 'ok', level: 5 });

  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 5');
  // Проверяем, что мок был вызван с правильным URL
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('should return error message if status is not ok', () => {
  // Настраиваем мок на неуспешный ответ
  fetchData.mockReturnValue({ status: 'error' });

  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});