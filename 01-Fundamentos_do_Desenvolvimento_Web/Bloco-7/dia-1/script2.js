// 1. Crie uma função que receba um número e retorne seu fatorial.


const factorial = (N) => {
  let result = 1
  for(let index = 1; index <= N; index += 1) {
    result = result * index;
  }
  console.log(`Esse é o fatorial ${result}`);
}

factorial(4)

// 2. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (phrase) => {
  let lista =  phrase.split(' ')
  let word = lista[0]
  for(let index = 1; index < lista.length; index += 1){
    if(word.length < lista[index].length)
    word = lista[index]
  } 
  return word
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));