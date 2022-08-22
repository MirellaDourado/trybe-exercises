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

// 3. INDEX.HTML

// 4. 🚀 Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// O nome da função deverá ser ;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'))

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'CSS', 'HTML']
  let result = `${func}\nMinhas três principais habilidades são:\n`

  for (let index = 0; index < skills.length; index += 1){
    result += `-${skills[index]}\n`
  }
  return result
}

console.log(minhasSkills(substituaX('Bebeto')))