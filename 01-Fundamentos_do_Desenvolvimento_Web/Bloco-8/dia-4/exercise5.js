// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce( (acc, word) => {
    return acc + word.split('').reduce( (count, letter) => {
      if (letter === 'a' || letter === 'A') {
        return count += 1
      } else {
        return count
      }
    },0)
  }, 0)
}

console.log(containsA())