export default function sortHeroes(heroes) {
  // Используем slice(), чтобы создать копию массива и не мутировать исходный.
  return heroes.sort((a, b) => b.health - a.health);
}