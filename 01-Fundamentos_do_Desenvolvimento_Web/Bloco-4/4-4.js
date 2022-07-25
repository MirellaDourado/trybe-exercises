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