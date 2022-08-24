// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce( (acc, word) => acc + word.split('')
    .reduce( (count, letter) => letter === 'a' || letter === 'A' ? count += 1 : count, 0), 0)

console.log(containsA())