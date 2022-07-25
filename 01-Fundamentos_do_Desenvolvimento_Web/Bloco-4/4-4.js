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