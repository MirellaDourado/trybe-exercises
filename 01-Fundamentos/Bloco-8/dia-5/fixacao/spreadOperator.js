// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'kiwi', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'leite condensado', 'banana'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));