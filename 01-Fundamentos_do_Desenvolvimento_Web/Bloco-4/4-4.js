//  Parte I - Objetos e For/In

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda,', info.personagem)

// 2.Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim'
info.recorrente = 'Sim'

console.log(info)

//  3. Faça um for/in que mostre todas as chaves do objeto

for(let key in info){
  console.log(key)
}

// 4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto
for(let key in info){
  console.log(info[key])
}

// 5.

let infoCharacter = {
  personagem: 'Tio Patinhas', 
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas', 
  recorrente:'Sim'
}

console.log(info.personagem, 'e', infoCharacter.personagem)
console.log(info.origem, 'e', infoCharacter.origem)
console.log(info.nota, 'e', infoCharacter.nota)

if (info.recorrente !== infoCharacter.recorrente){
  console.log(info.recorrente, 'e', infoCharacter.recorrente)
} else {
  console.log('Ambos recorrentes.')
}

// 6. Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo)

// 7. Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto

leitor.livrosFavoritos[1] = {}
leitor.livrosFavoritos[1].titulo = 'Harry Potter e o Prisioneiro de Azkaban'
leitor.livrosFavoritos[1].autor = 'JK Rowling'
leitor.livrosFavoritos[1].editora = 'Rocco'

console.log(leitor.livrosFavoritos[1])

// 8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos"

if (leitor.livrosFavoritos.length > 1){
  console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos')
} else if (leitor.livrosFavoritos.length === 1){
  console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livro favorito')
} else {
  console.log(leitor.nome, 'não tem livros favoritos')
}

// Parte II - Funções

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for
let result = ""

function palindromo (palavra){
  let result = palavra.split('').reverse().join('');
  if(result === palavra){
    return true
  } else {
    return false
  }
}


console.log(palindromo('arara'))

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function theBiggestInArray (numbers){
  let maior = 0
  for (let index in numbers){
    if(numbers[maior] < numbers[index]){
      maior = index
    }
  }

  return maior
}

console.log(theBiggestInArray([1, 3, 4, 6]))

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function theSmallestInArray (numbers){
  let menor = 0
  for (let index in numbers){
    if(numbers[menor] > numbers[index]){
      maior = index
    }
  }

  return menor
}

console.log(theSmallestInArray([1, 3, 4, 6]))

//